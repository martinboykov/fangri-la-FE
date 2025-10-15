import {
  initialMerchandiseSlice,
  Merchandise,
  MerchandiseStatusEnum,
} from 'src/app/pages/merchandise/store/merchandise.slice';
import { ArtistListItem } from '../../store/artists.slice';

export interface Social {
  platform: string;
  url: string;
}
export interface ContentItem {
  id: string;
  images: string[];
  video: {
    poster: string;
    sources: { src: string; type: string }[];
  };
  title: string;
  content: string; // html
  date: string;
  likes: number;
  isLiked: boolean;
}

export interface ChatItem {
  id: string;
  userId: string;
  role: string;
  name: string;
  surname: string;
  shortName: string;
  img: string;
  message: string; // html
  date: string;
}

export interface LinkItem {
  id: string;
  platform: string;
  img: string;
  url: string;
}

export interface Artist extends ArtistListItem {
  bio: string;
  website: string;
  content: ContentItem[];
  chat: ChatItem[];
  links: {
    music: LinkItem[];
    socials: LinkItem[];
    shows: LinkItem[];
  };
  merchandise: Merchandise[];
  vault: Merchandise[];
}

export interface ArtistSlice {
  activeTab: number;
  hasNewChatMessages: boolean;
  artist: Artist;
}

const emptyLink = {
  id: '',
  platform: '',
  img: '',
  url: '',
};
export const emptyMerchandise = {
  id: '',
  artist: '',
  name: '',
  images: [''],
  description: '',
  price: 0,
  totalCount: 0,
  options: {
    colors: [''],
    sizes: [''],
  },
  labels: [
    {
      name: '',
      color: '',
      background: '',
    },
  ],
  parameters: [
    {
      name: '',
      value: '',
    },
  ],
  status: MerchandiseStatusEnum.IN_STOCK,
};

export const initialArtistSlice = {
  activeTab:1,
  hasNewChatMessages: true,
  artist: {
    id: '',
    name: '',
    image: '',
    bio: '',
    website: '',
    content: [
      {
        id: '',
        images: [''],
        video: {
          poster: '',
          sources: [{ src: '', type: '' }],
        },
        title: '',
        content: '',
        date: '',
        likes: 0,
        isLiked: false,
      },
    ],
    chat: [
      {
        id: '',
        userId: '',
        role: '',
        name: '',
        surname: '',
        shortName: '',
        img: '',
        message: '',
        date: '',
      },
    ],
    links: {
      music: [emptyLink],
      socials: [emptyLink],
      shows: [emptyLink],
    },
    merchandise: [{ ...emptyMerchandise }],
    vault: [{ ...emptyMerchandise }],
    // merchandise: [{ ...initialMerchandiseSlice.items[0] }],
  },
};
