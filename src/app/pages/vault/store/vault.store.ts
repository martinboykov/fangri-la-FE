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
import { initialVaultSlice } from './vault.slice';
import { getById } from './vault.updaters';

export const VaultStore = signalStore(
  // { providedIn: 'root' },
  withState(initialVaultSlice),
  withLoading(),
  withRequestStatus(),
  withProps((_) => {
    return {};
  }),
  withMethods((store) => {
    const dataService = inject(DataService);
    const notificationService = inject(ToastService);
    const router = inject(Router);
    const loaderService = inject(LoadingService);
    // const getMerchandise = rxMethod<string>((input$) =>
    //   input$.pipe(
    //     // tap((_) => store._appStore.presentLoading()),
    //     tap((_) => {
    //       patchState(store, presentLoading());
    //       patchState(store, setPending());
    //     }),
    //     switchMap((expertId) => {
    //       console.log('🚀 ~ switchMap ~ expertId():', expertId);

    //       if (!expertId) {
    //         patchState(store, setFulfilled());
    //         patchState(store, dismissLoading());
    //         return EMPTY;
    //       }
    //       return dataService.getDates(expertId).pipe(
    //         tapResponse({
    //           next: (res) => {
    //             if (res) {
    //               patchState(store, updateDates(res.data));
    //             }
    //             // if (store.isAppStoreEmpty()) {
    //             //   store._appStore.setExperts({
    //             //     items: res.data.items,
    //             //   });
    //             // }
    //           },
    //           error: (err: HttpErrorResponse) => {
    //             console.log(err);
    //             console.error(
    //               `VaultStore getDates error: ${err.message}`,
    //             );
    //             patchState(store, setError());
    //             notificationService.presentErrorToast(err?.error?.message);
    //           },
    //           complete: () => {
    //             console.log('VaultStore getDates  complete');
    //             patchState(store, setFulfilled());
    //           },
    //           finalize: () => {
    //             console.log('VaultStore getDates  finalize');
    //             patchState(store, dismissLoading());
    //             // store._appStore.dismissLoading();
    //           },
    //         }),
    //       );
    //     }),
    //   ),
    // );

    return {
      // getMerchandise: (expertId: Signal<string>) => getMerchandise(expertId),
      getById: (merchId: string) => getById(merchId),
      reset: () => patchState(store, initialVaultSlice),
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
          // console.log('VaultStore  expertId', store.expertId());
          // console.log('VaultStore  selectedDate', store.selectedDate());
          // console.log('VaultStore  days', store.dates());
        },
        { injector },
      );
    },
  })),
  // withLocalStorage(Stores.APP_STORE),
);
