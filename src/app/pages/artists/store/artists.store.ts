import {
  signalStore,
  withHooks,
  withMethods,
  withState,
  patchState,
  withComputed,
} from '@ngrx/signals';
import { computed, effect, inject, Injector } from '@angular/core';
import { User } from 'src/app/models/auth.model';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { switchMap } from 'rxjs';
import { initialArtistsSlice } from './artists.slice';
import { artists } from './db';
import { setActiveArtistId, addContentItem } from './artists.updater';
import { ContentItem } from '../artist/store/artist.slice';

export const ArtistsStore = signalStore(
  { providedIn: 'root' },
  withState(initialArtistsSlice),
  withComputed((store) => ({
    artist: computed(() => {
      store.artists().find((artist) => artist.id === store.activeArtistId());
    }),
  })),
  withMethods((store) => {
    const loadArtists = () => {
      // const artists = [...artists];
      patchState(store, { artists });
    };
    return {
      loadArtists: () => loadArtists(),
      // getArtistById: (id: string) => {
      //   return store.artists().find((artist) => artist.id === id);
      // },
      // setActiveArtistId: (id: string) => patchState(store, setActiveArtistId(id)),
      // addContentItem: (artistId: string, content: ContentItem) =>
      //   patchState(store, addContentItem(artistId, content)),
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
