import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';
import { EMPTY, from, switchMap, tap } from 'rxjs';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { effect, inject, Injector, Signal } from '@angular/core';
import { DataService } from 'src/app/services/data/data.service';
import { ToastService } from 'src/app/services/modals/toast/toast.service';
import { withRequestStatus } from 'src/app/store/custom-features/with-response/with-request-status.feature';
import {
  setError,
  setFulfilled,
  setPending,
} from 'src/app/store/custom-features/with-response/with-request-status.updaters';
import { tapResponse } from '@ngrx/operators';

import { withLoading } from 'src/app/store/custom-features/with-loading/with-loading.feature';
import {
  dismissLoading,
  presentLoading,
} from 'src/app/store/custom-features/with-loading/with-loading.updaters';
import { Router } from '@angular/router';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { LoadingService } from 'src/app/services/modals/loading/loading.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/auth.model';
import { initialCartSlice } from './cart.slice';
import { addItem, editCount, getById, removeItem } from './cart.updaters';
import { Merchandise } from '../../merchandise/store/merchandise.slice';

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialCartSlice),
  withLoading(),
  withRequestStatus(),
  withProps((_) => {
    return {};
  }),
  withComputed((store) => {
    return {
      totalItemsCount: () => store.items().length,
      totalItemsCost: () =>
        store
          .items()
          .reduce((acc, item) => acc + item.price * item.cartCount, 0),
    };
  }),
  withComputed((store) => {
    return {
      tax: () => store.totalItemsCost() * 0.15,
      shipping: () => 0,
    };
  }),
  withComputed((store) => {
    return {
      totalCost: () => store.totalItemsCost() + store.tax() + store.shipping(),
    };
  }),
  withMethods((store) => {
    const dataService = inject(DataService);
    const notificationService = inject(ToastService);
    const router = inject(Router);
    const loaderService = inject(LoadingService);

    return {
      getById: (merchId: string) => getById(merchId),
      removeItem: (merchId: string) => patchState(store, removeItem(merchId)),
      addItem: (merchandise: Merchandise) =>
        patchState(store, addItem(merchandise)),
      editCount: (merchId: string, amount: number) =>
        patchState(store, editCount(merchId, amount)),
      clearCart: () => patchState(store, { items: [] }),
      reset: () => patchState(store, initialCartSlice),
    };
  }),
  withHooks((store) => ({
    onInit: async () => {
      const injector = inject(Injector);
      const translationService = inject(TranslationService);
      const authService = inject(AuthService);
      let user: User | null = null;
      authService.user$
        .pipe(
          switchMap((currentUser) => {
            user = currentUser;
            return translationService.language$;
          }),
        )
        .subscribe((language) => {
          if (user) {
            // store.getMerchandise();
          } else {
            store.reset();
          }
        });
      effect(
        () => {
          console.log('CartStore  items', store.items());
          // console.log('CartStore  selectedDate', store.selectedDate());
          // console.log('CartStore  days', store.dates());
        },
        { injector },
      );
    },
  })),
  // withLocalStorage(Stores.APP_STORE),
);
