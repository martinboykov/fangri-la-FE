import { Merchandise, initialMerchandiseSlice } from '../../merchandise/store/merchandise.slice';

export interface VaultSlice {
  totalItemsCount: number;
  items: Merchandise[];
}

const names = [
  'CLT/ALT/DEL Tour Virtual VynilTM 1',
  'CLT/ALT/DEL Tour Virtual VynilTM 2',
  'CLT/ALT/DEL Tour Virtual VynilTM 3',
  'CLT/ALT/DEL Tour Virtual VynilTM 4',
  'CLT/ALT/DEL Tour Virtual VynilTM 5',
]

export const initialVaultSlice = {
  totalItemsCount: 5,
  items: [
    ...initialMerchandiseSlice.items.map((item, index) => ({
      ...item,
      name: names[index],
    })),
  ],
};
