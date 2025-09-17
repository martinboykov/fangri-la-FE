import { ArtistListItem } from '../../store/artists.slice';

export interface Social {
  platform: string;
  url: string;
}
export interface ContentItem {
  images: string[];
  video: {
    poster: string;
    sources: { src: string; type: string }[];
  };
  title: string;
  date: string; // ISO
  likes: number;
}
export interface Artist extends ArtistListItem {
  bio: string;
  website: string;
  socials: Social[];
  content: ContentItem[];
}

export interface ArtistSlice {
  activeTab: number;
  hasNewChatMessages: boolean;
  artist: Artist;
}

export const initialArtistSlice = {
  activeTab: 1,
  hasNewChatMessages: true,
  artist: {
    id: '',
    name: '',
    image: '',
    bio: '',
    website: '',
    socials: [
      {
        platform: '',
        url: '',
      },
    ],
    content: [
      {
        images: [''],
        video: {
          poster: '',
          sources: [{ src: '', type: '' }],
        },
        title: '',
        date: '', // ISO
        likes: 0,
      },
    ],
  },
};
