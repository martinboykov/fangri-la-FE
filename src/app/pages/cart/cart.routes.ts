import { Routes } from '@angular/router';
import { CartContainerPage } from './cart-container.page';

export const routes: Routes = [
  {
    path: '',
    component: CartContainerPage,
    children: [
      {
        path: 'cart',
        loadComponent: () =>
          import('./cart-main/cart.page').then((m) => m.CartPage),
      },
      {
        path: '',
        redirectTo: 'cart',
        pathMatch: 'full',
      },
    ],
  },
];
