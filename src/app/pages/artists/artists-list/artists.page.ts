import { Component } from '@angular/core';
import { HeaderMainPageComponent } from 'src/app/components/headers/header-main-page/header-main-page.component';
import { SharedModule } from 'src/app/shared.module';
@Component({
  selector: 'app-artists',
  templateUrl: 'artists.page.html',
  styleUrls: ['artists.page.scss'],
  imports: [SharedModule, HeaderMainPageComponent],
})
export class ArtistsPage {
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
