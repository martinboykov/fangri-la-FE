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

export const initialVaultSlice = {
  totalItemsCount:  merchandiseData[0].length,
  items: [
    ...(merchandiseData || [[]])[0].map((item, index) => ({
      ...item,
      name: item.name,
    })),
    ...(merchandiseData || [[]])[1].map((item, index) => ({
      ...item,
      name: item.name,
    })),
    ...(merchandiseData || [[]])[2].map((item, index) => ({
      ...item,
      name: item.name,
    })),
    ...(merchandiseData || [[]])[3].map((item, index) => ({
      ...item,
      name: item.name,
    })),
    ...(merchandiseData || [[]])[4].map((item, index) => ({
      ...item,
      name: item.name,
    })),
  ],
};
