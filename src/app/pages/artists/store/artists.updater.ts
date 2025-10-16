import { PartialStateUpdater } from '@ngrx/signals';
import { ArtistsSlice } from './artists.slice';
import { Artist, ContentItem } from '../artist/store/artist.slice';

export function setActiveArtistId(
  id: string,
): PartialStateUpdater<ArtistsSlice> {
  return (store) => ({
    activeArtistId: id,
  });
}
export function addContentItem(
  artistId: string,
  content: ContentItem,
): PartialStateUpdater<ArtistsSlice> {
  return (store) => ({
    artists: store.artists.map((artist) => {
      if (artist.id === artistId) {
        return {
          ...artist,
          content: [content, ...artist.content],
        };
      }
      return artist;
    }),
  });
}

export function updateArtistById(
  id: string,
  artist: Artist,
): PartialStateUpdater<ArtistsSlice> {
  return (store) => ({
    artists: store.artists.map((a) => {
      // if (a.id === id) {
      //   return {
      //     ...a,
      //     content: [
      //       ...a.content,
      //       {
      //        ...artist.content[0]
      //       },
      //     ]
      //   };
      // }
      return a;
    }),
  });
}
