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
import { Artist, initialArtistSlice } from './artist.slice';
import { ArtistsStore } from '../../store/artists.store';

export const ArtistStore = signalStore(
  // { providedIn: 'root' },
  withState(initialArtistSlice),
  withMethods((store) => {
    const artistsStore = inject(ArtistsStore);
    return {
      setActiveTab: (tabIndex: number) =>
        patchState(store, { activeTab: tabIndex }),
      getArtistById: (artistId: string) => {
        const artist = artistsStore.getArtistById(artistId);
        if (artist !== undefined) {
          patchState(store, { artist: artist as Artist });
        }
      },
      reset: () => patchState(store, initialArtistSlice),
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
            // store.getArtistById();
          } else {
            store.reset();
          }
        });
      effect(
        () => {
          console.log('ArtistStore activeTab', store.activeTab());
        },
        { injector },
      );
    },
  })),
  // withLocalStorage(Stores.APP_STORE),
);
