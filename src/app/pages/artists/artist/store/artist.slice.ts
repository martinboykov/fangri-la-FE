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
  isCreator: boolean;
  isMyself: boolean;
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
  socials: Social[];
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
  activeTab:2,
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
        isCreator: false,
        isMyself: false,
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
