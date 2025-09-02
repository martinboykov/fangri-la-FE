import { Routes } from '@angular/router';
import { ArtistsContainerPage } from './artists-container.page';

export const routes: Routes = [
  {
    path: '',
    component: ArtistsContainerPage,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./artists-list/artists.page').then((m) => m.ArtistsPage),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./artist/artist.page').then((m) => m.ArtistPage),
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];
