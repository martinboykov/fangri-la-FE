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
} from './db';

export interface ArtistListItem {
  id: string;
  name: string;
  image: string;
}
export interface ArtistsSlice {
  artists: Artist[];
}

const artists = [
  {
    id: '1',
    name: 'sienna',
    image: '/assets/static/images/artists/sienna_solas/profile.png',
  },
  {
    id: '22',
    name: 'caden',
  },
  {
    id: '33',
    name: 'nyla',
  },
  {
    id: '44',
    name: 'sevenblock',
  },
  {
    id: '55',
    name: 'nyko',
  },
];

const images = [...imagesData];

const chatMessages = [...chatData];
const artistDetails = [
  {
    ...baseArtistData[0],
    // bio: `Atlanta-born Sienna Solas crafts smooth R&B, pop hooks, and hip-hop beats into stories of love, hustle, and self-discovery.`,
    // website: 'www.siennasolas.com',
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
    content: [...content[0]],
    chat: [...chatData[0]],
    // chat: [
    //   ...chatMessages[0].map((item, index) => {
    //     if (item.name === 'sienna') {
    //       return {
    //         id: '1',
    //         userId: '1',
    //         role: UserRoleEnum.ARTIST,
    //         name: 'Sienna',
    //         surname: 'Solas',
    //         shortName: 'SS',
    //         img: artists[0].image,
    //         message: item.message,
    //         date: 'Thu 4:20PM',
    //       };
    //     } else {
    //       return {
    //         id: '2',
    //         userId: '3',
    //         role: UserRoleEnum.USER,
    //         name: 'Fan',
    //         surname: '',
    //         shortName: 'F',
    //         img: '',
    //         message: item.message,
    //         date: 'Thu 4:20PM',
    //       };
    //     }
    //   }),
    // ],
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
  },
  {
    ...baseArtistData[1],
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
    content: [...content[1]],
    chat: [...chatData[1]],
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
  },
  {
    ...baseArtistData[2],
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
    content: [...content[2]],
    chat: [...chatData[2]],
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
  },
  {
    ...baseArtistData[3],
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
    content: [...content[3]],
    chat: [...chatData[3]],
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
  },
  {
    ...baseArtistData[4],
    // socials: [
    //   {
    //     id: 1,
    //     platform: 'x',
    //     url: 'https://x.com/novarae',
    //   },
    //   {
    //     id: 2,
    //     platform: 'instagram',
    //     url: 'https://instagram.com/novarae',
    //   },
    // ],
    content: [...content[4]],
    chat: [...chatData[4]],
    // links: {
    //   music: [
    //     {
    //       id: 1,
    //       platform: 'spotify',
    //       img: '/assets/images/social/spotify.png',
    //       url: 'https://open.spotify.com/artist/1',
    //     },
    //     {
    //       id: 2,
    //       platform: 'apple-music',
    //       img: '/assets/images/social/apple-music.png',
    //       url: 'https://music.apple.com/us/artist/novarae/145567901',
    //     },
    //   ],
    //   socials: [
    //     {
    //       id: 1,
    //       platform: 'instagram',
    //       img: '/assets/images/social/instagram.png',
    //       url: 'https://instagram.com/novarae',
    //     },
    //     {
    //       id: 2,
    //       platform: 'x',
    //       img: '/assets/images/social/x.png',
    //       url: 'https://twitter.com/novarae',
    //     },
    //     {
    //       id: 3,
    //       platform: 'tiktok',
    //       img: '/assets/images/social/tiktok.png',
    //       url: 'https://www.tiktok.com/@novarae',
    //     },
    //     {
    //       id: 4,
    //       platform: 'youtube',
    //       img: '/assets/images/social/youtube.png',
    //       url: 'https://www.youtube.com/@novarae',
    //     },
    //     {
    //       id: 5,
    //       platform: 'facebook',
    //       img: '/assets/images/social/facebook.png',
    //       url: 'https://facebook.com/novarae',
    //     },
    //   ],
    //   shows: [
    //     {
    //       id: 1,
    //       platform: 'bandsintown',
    //       img: '/assets/images/social/bandsintown.png',
    //       url: 'https://www.bandsintown.com/',
    //     },
    //     {
    //       id: 2,
    //       platform: 'songkick',
    //       img: '/assets/images/social/songkick.png',
    //       url: 'https://www.songkick.com/',
    //     },
    //   ],
    // },
    // merchandise: [...initialMerchandiseSlice.items],
  },
];
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

console.log('🚀 ~ artistDetails[0]:', baseArtistData[0]);
export const initialArtistsSlice = {
  artists: [
    {
      // id: '1',
      // name: 'Sienna Solas',
      // image: '/assets/static/images/artists/artist-1.jpg',

      ...artistDetails[0],
      merchandise: [...initialMerchandiseSlice.items],
      vault: [...initialVaultSlice.items],
    },
    {
      ...baseArtistData[1],
      ...artistDetails[1],
      // ...emptyDetails,
      // merchandise: [{ ...emptyMerchandise }],
    },
    {
      ...baseArtistData[2],
      ...artistDetails[2],
      // ...emptyDetails,
      // merchandise: [{ ...emptyMerchandise }],
    },
    {
      ...baseArtistData[3],
      ...artistDetails[3],
      // ...emptyDetails,
      // merchandise: [{ ...emptyMerchandise }],
    },
    {
      ...baseArtistData[4],
       ...artistDetails[4],
      // ...emptyDetails,
      // merchandise: [{ ...emptyMerchandise }],
    },
  ],
};
