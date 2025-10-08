import { UserRoleEnum } from 'src/app/models/auth.model';
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

const artists = [
  {
    id: '1',
    name: 'sienna',
    image:
      '/assets/static/images/artists/sienna_solas/profile/artist profile Sienna Solas-3.png',
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

const chatMessages = [
  [
    {
      name: 'sienna',
      message:
        'Be honest… what’s the first song of mine you’d play if you got the control of the radio in my car? 🚗🎶',
    },
    {
      name: 'fan',
      message: 'No lie, I’m putting on CTRL/ALT/DEL instantly 🔥',
    },
    {
      name: 'sienna',
      message:
        'Just realized I write half my songs at 2AM. Night owls where you at? 🌙✍️',
    },
    {
      name: 'fan',
      message: 'Me toooo, 2AM is when the brain hits different 🤯',
    },
    {
      name: 'sienna',
      message:
        'Had a dream last night I was performing barefoot on a rooftop… might need to make that happen fr. 👣✨',
    },
    { name: 'fan', message: 'Yes pls. Rooftop show with city lights >>>' },
    {
      name: 'sienna',
      message:
        'What’s one lyric of mine that you screamed louder than your neighbors probably liked? 😂🎤',
    },
    {
      name: 'fan',
      message:
        '‘You said forever like a password you forgot’ – that line cuts deep every time 😭',
    },
    {
      name: 'sienna',
      message:
        'Studio food of choice rn: hot fries + sparkling water. Don’t judge me. 😅🔥',
    },
    { name: 'fan', message: 'No judgment here, hot fries are elite 🔥🙌' },
    {
      name: 'sienna',
      message:
        'If we dropped a surprise acoustic set in YOUR city, what venue should it be? 👀🏙️',
    },
    {
      name: 'fan',
      message: 'Come play at The Roxy in LA… it would be insane acoustic 😍',
    },
    {
      name: 'sienna',
      message:
        'High key wanna know: do y’all listen to my songs more when you’re happy or when you’re sad? 🖤💛',
    },
    { name: 'fan', message: 'Sad tbh. Your music makes me feel seen 🥺' },
    {
      name: 'sienna',
      message:
        'Next track… more bass or more strings? Which vibe are you voting for? 🎸🎧',
    },
    { name: 'fan', message: 'Strings all day. Give me the feels 🎻' },
    {
      name: 'sienna',
      message:
        'My playlists are pure chaos - Frank Ocean then straight into Paramore then Bad Bunny. What’s YOUR wildest shuffle combo? 🔀😂',
    },
    {
      name: 'fan',
      message: 'Mine went Drake ➡️ Nirvana ➡️ Hannah Montana the other day 💀',
    },
    {
      name: 'sienna',
      message:
        'Tour nights >>> everything. Who’s ready to lose their voice with me this fall? 🫶',
    },
    {
      name: 'fan',
      message: 'Already warming up my vocal cords lol. Can’t wait!! 🔥',
    },
  ],
  [
    {
      name: 'caden',
      message:
        'Hi, I’m Caden, your friendly neighborhood artist. What’s your favorite song of mine? 🎶',
    },
    {
      name: 'caden',
      message:
        'First things first… y’all know I’m Philly born & raised. What city you reppin? 🏙️',
    },
    {
      name: 'fan',
      message:
        'Cleveland in the house!! But Philly got my heart thanks to you 🔥',
    },
    {
      name: 'caden',
      message:
        'If I’m not in the studio, I’m at the courts. 🏀 Who’s cooking me 1v1 tho?',
    },
    {
      name: 'fan',
      message: 'You don’t want this smoke 😂 I got a jumper like Curry',
    },
    {
      name: 'caden',
      message:
        'Real talk - do you turn me up more in the gym or in the whip? 🚗💪',
    },
    {
      name: 'fan',
      message: 'Gym for sure. Your tracks keep me going that extra mile 💯',
    },
    {
      name: 'caden',
      message: 'What bar of mine hit you like a punch to the chest? 🥊',
    },
    {
      name: 'fan',
      message:
        '‘City on my back, I carry pain like luggage’ -  that one stays with me fr',
    },
    {
      name: 'caden',
      message:
        'Wings debate rn: flats or drums? Don’t make me lose respect for you 😂🍗',
    },
    {
      name: 'fan',
      message: 'Flats all day, don’t even play with me lmao',
    },
    {
      name: 'caden',
      message:
        'Philly cheesesteak is top 3 meals ever, no debate. What’s YOUR ride-or-die meal? 🥖🔥',
    },
    {
      name: 'fan',
      message: 'Tacos. I could eat them every day and never get tired 🌮',
    },
  ],
];
const artistDetails = [
  {
    bio: `Atlanta-born Sienna Solas crafts smooth R&B, pop hooks, and hip-hop beats into stories of love, hustle, and self-discovery.`,
    website: 'www.siennasolas.com',
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
      ...chatMessages[0].map((item, index) => {
        if (item.name === 'sienna') {
          return {
            id: '1',
            userId: '1',
            role: UserRoleEnum.ARTIST,
            name: 'Sienna',
            surname: 'Solas',
            shortName: 'SS',
            img: artists[0].image,
            message: item.message,
            date: 'Thu 4:20PM',
          };
        } else {
          return {
            id: '2',
            userId: '3',
            role: UserRoleEnum.USER,
            name: 'Fan',
            surname: '',
            shortName: 'F',
            img: '',
            message: item.message,
            date: 'Thu 4:20PM',
          };
        }
      }),
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

export const initialArtistsSlice = {
  artists: [
    {
      id: '1',
      name: 'Sienna Solas',
      image: '/assets/static/images/artists/artist-1.jpg',
      ...artistDetails[0],
      merchandise: [...initialMerchandiseSlice.items],
      vault: [...initialVaultSlice.items],
    },
    {
      id: '2',
      name: 'OG Mondo',
      image: '/assets/static/images/artists/artist-2.jpg',
      bio: artistDetails[0].bio,
      website: artistDetails[0].website,
      ...emptyDetails,
      // merchandise: [{ ...emptyMerchandise }],
    },
    {
      id: '3',
      name: 'Soliah Skye',
      image: '/assets/static/images/artists/artist-3.jpg',
      bio: artistDetails[0].bio,
      website: artistDetails[0].website,
      ...emptyDetails,
      // merchandise: [{ ...emptyMerchandise }],
    },
    {
      id: '4',
      name: 'Koryn',
      image: '/assets/static/images/artists/artist-4.jpg',
      bio: artistDetails[0].bio,
      website: artistDetails[0].website,
      ...emptyDetails,
      // merchandise: [{ ...emptyMerchandise }],
    },
    {
      id: '5',
      name: 'KASHKIDD',
      image: '/assets/static/images/artists/artist-5.jpg',
      bio: artistDetails[0].bio,
      website: artistDetails[0].website,
      ...emptyDetails,
      // merchandise: [{ ...emptyMerchandise }],
      // socials: [...artistDetails.socials],
      // content: [...artistDetails.content],
    },
  ],
};
