import {
  patchState,
  signalStore,
  withComputed,
  withFeature,
  withHooks,
  withMethods,
  withProps,
  withState,
} from '@ngrx/signals';

import { Stores } from 'src/app/constants';
import { withLocalStorage } from 'src/app/store/custom-features/with-local-storage.feature';
import { withBase } from 'src/app/store/custom-features/with-base/with-base-feature';
import { initialAppSlice } from './app.slice';
import { Expert } from '../models/expert.model';
import {
  dismissLoading,
  presentLoading,
  toggleLoading,
} from './custom-features/with-loading/with-loading.updaters';
import { effect, inject } from '@angular/core';
import { LoadingService } from '../services/modals/loading/loading.service';
import { withLoading } from './custom-features/with-loading/with-loading.feature';
import { Schedule } from '../models/schedule.model';
import { Advice } from '../models/advice.model';
import { Platform } from '@ionic/angular/standalone';
import { throttleTime } from 'rxjs';
import { setIsScrolled } from './app.updaters';
import {
  ExpertsEnum,
  ExpertsType,
} from './custom-features/with-experts/with-experts.slice';
import { AuthService } from '../services/auth/auth.service';
import { withExperts } from './custom-features/with-experts/with-experts.feature';
import * as expertFeatureUpdaters from './custom-features/with-experts/with-experts.updaters';

export const AppStore = signalStore(
  { providedIn: 'root' },
  withBase(Stores.APP_STORE),
  withState(initialAppSlice),
  withLoading(),
  withFeature((store) =>
    withExperts({
      name: store.storeName(),
      type: ExpertsEnum.PERSONAL,
    }),
  ),
  withFeature((store) =>
    withExperts({
      name: store.storeName(),
      type: ExpertsEnum.LIKED,
    }),
  ),
  withFeature((store) =>
    withExperts({
      name: store.storeName(),
      type: ExpertsEnum.RANKED,
    }),
  ),
  withFeature((store) =>
    withExperts({
      name: store.storeName(),
      type: ExpertsEnum.ALL,
    }),
  ),
  withProps((_) => {
    return { platform: inject(Platform) };
  }),

  withMethods((store) => {
    return {
      setIsScrolled: (value: number) => patchState(store, setIsScrolled(value)),
      toggleIsLiked: (expertId: string) => {
        patchState(store, expertFeatureUpdaters.toggleIsLiked(expertId));
      },
      setDevice: () => {
        patchState(store, { innerWidth: window.innerWidth });
        if (store.platform.is('mobile')) {
          patchState(store, { isMobile: true });
        } else {
          if (store.innerWidth() <= parseInt(store.mobileBreakpoint())) {
            patchState(store, { isMobile: true });
          } else {
            patchState(store, { isMobile: false });
          }
        }
        if (store.innerWidth() <= parseInt(store.mobileBreakpoint())) {
          patchState(store, { isMobileWidth: true });
        } else {
          patchState(store, { isMobileWidth: false });
        }
      },
      reset: () => {
        patchState(store, initialAppSlice);
        store.resetLoading();
        store.resetExperts();
      },
    };
  }),
  withHooks((store) => ({
    onInit: () => {
      const authService = inject(AuthService);
      authService.user$.subscribe(async (user) => {
        if (user) {
        } else {
          store.reset();
        }
      });
      store.setDevice();
      store.platform.resize
        .pipe(throttleTime(10))
        .subscribe(async () => store.setDevice());
    },

    effect() {
      console.log('AppStore effect innerWidth', store.innerWidth());
      console.log('AppStore effect isScrolled', store.isScrolled());
    },
    onDestroy: () => {},
  })),
  // withLocalStorage(Stores.APP_STORE),
);
