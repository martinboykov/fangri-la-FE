import { Routes } from '@angular/router';
import { CartContainerPage } from './cart-container.page';

export const routes: Routes = [
  {
    path: '',
    component: CartContainerPage,
    children: [
      {
        path: 'items',
        loadComponent: () =>
          import('./cart-main/cart.page').then((m) => m.CartPage),
      },
      {
        path: 'success',
        loadComponent: () =>
          import('./success/success.page').then((m) => m.SuccessPage),
      },
      {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full',
      },
    ],
  },
];
