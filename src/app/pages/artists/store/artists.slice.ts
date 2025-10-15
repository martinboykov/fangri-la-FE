import { UserRoleEnum } from 'src/app/models/auth.model';
import { initialMerchandiseSlice } from '../../merchandise/store/merchandise.slice';
import { initialVaultSlice } from '../../vault/store/vault.slice';
import {
  Artist,
  emptyMerchandise,
  initialArtistSlice,
} from '../artist/store/artist.slice';
import {
  imagesData,
  chat as chatData,
  content,
  artistData,
  baseArtistData,
  linksData,
  artists,
} from './db';

export interface ArtistListItem {
  id: string;
  name: string;
  image: string;
}
export interface ArtistsSlice {
  artists: Artist[];
}

// const artists = [
//   {
//     id: '1',
//     name: 'sienna',
//     image: '/assets/static/images/artists/sienna_solas/profile.png',
//   },
//   {
//     id: '22',
//     name: 'caden',
//   },
//   {
//     id: '33',
//     name: 'nyla',
//   },
//   {
//     id: '44',
//     name: 'sevenblock',
//   },
//   {
//     id: '55',
//     name: 'nyko',
//   },
// ];

// const images = [...imagesData];

// const chatMessages = [...chatData];

export const initialArtistsSlice = {
  artists: [...artists],
};
console.log('🚀 ~ initialArtistsSlice:', initialArtistsSlice);
