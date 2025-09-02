import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-artists-container',
  templateUrl: 'artists-container.page.html',
  styleUrls: ['artists-container.page.scss'],
  imports: [SharedModule, IonRouterOutlet],
})
export class ArtistsContainerPage {
  artists = [
    {
      id: '1',
      name: 'Nova Rae',
      image: '/assets/static/images/artists/artist-1.jpg',
    },
    {
      id: '2',
      name: 'OG Mondo',
      image: '/assets/static/images/artists/artist-2.jpg',
    },
    {
      id: '3',
      name: 'Soliah Skye',
      image: '/assets/static/images/artists/artist-3.jpg',
    },
    {
      id: '4',
      name: 'Koryn',
      image: '/assets/static/images/artists/artist-4.jpg',
    },
    {
      id: '5',
      name: 'KASHKIDD',
      image: '/assets/static/images/artists/artist-5.jpg',
    },

  ];

  constructor() {}
}
