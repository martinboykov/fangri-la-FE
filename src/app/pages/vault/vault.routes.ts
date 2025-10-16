import { Routes } from '@angular/router';
import { VaultContainerPage } from './vault-container.page';

export const routes: Routes = [
  {
    path: '',
    component: VaultContainerPage,
    children: [
      {
        path: 'list',
        loadComponent: () =>
          import('./vault-list/vault-list.page').then((m) => m.VaultListPage),
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./vault-item/vault-item.page').then((m) => m.VaultItemPage),
      },
      {
        path: ':id/exclusive-content',
        loadComponent: () =>
          import('./vault-exclusive-content/vault-exclusive-content.page').then(
            (m) => m.VaultExclusiveContentPage,
          ),
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
    ],
  },
];
