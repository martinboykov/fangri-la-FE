import { Routes } from '@angular/router';
import { ArtistsContainerPage } from './artists-container.page';
import { ArtistStore } from './artist/store/artist.store';

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
        path: ':artistId/content/:contentId',
        loadComponent: () =>
          import('./artist/tabs/content/content-item/content-item.page').then(
            (m) => m.ContentItemPage,
          ),
      },
      {
        path: ':artistId/new-content',
        loadComponent: () =>
          import('./artist/tabs/content/new-content/new-content.page').then(
            (m) => m.NewContentPage,
          ),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./artist/artist.page').then((m) => m.ArtistPage),
        // providers: [ArtistStore],
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];
