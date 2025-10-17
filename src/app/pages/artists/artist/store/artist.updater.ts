import { PartialStateUpdater } from '@ngrx/signals';
import {
  Artist,
  ArtistSlice,
  ContentItem,
  initialArtistSlice,
} from './artist.slice';
import { User } from 'src/app/models/auth.model';
import dayjs from 'dayjs';
import { LinkType, PlatformType } from './artist.store';

export function setArtist(artist: Artist): PartialStateUpdater<ArtistSlice> {
  return (store) => ({
    artist: {
      ...initialArtistSlice.artist,
      ...artist,
    },
  });
}
export function increaseLikes(
  contentId: string,
): PartialStateUpdater<ArtistSlice> {
  return (store) => ({
    artist: {
      ...store.artist,
      content: ((store.artist.content as ContentItem[]) || []).map(
        (content: any) => {
          if (content.id === contentId && !content.isLiked) {
            return { ...content, likes: content.likes + 1, isLiked: true };
          }
          return content;
        },
      ),
    },
  });
}

export function addChatMessage(
  message: string,
  user: User,
): PartialStateUpdater<ArtistSlice> {
  const newChatItem = {
    id: Date.now().toString(),
    userId: user.id,
    role: user.role,
    name: user.name,
    surname: user.surname,
    shortName: user.shortName,
    img: user.img,
    message,
    date: dayjs().toISOString(), // new Date().toUTCString(),
  };
  // format('ddd h:mm A')
  return (store) => ({
    artist: {
      ...store.artist,
      chat: [...store.artist.chat, newChatItem],
    },
  });
}
export function updateImageUrl(
  contentId: string,
  index: number,
  url: string | ArrayBuffer,
): PartialStateUpdater<ArtistSlice> {
  return (store) => ({
    artist: {
      ...store.artist,
      content: ((store.artist.content as ContentItem[]) || []).map(
        (content: any) => {
          if (content.id === contentId) {
            content.images[index] = url;
          }
          return content;
        },
      ),
    },
  });
}

export function updateContent(
  contentId: string,
  newContent: string,
): PartialStateUpdater<ArtistSlice> {
  return (store) => ({
    artist: {
      ...store.artist,
      content: ((store.artist.content as ContentItem[]) || []).map(
        (content: any) => {
          if (content.id === contentId) {
            content.title = newContent;
          }
          return content;
        },
      ),
    },
  });
}
export function updatePlatform(
  linkType: LinkType,
  platform: PlatformType,
  value: string,
): PartialStateUpdater<ArtistSlice> {
  return (store) => ({
    artist: {
      ...store.artist,
      [platform]: value,
    },
  });
}

export function addContentItem(
content: ContentItem,
): PartialStateUpdater<ArtistSlice> {
  return (store) => ({
    artist: {
      ...store.artist,
      content: [content, ...(store.artist.content as ContentItem[])],
    },
  });
}
