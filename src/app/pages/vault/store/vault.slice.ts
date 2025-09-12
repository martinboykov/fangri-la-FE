import { Merchandise } from '../../merchandise/store/merchandise.slice';

export interface VaultSlice {
  totalItemsCount: number;
  items: Merchandise[];
}

export const initialVaultSlice = {
  totalItemsCount: 5,
  items: [
    {
      id: '1',
      artist: 'Nova Rae',
      name: 'CLT/ALT/DEL Tour Virtual VynilTM 1',
      images: [
        '/assets/static/images/merch-store.jpg',
        '/assets/static/images/merch-store.jpg',
        '/assets/static/images/merch-store.jpg',
        '/assets/static/images/merch-store.jpg',
      ],
      description:
        'Limited edition skate deck designed by the Fangri-la Design Haus TeamLimited edition skate deck designed by the Fangri-la Design Haus TeamLimited edition skate deck designed by the Fangri-la Design Haus Team',
      price: 125,
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
          value: 'Wood, Paint, Fabric',
        },
        {
          name: 'dimensions',
          value: '10x300x60mm',
        },
        {
          name: 'weight',
          value: '5kg',
        },
      ],
    },
    {
      id: '2',
      artist: 'OG Mondo',
      name: 'Tour Skate Deck 2',
      images: ['/assets/static/images/merch-store-xs.jpg'],
      description:
        'Limited edition skate deck designed by the Fangri-la Design Haus Team',
      price: 310,
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
      ],
    },
    {
      id: '3',
      artist: 'Soliah Skye',
      name: 'Tour Skate Deck 3',
      images: ['/assets/static/images/merch-store-xl.jpg'],
      description:
        'Limited edition skate deck designed by the Fangri-la Design Haus Team',
      price: 97,
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
      ],
    },
    {
      id: '4',
      artist: 'Koryn',
      name: 'Tour Skate Deck 4',
      images: ['/assets/static/images/merch-store.jpg'],
      description:
        'Limited edition skate deck designed by the Fangri-la Design Haus Team',
      price: 105,
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
      ],
    },
    {
      id: '5',
      artist: 'KASHKIDD',
      name: 'Tour Skate Deck 5',
      images: ['/assets/static/images/merch-store.jpg'],
      description:
        'Limited edition skate deck designed by the Fangri-la Design Haus Team',
      price: 100,
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
      ],
    },
  ],
};
