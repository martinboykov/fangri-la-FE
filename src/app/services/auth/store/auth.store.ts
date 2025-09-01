import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { AuthStoreSlice, initialAuthSlice } from './auth.slice';
import { effect, inject, Injector } from '@angular/core';

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withState(initialAuthSlice),
  withMethods((store) => ({
    updateUser: (user: AuthStoreSlice['user']) => {
      patchState(store, { user });
    },
  })),
  withHooks((store) => ({
    onInit: () => {
      const injector = inject(Injector);
      effect(() => {}, { injector });
    },
  })),
);
