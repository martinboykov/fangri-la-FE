import { Component, OnInit } from '@angular/core';
import { HeaderInnerPageComponent } from 'src/app/components/headers/header-inner-page/header-inner-page.component';
import { SharedModule } from 'src/app/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-merchandise-list',
  templateUrl: './merchandise-list.page.html',
  styleUrls: ['./merchandise-list.page.scss'],
  standalone: true,
  imports: [SharedModule, HeaderInnerPageComponent],
})
export class MerchandiseListPage implements OnInit {
  currency = environment.currency;
  merchandise = {
    itemsCount: 123,
    artistCount: 23,
    items: [
      {
        id: '1',
        artist: 'Nova Rae',
        name: 'Tour Skate Deck',
        image: '/assets/static/images/merch-store.jpg',
        description:
          'Limited edition skate deck designed by the Fangri-la Design Haus Team',
        price: '125',
        labels: [
          {
            name: '50 OF 100 AVAILABLE',
            color: 'text-white',
            background: 'bg-green-200',
          },
          {
            name: 'Exclusive early access',
            color: 'text-black-100',
            background: 'bg-yellow-200',
          },
        ],
      },
      {
        id: '2',
        artist: 'OG Mondo',
        name: 'Tour Skate Deck',
        image: '/assets/static/images/merch-store-xs.jpg',
        description:
          'Limited edition skate deck designed by the Fangri-la Design Haus Team',
        price: '310',
        labels: [
          {
            name: '50 OF 100 AVAILABLE',
            color: 'text-white',
            background: 'bg-green-200',
          },
          {
            name: 'Exclusive early access',
            color: 'text-black-100',
            background: 'bg-yellow-200',
          },
        ],
      },
      {
        id: '3',
        artist: 'Soliah Skye',
        name: 'Tour Skate Deck',
        image: '/assets/static/images/merch-store-xl.jpg',
        description:
          'Limited edition skate deck designed by the Fangri-la Design Haus Team',
        price: '97',
        labels: [
          {
            name: '50 OF 100 AVAILABLE',
            color: 'text-white',
            background: 'bg-green-200',
          },
          {
            name: 'Exclusive early access',
            color: 'text-black-100',
            background: 'bg-yellow-200',
          },
        ],
      },
      {
        id: '4',
        artist: 'Koryn',
        name: 'Tour Skate Deck',
        image: '/assets/static/images/merch-store.jpg',
        description:
          'Limited edition skate deck designed by the Fangri-la Design Haus Team',
        price: '100',
        labels: [
          {
            name: '50 OF 100 AVAILABLE',
            color: 'text-white',
            background: 'bg-green-200',
          },
          {
            name: 'Exclusive early access',
            color: 'text-black-100',
            background: 'bg-yellow-200',
          },
        ],
      },
      {
        id: '5',
        artist: 'KASHKIDD',
        name: 'Tour Skate Deck',
        image: '/assets/static/images/merch-store.jpg',
        description:
          'Limited edition skate deck designed by the Fangri-la Design Haus Team',
        price: '100',
        labels: [
          {
            name: '50 OF 100 AVAILABLE',
            color: 'text-white',
            background: 'bg-green-200',
          },
          {
            name: 'Exclusive early access',
            color: 'text-black-100',
            background: 'bg-yellow-200',
          },
        ],
      },
    ],
  };
  constructor() {}

  ngOnInit() {}
}
