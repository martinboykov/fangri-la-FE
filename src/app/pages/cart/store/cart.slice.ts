import { count } from 'rxjs';
import {
  Merchandise,
  MerchandiseStatusEnum,
  initialMerchandiseSlice,
} from '../../merchandise/store/merchandise.slice';

export interface CartItem extends Merchandise {
  cartCount: number;
}
export interface CartSlice {
  items: CartItem[];
}

export const initialCartSlice = {
  items: [] as CartItem[],
};
