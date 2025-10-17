import { merchandiseData } from 'src/app/db';
import {
  Merchandise,
  initialMerchandiseSlice,
} from '../../merchandise/store/merchandise.slice';

console.log('🚀 ~ merchandiseData:', merchandiseData);

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
  'CLT/ALT/DEL Tour Virtual VynilTM 6',
  'CLT/ALT/DEL Tour Virtual VynilTM 7',
];

export const initialVaultSlice = {
  totalItemsCount: 7,
  items: [
    ...(merchandiseData || [[]])[0].map((item, index) => ({
      ...item,
      name: item.name,
    })),
  ],
};
