import {
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { LoadingSlice, initialLoadingSlice } from './with-loading.slice';
import { computed, effect, inject, Signal } from '@angular/core';
import { LoadingService } from 'src/app/services/modals/loading/loading.service';
import {
  dismissLoading,
  presentLoading,
  toggleLoading,
} from './with-loading.updaters';

export function withLoading(): SignalStoreFeature<
  {
    state: {};
    props: {};
    methods: {};
  },
  {
    state: LoadingSlice;
    props: {
      _loadingService: LoadingService;
    };
    methods: {
      presentLoading: () => void;
      dismissLoading: () => void;
      toggleLoading: () => void;
      resetLoading: () => void;
    };
  }
>;
export function withLoading(): SignalStoreFeature {
  return signalStoreFeature(
    withState(initialLoadingSlice),
    withProps((_) => ({
      _loadingService: inject(LoadingService),
    })),
    withMethods((store) => ({
      presentLoading: () => patchState(store, presentLoading()),
      dismissLoading: () => patchState(store, dismissLoading()),
      toggleLoading: () => patchState(store, toggleLoading()),
      resetLoading: () => patchState(store, initialLoadingSlice),
    })),
    withHooks((store) => {
      return {
        onInit: () => {
          effect(() => {
            console.log('withLoading isLoading()', store.isLoading());

            if (store.isLoading()) {
              store._loadingService.presentLoading();
            }
            if(!store.isLoading()) {
              store._loadingService.dismissLoading();
            }
          });
        },
      };
    }),
  );
}
