import { Routes } from '@angular/router';
import { AuthPage } from './auth.page';

export const routes: Routes = [
  {
    path: '',
    component: AuthPage,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login.page').then((m) => m.LoginPage),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./register/register.page').then((m) => m.RegisterPage),
      },
      {
        path: 'forgotten-password',
        loadComponent: () =>
          import('./forgotten/forgotten.page').then((m) => m.ForgottenPage),
      },

      {
        path: '',
        redirectTo: '/auth/login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
];
