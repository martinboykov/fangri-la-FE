import { PartialStateUpdater } from '@ngrx/signals';
import { CartItem, CartSlice } from './cart.slice';
import { Merchandise } from '../../merchandise/store/merchandise.slice';

export function getById(merchId: string) {
  return (store: CartSlice) =>
    store.items.find((item: CartItem) => item.id === merchId);
}

export function editCount(
  merchId: string,
  amount: number,
): PartialStateUpdater<CartSlice> {
  return (store: CartSlice) => ({
    items: store.items.map((item: CartItem) => {
      if (item.id === merchId) {
        if (item.cartCount <= 1 && amount < 0) {
          return { ...item, cartCount: 1 };
        }
        return { ...item, cartCount: item.cartCount + amount };
      }
      return item;
    }),
  });
}

export function removeItem(
  merchId: string, // ISO string
): PartialStateUpdater<CartSlice> {
  console.log('🚀 ~ removeItem ~ merchId:', merchId);
  return (store: CartSlice) => ({
    items: store.items.filter((item: CartItem) => item.id !== merchId),
  });
}
export function addItem(
  merchandise: Merchandise, // ISO string
): PartialStateUpdater<CartSlice> {
  const cartItem = { ...merchandise, cartCount: 1 };
  return (store: CartSlice) => ({
    items: [...store.items, cartItem],
  });
}
