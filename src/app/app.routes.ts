import { Routes } from '@angular/router';
import { translationGuard } from './guards/translate.guard';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.routes),
    canActivate: [translationGuard],
  },
  {
    path: 'artists',
    loadChildren: () =>
      import('./pages/artists/artists.routes').then((m) => m.routes),
    canActivate: [translationGuard, authGuard],
  },
  {
    path: 'merchandise',
    loadChildren: () =>
      import('./pages/merchandise/merchandise.routes').then((m) => m.routes),
    canActivate: [translationGuard, authGuard],
  },
  {
    path: 'nfc',
    loadComponent: () => import('./pages/nfc/nfc.page').then((m) => m.NfcPage),
  },

];
