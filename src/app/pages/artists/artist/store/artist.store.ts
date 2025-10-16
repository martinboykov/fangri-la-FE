import {
  signalStore,
  withHooks,
  withMethods,
  withState,
  patchState,
  PartialStateUpdater,
} from '@ngrx/signals';
import { effect, inject, Injector } from '@angular/core';
import { User } from 'src/app/models/auth.model';
import { TranslationService } from 'src/app/services/translation/translation.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { switchMap } from 'rxjs';
import {
  Artist,
  ArtistSlice,
  ContentItem,
  initialArtistSlice,
} from './artist.slice';
import { ArtistsStore } from '../../store/artists.store';
import {
  increaseLikes,
  addChatMessage,
  updateImageUrl,
  updateContent,
  setArtist,
  addContentItem,
} from './artist.updater';
import { AuthStore } from 'src/app/services/auth/store/auth.store';
import { withLocalStorage } from 'src/app/store/custom-features/with-local-storage.feature';
import { Stores } from 'src/app/constants';
import { ToastService } from 'src/app/services/modals/toast/toast.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ModalController, Platform } from '@ionic/angular/standalone';
import { artists } from '../../store/db';

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
    const authService = inject(AuthService);
    const artistsStore = inject(ArtistsStore);
    const router = inject(Router);
    const modalController = inject(ModalController);

    return {
      setActiveTab: (tabIndex: number) =>
        patchState(store, { activeTab: tabIndex }),

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
        patchState(store, addChatMessage(message, authService.user() as User)),
      updateImageUrl: (contentId: string, index: number, url: string) => {
        patchState(store, updateImageUrl(contentId, index, url));
      },
      updateContent: (contentId: string, newContent: string) => {
        patchState(store, updateContent(contentId, newContent));
      },
      createContentItem: (content: ContentItem) => {
        patchState(store, addContentItem(content));
        // artistsStore.addContentItem(store.artist.id(), content);
        artists[0].content = [content,...artists[0].content];
        router.navigateByUrl('artists/' + store.artist.id());
        modalController.dismiss();
      },
      updatePlatform: (
        linkType: LinkType,
        platform: PlatformType,
        value: string,
      ) => {},
      reset: () => patchState(store, initialArtistSlice),
    };
  }),
  withMethods((store) => {
    const toastService = inject(ToastService);
    const artistsStore = inject(ArtistsStore);
    const router = inject(Router);
    const ngxTranslateService = inject(TranslateService);
    const fileUpload = (
      event: any,
      fileType: FileType,
    ): Promise<string | ArrayBuffer | null> => {
      return new Promise((resolve, reject) => {
        const files = event.target.files;
        let imagePath = '';
        let url: string | ArrayBuffer | null = '';
        if (files.length === 0) return;

        const mimeType = files[0].type;
        console.log(
          '🚀 ~ ContentItemPage ~ onFileChanged ~ mimeType:',
          mimeType,
        );
        if (!mimeType.includes(fileType)) {
          console.log('Only images are supported.');
          toastService.presentToast({
            message: `Only files with ${fileType} file type are supported.`,
            duration: 5000,
            isWarning: true,
          });
          resolve(url);
        }
        const reader = new FileReader();
        imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = (_event) => {
          console.log('🚀 ~ ContentItemPage ~ onFileChanged ~ _event:', _event);
          url = reader.result;
          console.log('🚀 ~ fileUpload ~ url:', url);

          resolve(url);
        };
        reader.onerror = (error) => reject(error);
      });
    };
    return {
      fileUpload,
      getArtistById: (artistId: string) => {
        console.log('🚀 ~ artistId:', artistId);
        const artist = artistsStore
          .artists()
          .find((artist) => artist.id === artistId);
        if (artist !== undefined) {
          patchState(store, setArtist(artist as Artist));
          store.setActiveTab(1);
        }
      },
      onFileChanged: async (
        event: any,
        fileType: FileType,
        contentId: string,
        index: number,
      ) => {
        const url = await fileUpload(event, fileType);
        if (!url) return;
        if (typeof url === 'string') {
          store.updateImageUrl(contentId, index, url);
        }
      },
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
            store.getArtistById(user.id);
          } else {
            store.reset();
          }
        });
      effect(
        () => {
          console.log('ArtistStore [activeTab, artist]', [
            store.activeTab(),
            store.artist(),
          ]);
        },
        { injector },
      );
    },
  })),
  // withLocalStorage(Stores.ARTIST_STORE),
);
