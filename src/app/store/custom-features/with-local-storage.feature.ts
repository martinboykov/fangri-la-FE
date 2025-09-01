import { effect, inject, Injector } from '@angular/core';
import {
  getState,
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  withHooks,
  withProps,
} from '@ngrx/signals';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
// import { StorageService } from '../services/storage/storage.service';

export function withLocalStorage(key: string): SignalStoreFeature {
  return signalStoreFeature(
    withProps((_) => {
      return {
        _storageService: inject(StorageService),
      };
    }),
    withHooks((store) => ({
      onInit: async () => {
        const injector = inject(Injector);
        const authService = inject(AuthService);
        authService.user$.subscribe(async (user) => {
          if (user) {
            const stateJson = await store._storageService.getItem(key);
            if (stateJson) {
              const state = JSON.parse(stateJson);
              patchState(store, state);
              console.log(
                `withLocalStorage onInit state of ${key} loaded`,
                state,
              );
            }
          } else {
            await store._storageService.removeItem(key);
          }
        });

        effect(
          async () => {
            const state = getState(store);
            const stateJson = JSON.stringify(state);
            await store._storageService.setItem(key, stateJson);
          },
          { injector },
        );
      },
    })),
  );
}
