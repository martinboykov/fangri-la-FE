import { Artist } from '../artist/store/artist.slice';

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
      images: ['/assets/static/images/content/content-artist-1-1.jpg'],
      title: 'New Single Release',
      date: '2023-10-01T12:00:00Z',
      likes: 120,
    },
    {
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
      date: '2023-09-15T18:30:00Z',
      likes: 250,
    },
    {
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
      date: '2023-09-15T18:30:00Z',
      likes: 250,
    },
    {
      images: [
        '/assets/static/images/content/content-artist-1-1.jpg',
        '/assets/static/images/content/content-artist-1-2.jpg',
        '/assets/static/images/content/content-artist-1-3.jpg',
        '/assets/static/images/content/content-artist-1-4.jpg',
      ],
      title: 'Live Performance',
      date: '2023-09-15T18:30:00Z',
      likes: 250,
    },
  ],
};

export const initialArtistsSlice = {
  artists: [
    {
      id: '1',
      name: 'Nova Rae',
      image: '/assets/static/images/artists/artist-1.jpg',
      ...artistDetails,
    },
    {
      id: '2',
      name: 'OG Mondo',
      image: '/assets/static/images/artists/artist-2.jpg',
      bio: artistDetails.bio,
      website: artistDetails.website,
    },
    {
      id: '3',
      name: 'Soliah Skye',
      image: '/assets/static/images/artists/artist-3.jpg',
       bio: artistDetails.bio,
      website: artistDetails.website,
    },
    {
      id: '4',
      name: 'Koryn',
      image: '/assets/static/images/artists/artist-4.jpg',
      bio: artistDetails.bio,
      website: artistDetails.website,
    },
    {
      id: '5',
      name: 'KASHKIDD',
      image: '/assets/static/images/artists/artist-5.jpg',
      bio: artistDetails.bio,
      website: artistDetails.website,
      // socials: [...artistDetails.socials],
      // content: [...artistDetails.content],
    },
  ],
};
