import { merchandiseData } from 'src/app/db';

export type MerchandiseStatus = 'IN_STOCK' | 'OUT_OF_STOCK' | 'IN_CART';
export enum MerchandiseStatusEnum {
  IN_STOCK = 'IN_STOCK',
  OUT_OF_STOCK = 'OUT_OF_STOCK',
}
console.log('🚀 ~ MerchandiseStatusEnum:', MerchandiseStatusEnum);
export interface Merchandise {
  id: string;
  artist: string;
  name: string;
  images: string[];
  video?: { poster: string; sources: { src: string; type: string }[] };
  description: string;
  price: number;
  stock: number;
  options: { colors: string[]; sizes: string[] };
  parameters: {
    name: string;
    value: string[];
  }[];
  labels: {
    name: string;
    color: string;
    background: string;
  }[];
  sku?: string;
}
export interface MerchandiseSlice {
  totalItemsCount: number;
  totalArtistCount: number;
  items: Merchandise[];
  shippingInfo: string; // html
}


export const initialMerchandiseSlice = {
  totalItemsCount: merchandiseData.reduce((acc, curr) => acc + curr.length, 0),
  totalArtistCount: merchandiseData.length,
  items: [
    ...merchandiseData[0],
    ...merchandiseData[1],
    ...merchandiseData[2],
    ...merchandiseData[3],
    ...merchandiseData[4],
  ],
  // items: [
  //   {
  //     id: '1',
  //     artist: 'Nova Rae',
  //     name: 'Virtual Vinil',
  //     images: [
  //       '/assets/static/images/merchandise/merch-1.jpg',
  //       '/assets/static/images/merchandise/merch-store.jpg',
  //       '/assets/static/images/merchandise/merch-store.jpg',
  //       '/assets/static/images/merchandise/merch-store.jpg',
  //     ],
  //     video: {
  //       poster: '/assets/static/videos/video_nfc.png',
  //       sources: [
  //         {
  //           src: '/assets/static/videos/video_nfc.mp4',
  //           type: 'video/mp4',
  //         },
  //       ],
  //     },
  //     description:
  //       'Limited edition skate deck designed by the Fangri-la Design Haus TeamLimited edition skate deck designed by the Fangri-la Design Haus TeamLimited edition skate deck designed by the Fangri-la Design Haus Team',
  //     price: 125,
  //     stock: 2,
  //     labels: [
  //       {
  //         name: '50 OF 100 AVAILABLE',
  //         color: '#fff',
  //         background: '#4cc8bc',
  //       },
  //       {
  //         name: 'Exclusive early access',
  //         color: '#111',
  //         background: '#fff7a1',
  //       },
  //       {
  //         name: 'wearable',
  //         color: '#fff',
  //         background: '#2c2e35',
  //       },
  //     ],
  //     options: {
  //       colors: ['#FFF7A1', '#A1FFAF', '#A1A6FF', '#FFA1EB', '#FFA1A3'],
  //       sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  //     },
  //     parameters: [
  //       {
  //         name: 'materials',
  //         value: 'Wood, Paint, Fabric',
  //       },
  //       {
  //         name: 'dimensions',
  //         value: '10x300x60mm',
  //       },
  //       {
  //         name: 'weight',
  //         value: '5kg',
  //       },
  //     ],

  //     status: MerchandiseStatusEnum.IN_STOCK,
  //   },
  //   {
  //     id: '2',
  //     artist: 'OG Mondo',
  //     name: 'Tour Skate Deck 2',
  //     images: ['/assets/static/images/merchandise/merch-store-2.jpg'],
  //     description:
  //       'Limited edition skate deck designed by the Fangri-la Design Haus Team',
  //     price: 310,
  //     stock: 5,

  //     labels: [
  //       {
  //         name: '50 OF 100 AVAILABLE',
  //         color: '#fff',
  //         background: '#4cc8bc',
  //       },
  //       {
  //         name: 'Exclusive early access',
  //         color: '#111',
  //         background: '#fff7a1',
  //       },
  //     ],
  //     status: MerchandiseStatusEnum.OUT_OF_STOCK,
  //   },
  //   {
  //     id: '3',
  //     artist: 'Soliah Skye',
  //     name: 'Tour Skate Deck 3',
  //     images: ['/assets/static/images/merchandise/merch-store-3.jpg'],
  //     description:
  //       'Limited edition skate deck designed by the Fangri-la Design Haus Team',
  //     price: 97,
  //     stock: 20,

  //     labels: [
  //       {
  //         name: '50 OF 100 AVAILABLE',
  //         color: '#fff',
  //         background: '#4cc8bc',
  //       },
  //       {
  //         name: 'Exclusive early access',
  //         color: '#111',
  //         background: '#fff7a1',
  //       },
  //     ],
  //     status: MerchandiseStatusEnum.OUT_OF_STOCK,
  //   },
  //   {
  //     id: '4',
  //     artist: 'Koryn',
  //     name: 'Tour Skate Deck 4',
  //     images: ['/assets/static/images/merchandise/merch-store.jpg'],
  //     description:
  //       'Limited edition skate deck designed by the Fangri-la Design Haus Team',
  //     price: 105,
  //     stock: 30,

  //     labels: [
  //       {
  //         name: '50 OF 100 AVAILABLE',
  //         color: '#fff',
  //         background: '#4cc8bc',
  //       },
  //       {
  //         name: 'Exclusive early access',
  //         color: '#111',
  //         background: '#fff7a1',
  //       },
  //     ],
  //     status: MerchandiseStatusEnum.IN_STOCK,
  //   },
  //   {
  //     id: '5',
  //     artist: 'KASHKIDD',
  //     name: 'Tour Skate Deck 5',
  //     images: ['/assets/static/images/merchandise/merch-store.jpg'],
  //     description:
  //       'Limited edition skate deck designed by the Fangri-la Design Haus Team',
  //     price: 100,
  //     stock: 40,
  //     labels: [
  //       {
  //         name: '50 OF 100 AVAILABLE',
  //         color: '#fff',
  //         background: '#4cc8bc',
  //       },
  //       {
  //         name: 'Exclusive early access',
  //         color: '#111',
  //         background: '#fff7a1',
  //       },
  //     ],
  //     status: MerchandiseStatusEnum.IN_STOCK,
  //   },
  // ],
  shippingInfo: `
  <p>SHIPPING</p>
    <p>SHIPPING TO A ZARA STORE - FREE<br />Delivery in 4-6 working days.<br />This option is not available for orders that include a HOME large item.<br />HOME DELIVERY</p>
    <ul>
      <li>Delivery in 3-5 working days - 9.95 лв / 5.09 EURShipping will be free for orders over 100&nbsp;лв / 51.12 EUR only for non-discounted items.</li>
      <li>Delivery in 2-3 working days - 19.95 лв / 10.20 EUR</li>
    </ul>
    <p>Remember that orders including a large HOME item will be charged a corresponding delivery rate.<br />DROP POINT DELIVERY - 9.95 лв / 5.09 EUR<br />Shipping will be free for orders over 100&nbsp;лв / 51.12 EUR only for non-discounted items.Delivery in 3-5 working days.<br />This option is not available for orders that include a HOME large item.</p>
  `,
};
