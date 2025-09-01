import {
  signalStoreFeature,
  SignalStoreFeature,
  withComputed,
  withHooks,
  withProps,
  withState,
} from '@ngrx/signals';
import { BaseSlice, initialBaseSlice } from './with-base.slice';
import { computed, inject, Signal } from '@angular/core';
import { StorageService } from 'src/app/services/storage/storage.service';
// import { StorageService } from '../services/storage/storage.service';
import { withDevtools } from '@angular-architects/ngrx-toolkit';
import { AppStore } from '../../app.store';
import { Stores } from 'src/app/constants';
export function withBase(name: string): SignalStoreFeature<
  {
    state: {};
    props: {};
    methods: {};
  },
  {
    state: BaseSlice;
    props: {
      storeName: Signal<string>;
    };
    methods: {};
  }
>;
export function withBase(name: string): SignalStoreFeature {
  return signalStoreFeature(
    withState(initialBaseSlice),
    withComputed((_) => ({
      storeName: computed(() => name),
    })),

    withHooks((store) => ({
      onInit: () => {
        console.log('onInit', store.storeName());
        console.log(store);
      },
      onDestroy() {
        console.log('onDestroy', store.storeName());
        console.log(store);
      },
      effect() {},
    })),
    withDevtools(name),
  );
}
