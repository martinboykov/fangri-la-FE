import { initialMerchandiseSlice } from '../../merchandise/store/merchandise.slice';
import { initialVaultSlice } from '../../vault/store/vault.slice';
import {
  Artist,
  emptyMerchandise,
  initialArtistSlice,
} from '../artist/store/artist.slice';

export interface ArtistListItem {
  id: string;
  name: string;
  image: string;
}
export interface ArtistsSlice {
  artists: Artist[];
}

const artistDetails = {
  bio: `American singer-songwriter, record
producer, and actress. Made of stardust and basslines.
  `,
  website: 'www.novarae.com',
  socials: [
    {
      id: 1,
      platform: 'x',
      url: 'https://x.com/novarae',
    },
    {
      id: 2,
      platform: 'instagram',
      url: 'https://instagram.com/novarae',
    },
  ],
  content: [
    {
      id: '1',
      images: ['/assets/static/images/content/content-artist-1-1.jpg'],
      title: 'New Single Release',
      content:
        'Hey guys Love ya!Hey guys Love ya!Hey guys Love ya!Hey guys Love ya!Hey guys Love ya!Hey guys Love ya!',
      date: 'Thu 4:20PM',
      likes: 120,
    },
    {
      id: '2',
      video: {
        poster: '/assets/static/images/content/content-artist-1-2.jpg',
        sources: [
          {
            src: '/assets/static/videos/novarae/novarae-lovely_man.mp4',
            type: 'video/mp4',
          },
        ],
      },
      title: 'Live Performance',
      date: 'Mon 11:30PM',
      likes: 250,
    },
    {
      id: '3',
      video: {
        poster: '/assets/static/images/content/content-artist-1-3.jpg',
        sources: [
          {
            src: '/assets/static/videos/novarae/novarae-acquainted.mp4',
            type: 'video/mp4',
          },
        ],
      },
      title: 'Live Performance',
      content:
        'Hey guys Love ya!Hey guys Love ya!Hey guys Love ya!Hey guys Love ya!Hey guys Love ya!Hey guys Love ya!',

      date: 'Sun 9:30PM',
      likes: 250,
    },
    {
      id: '4',
      images: [
        '/assets/static/images/content/content-artist-1-1.jpg',
        '/assets/static/images/content/content-artist-1-2.jpg',
        '/assets/static/images/content/content-artist-1-3.jpg',
        '/assets/static/images/content/content-artist-1-4.jpg',
      ],
      title: 'Live Performance',
      content:
        'Hey guys Love ya!Hey guys Love ya!Hey guys Love ya!Hey guys Love ya!Hey guys Love ya!Hey guys Love ya!',
      date: 'Sep 23 4:20PM',
      likes: 250,
    },
  ],
  chat: [
    {
      id: '1',
      userId: '1',
      name: 'Nova',
      surname: 'Rae',
      shortName: 'K',
      img: '/assets/static/images/artists/artist-1.jpg',
      message: 'Hello',
      isCreator: true,
      isMyself: false,
      date: 'Thu 4:20PM',
    },
    {
      id: '2',
      userId: '2',
      name: 'Andi',
      surname: 'Jones',
      shortName: 'AJ',
      message: 'How are you?',
      isCreator: false,
      isMyself: false,
      date: 'Thu 4:20PM',
    },
    {
      id: '3',
      userId: '3',
      name: 'John',
      surname: 'User',
      shortName: 'JD',
      message: 'You said forever like a password you forgot',
      isCreator: false,
      isMyself: true,
      date: 'Thu 4:20PM',
    },
    // {
    //   id: '3',
    //   userId: '3',
    //   name: 'John',
    //   surname: 'User',
    //   shortName: 'JD',
    //   message: 'You said forever like a password you forgot',
    //   isCreator: false,
    //   isMyself: true,
    //   date: 'Thu 4:20PM',
    // },
    // {
    //   id: '3',
    //   userId: '3',
    //   name: 'John',
    //   surname: 'User',
    //   shortName: 'JD',
    //   message: 'You said forever like a password you forgot',
    //   isCreator: false,
    //   isMyself: true,
    //   date: 'Thu 4:20PM',
    // },
    // {
    //   id: '3',
    //   userId: '3',
    //   name: 'John',
    //   surname: 'User',
    //   shortName: 'JD',
    //   message: 'You said forever like a password you forgot',
    //   isCreator: false,
    //   isMyself: true,
    //   date: 'Thu 4:20PM',
    // },
    // {
    //   id: '3',
    //   userId: '3',
    //   name: 'John',
    //   surname: 'User',
    //   shortName: 'JD',
    //   message: 'You said forever like a password you forgot',
    //   isCreator: false,
    //   isMyself: true,
    //   date: 'Thu 4:20PM',
    // },
    // {
    //   id: '3',
    //   userId: '3',
    //   name: 'John',
    //   surname: 'User',
    //   shortName: 'JD',
    //   message: 'You said forever like a password you forgot',
    //   isCreator: false,
    //   isMyself: true,
    //   date: 'Thu 4:20PM',
    // },
    // {
    //   id: '3',
    //   userId: '3',
    //   name: 'John',
    //   surname: 'User',
    //   shortName: 'JD',
    //   message: 'You said forever like a password you forgot',
    //   isCreator: false,
    //   isMyself: true,
    //   date: 'Thu 4:20PM',
    // },
  ],
  links: {
    music: [
      {
        id: 1,
        platform: 'spotify',
        img: '/assets/images/social/spotify.png',
        url: 'https://open.spotify.com/artist/1',
      },
      {
        id: 2,
        platform: 'apple-music',
        img: '/assets/images/social/apple-music.png',
        url: 'https://music.apple.com/us/artist/novarae/145567901',
      },
    ],
    socials: [
      {
        id: 1,
        platform: 'instagram',
        img: '/assets/images/social/instagram.png',
        url: 'https://instagram.com/novarae',
      },
      {
        id: 2,
        platform: 'x',
        img: '/assets/images/social/x.png',
        url: 'https://twitter.com/novarae',
      },
      {
        id: 3,
        platform: 'tiktok',
        img: '/assets/images/social/tiktok.png',
        url: 'https://www.tiktok.com/@novarae',
      },
      {
        id: 4,
        platform: 'youtube',
        img: '/assets/images/social/youtube.png',
        url: 'https://www.youtube.com/@novarae',
      },
      {
        id: 5,
        platform: 'facebook',
        img: '/assets/images/social/facebook.png',
        url: 'https://facebook.com/novarae',
      },
    ],
    shows: [
      {
        id: 1,
        platform: 'bandsintown',
        img: '/assets/images/social/bandsintown.png',
        url: 'https://www.bandsintown.com/',
      },
      {
        id: 2,
        platform: 'songkick',
        img: '/assets/images/social/songkick.png',
        url: 'https://www.songkick.com/',
      },
    ],
  },
  merchandise: [...initialMerchandiseSlice.items],
};
const emptyDetails = {
  // bio: '',
  // website: '',
  // socials: [...initialArtistSlice.artist.socials],
  // content: [...initialArtistSlice.artist.content],
  // chat: [...initialArtistSlice.artist.chat],
  // links: {
  //   music: [...initialArtistSlice.artist.links.music],
  //   socials: [...initialArtistSlice.artist.links.socials],
  //   shows: [...initialArtistSlice.artist.links.shows],
  // },
};

export const initialArtistsSlice = {
  artists: [
    {
      id: '1',
      name: 'Nova Rae',
      image: '/assets/static/images/artists/artist-1.jpg',
      ...artistDetails,
      merchandise: [...initialMerchandiseSlice.items],
      vault: [...initialVaultSlice.items],
    },
    {
      id: '2',
      name: 'OG Mondo',
      image: '/assets/static/images/artists/artist-2.jpg',
      bio: artistDetails.bio,
      website: artistDetails.website,
      ...emptyDetails,
      // merchandise: [{ ...emptyMerchandise }],
    },
    {
      id: '3',
      name: 'Soliah Skye',
      image: '/assets/static/images/artists/artist-3.jpg',
      bio: artistDetails.bio,
      website: artistDetails.website,
      ...emptyDetails,
      // merchandise: [{ ...emptyMerchandise }],
    },
    {
      id: '4',
      name: 'Koryn',
      image: '/assets/static/images/artists/artist-4.jpg',
      bio: artistDetails.bio,
      website: artistDetails.website,
      ...emptyDetails,
      // merchandise: [{ ...emptyMerchandise }],
    },
    {
      id: '5',
      name: 'KASHKIDD',
      image: '/assets/static/images/artists/artist-5.jpg',
      bio: artistDetails.bio,
      website: artistDetails.website,
      ...emptyDetails,
      // merchandise: [{ ...emptyMerchandise }],
      // socials: [...artistDetails.socials],
      // content: [...artistDetails.content],
    },
  ],
};
