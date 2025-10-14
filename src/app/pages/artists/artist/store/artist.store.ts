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
import { Artist, ContentItem, initialArtistSlice } from './artist.slice';
import { ArtistsStore } from '../../store/artists.store';
import {
  increaseLikes,
  addChatMessage,
  updateImageUrl,
  updateContent,
} from './artist.updater';
import { AuthStore } from 'src/app/services/auth/store/auth.store';
import { withLocalStorage } from 'src/app/store/custom-features/with-local-storage.feature';
import { Stores } from 'src/app/constants';
import { ToastService } from 'src/app/services/modals/toast/toast.service';

export type FileType = 'image' | 'video';
export enum FileTypeEnum {
  IMAGE = 'image',
  VIDEO = 'video',
}

export type LinkType = 'music' | 'socials' | 'shows';
export enum LinkTypeEnum {
  MUSIC = 'music',
  SOCIALS = 'socials',
  SHOWS = 'shows',
}

export type PlatformType =
  | 'spotify'
  | 'apple music'
  | 'instagram'
  | 'x'
  | 'tiktok'
  | 'youtube'
  | 'facebook'
  | 'bandsintown'
  | 'songkick';

export enum PlatformTypeEnum {
  SPOTIFY = 'spotify',
  APPLE_MUSIC = 'apple music',
  INSTAGRAM = 'instagram',
  X = 'x',
  TIKTOK = 'tiktok',
  YOUTUBE = 'youtube',
  FACEBOOK = 'facebook',
  BANDSINTOWN = 'bandsintown',
  SONGKICK = 'songkick',
}

export const ArtistStore = signalStore(
  { providedIn: 'root' },
  withState(initialArtistSlice),

  withMethods((store) => {
    const authStore = inject(AuthStore);
    const artistsStore = inject(ArtistsStore);
    return {
      setActiveTab: (tabIndex: number) =>
        patchState(store, { activeTab: tabIndex }),
      getArtistById: (artistId: string) => {
        const artist = artistsStore
          .artists()
          .find((artist) => artist.id === artistId);
        if (artist !== undefined) {
          patchState(store, { artist: artist as Artist });
        }
      },
      getContentById: (contentId: string) => {
        if (!store.artist.content) {
          return null;
        }
        return store.artist
          .content()
          .find((content: ContentItem) => content.id === contentId);
      },
      increaseLikes: (contentId: string) =>
        patchState(store, increaseLikes(contentId)),
      addChatMessage: (message: string) =>
        patchState(store, addChatMessage(message, authStore.user() as User)),
      updateImageUrl: (contentId: string, index: number, url: string) => {
        patchState(store, updateImageUrl(contentId, index, url));
      },
      updateContent: (contentId: string, newContent: string) => {
        patchState(store, updateContent(contentId, newContent));
      },
      updatePlatform: (linkType: LinkType, platform: PlatformType, value: string) => {

      },
      reset: () => patchState(store, initialArtistSlice),
    };
  }),
  withMethods((store) => {
    const toastService = inject(ToastService);
    const onFileChanged = (
      event: any,
      fileType: FileType,
      contentId: string,
      index: number,
    ) => {
      const files = event.target.files;
      let imagePath = '';
      let id = contentId;
      let url: any;
      if (files.length === 0) return;

      const mimeType = files[0].type;
      console.log('🚀 ~ ContentItemPage ~ onFileChanged ~ mimeType:', mimeType);
      if (!mimeType.includes(fileType)) {
        console.log('Only images are supported.');
        toastService.presentToast({
          message: `Only files with ${fileType} file type are supported.`,
          duration: 5000,
          isWarning: true,
        });
        return;
      }
      const reader = new FileReader();
      imagePath = files;
      reader.readAsDataURL(files[0]);
      reader.onload = (_event) => {
        console.log('🚀 ~ ContentItemPage ~ onFileChanged ~ _event:', _event);
        url = reader.result;
        store.updateImageUrl(id, index, url);
      };
    };
    return {
      onFileChanged: (
        event: any,
        fileType: FileType,
        contentId: string,
        index: number,
      ) => onFileChanged(event, fileType, contentId, index),
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
  // withLocalStorage(Stores.ARTIST_STORE),
);
