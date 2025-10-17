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
  items: [
    {
      id: '1',
      artist: 'Nova Rae',
      name: 'Tour Skate Deck 1',
      images: [
        '/assets/static/images/merchandise/merch-store.jpg',
        '/assets/static/images/merchandise/merch-store.jpg',
        '/assets/static/images/merchandise/merch-store.jpg',
        '/assets/static/images/merchandise/merch-store.jpg',
      ],
      description:
        'Limited edition skate deck designed by the Fangri-la Design Haus TeamLimited edition skate deck designed by the Fangri-la Design Haus TeamLimited edition skate deck designed by the Fangri-la Design Haus Team',
      price: 125,
      cartCount: 1,
      stock: 2,
      labels: [
        {
          name: '50 OF 100 AVAILABLE',
          color: '#fff',
          background: '#4cc8bc',
        },
        {
          name: 'Exclusive early access',
          color: '#111',
          background: '#fff7a1',
        },
        {
          name: 'wearable',
          color: '#fff',
          background: '#2c2e35',
        },
      ],
      options: {
        colors: ['#FFF7A1', '#A1FFAF', '#A1A6FF', '#FFA1EB', '#FFA1A3'],
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      },
      parameters: [
        {
          name: 'materials',
          value: ['Wood, Paint, Fabric'],
        },
        {
          name: 'dimensions',
          value: ['10x300x60mm'],
        },
        {
          name: 'weight',
          value: ['5kg'],
        },
      ],

    },

  ],
};
