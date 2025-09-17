import {
  signalStore,
  withHooks,
  withMethods,
  withState,
  patchState,
} from '@ngrx/signals';
import { effect, inject, Injector } from '@angular/core';
import { User } from 'src/app/models/auth.model';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { switchMap } from 'rxjs';
import { initialArtistsSlice } from './artists.slice';

export const ArtistsStore = signalStore(
  { providedIn: 'root' },
  withState(initialArtistsSlice),
  withMethods((store) => {
    return {
      getArtistById: (id: string) => {
        return store.artists().find((artist) => artist.id === id);
      },
      reset: () => patchState(store, initialArtistsSlice),
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
            // ...
          } else {
            store.reset();
          }
        });
      effect(
        () => {
          // console.log('ArtistsStore activeTab', store.activeTab());
        },
        { injector },
      );
    },
  })),
  // withLocalStorage(Stores.APP_STORE),
);
