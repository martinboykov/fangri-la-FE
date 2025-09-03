import { Routes } from '@angular/router';
import { MerchandiseContainerPage } from './merchandise-container.page';

export const routes: Routes = [
  {
    path: '',
    component: MerchandiseContainerPage,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./merchandise-list/merchandise-list.page').then((m) => m.MerchandiseListPage),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./merchandise/merchandise.page').then((m) => m.MerchandisePage),
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];
