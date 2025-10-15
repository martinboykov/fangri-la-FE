import { Routes } from '@angular/router';
import { translationGuard } from './guards/translate.guard';
import { authGuard } from './guards/auth.guard';
import { userGuard } from './guards/user.guard';
import { MerchandiseStore } from './pages/merchandise/store/merchandise.store';
import { VaultStore } from './pages/vault/store/vault.store';

export const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  // { path: '', redirectTo: '/artists', pathMatch: 'full' },
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
    providers: [MerchandiseStore],
  },
  {
    path: 'vault',
    loadChildren: () =>
      import('./pages/vault/vault.routes').then((m) => m.routes),
    canActivate: [translationGuard, userGuard],
    providers: [VaultStore],
  },
  {
    path: 'cart',
    loadChildren: () =>
      import('./pages/cart/cart.routes').then((m) => m.routes),
    canActivate: [translationGuard, authGuard],
  },
  {
    path: '101',
    loadComponent: () => import('./pages/nfc/nfc.page').then((m) => m.NfcPage),
    canActivate: [translationGuard, userGuard],
  },
  { path: '**',
     loadComponent: () => import('./pages/page-not-found/page-not-found.page').then((m) => m.PageNotFoundPage),
  },


];
