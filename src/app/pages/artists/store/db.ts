import { UserRoleEnum } from 'src/app/models/auth.model';
import { initialMerchandiseSlice } from '../../merchandise/store/merchandise.slice';
import { initialVaultSlice } from '../../vault/store/vault.slice';
import { Artist } from '../artist/store/artist.slice';

// const idGenerator = () => Math.random().toString(32).slice(2);
const idGeneratorFactory = function () {
  let currentId = 0; // Initial ID

  return function getNextId() {
    currentId++;
    return currentId.toString();
  };
};
export const idGenerator = idGeneratorFactory();

const randomNumberRange = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min);

const isoDateGenerator = function* (startIndex = 0) {
  let currentIndex = startIndex;
  const currentDate = new Date();

  while (true) {
    // Create a new date object starting from today's date
    let nextDate = new Date(currentDate);

    // Increment the date by the current index
    nextDate.setDate(currentDate.getDate() + currentIndex);

    // Yield the ISO string of the date
    yield nextDate.toISOString();

    // Increment the index for the next iteration
    currentIndex--;
  }
};

function getBool() {
  return Math.random() < 0.5;
}
export const baseArtistData = [
  {
    id: '1',
    name: 'Sienna Solas',
    shortName: 'SS',
    image: '/assets/static/images/artists/sienna_solas/profile.png',
    bio: `Atlanta-born Sienna Solas crafts smooth R&B, pop hooks, and hip-hop beats into stories of love, hustle, and self-discovery.`,
    website: '',
  },
  {
    id: '2',
    name: 'Caden Kane',
    // shortName: 'CK',
    image: '/assets/static/images/artists/caden_kane/profile.png',
    bio: `Atlanta-born Caden Kane crafts smooth R&B, pop hooks, and hip-hop beats into stories of love, hustle, and self-discovery.`,
    website: '',
  },
  {
    id: '3',
    name: 'Nyko Blaze',
    // shortName: 'NB',
    image: '/assets/static/images/artists/nyko_blaze/profile.png',
    bio: `Atlanta-born Nyko Blaze crafts smooth R&B, pop hooks, and hip-hop beats into stories of love, hustle, and self-discovery.`,
    website: '',
  },
  {
    id: '4',
    name: 'SevenBlock',
    // shortName: 'SB',
    image: '/assets/static/images/artists/sevenblock/profile.png',
    bio: `Atlanta-born SevenBlock crafts smooth R&B, pop hooks, and hip-hop beats into stories of love, hustle, and self-discovery.`,
    website: '',
  },
  {
    id: '5',
    name: 'Nyla Veil',
    // shortName: 'NV',
    image: '/assets/static/images/artists/nyla_veil/profile.png',
    bio: `Atlanta-born Nyla Veil crafts smooth R&B, pop hooks, and hip-hop beats into stories of love, hustle, and self-discovery.`,
    website: '',
  },
];
export const artistData = [
  {
    id: idGenerator(),
    name: 'Sienna Solas',
    surname: 'Solas',
    shortName: 'SS',
    image: '/assets/static/images/artists/sienna_solas/profile.png',
    bio: `Atlanta-born Sienna Solas crafts smooth R&B, pop hooks, and hip-hop beats into stories of love, hustle, and self-discovery.`,
    website: '',
  },
  {
    id: idGenerator(),
    name: 'Caden Kane',
    surname: 'Kane',
    shortName: 'CK',
    image: '/assets/static/images/artists/caden_kane/profile.png',
    bio: `Atlanta-born Caden Kane crafts smooth R&B, pop hooks, and hip-hop beats into stories of love, hustle, and self-discovery.`,
    website: '',
  },
  {
    id: idGenerator(),
    name: 'Nyko Blaze',
    surname: 'Blaze',
    shortName: 'NB',
    image: '/assets/static/images/artists/nyko_blaze/profile.png',
    bio: `Atlanta-born Nyko Blaze crafts smooth R&B, pop hooks, and hip-hop beats into stories of love, hustle, and self-discovery.`,
    website: '',
  },
  {
    id: idGenerator(),
    name: 'SevenBlock',
    surname: 'Block',
    shortName: 'SB',
    image: '/assets/static/images/artists/sevenblock/profile.png',
    bio: `Atlanta-born SevenBlock crafts smooth R&B, pop hooks, and hip-hop beats into stories of love, hustle, and self-discovery.`,
    website: '',
  },
  {
    id: idGenerator(),
    name: 'Nyla Veil',
    surname: 'Veil',
    shortName: 'NV',
    image: '/assets/static/images/artists/nyla_veil/profile.png',
    bio: `Atlanta-born Nyla Veil crafts smooth R&B, pop hooks, and hip-hop beats into stories of love, hustle, and self-discovery.`,
    website: '',
  },
];
export const imagesData = [
  [
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x566_1_Sienna_on_stage.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1350_2_Sienna_backstage_with_mic.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x566_3_Wide_crowd_shot.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1350_4_Studio_session.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1350_5_Sunset_reflection.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x566_6_candid_laughing_shot.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x566_7_Glam_dressing_room_prep.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1350_8_City_street_portrait.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1350_9_Spotlight_concert_shot_.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x566_10_Artistic_studio_close_up.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1350_11_Arena_selfie,_sequined_outfit,_massive_crowd.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1080_12_Backstage_glam_chair,_glitter_robe.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1080_13_Writing_on_acoustic_guitar,_cozy_room.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1080_14_Street_in_front_of_Brooklyn_Bridge,_straight_stare.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1080_15_Black_&_white,_walking_down_city_street.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1080_16_Standing_in_studio,_hoodie_+_headphones.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1080_17_Close_up_in_studio,_smiling_at_the_mic.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1080_18_Black_&_white,_reaching_for_fans_onstage.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1080_19_Glitter_stage_outfit,_power_pose_under_lights.png',
    '/assets/static/images/artists/sienna_solas/sienna_solas_1080x1080_20_Graffiti_wall,_leather_jacket_look.png',
    [
      '/assets/static/images/artists/sienna_solas/carousel/carousel-1.png',
      '/assets/static/images/artists/sienna_solas/carousel/carousel-2.png',
      '/assets/static/images/artists/sienna_solas/carousel/carousel-3.png',
      '/assets/static/images/artists/sienna_solas/carousel/carousel-4.png',
    ],
  ],
  [
    '/assets/static/images/artists/caden_kane/caden_kane_1080x1080_1_Studio_Mic_Black_&_White_Eyes_Closed.png',
    '/assets/static/images/artists/caden_kane/caden_kane_1080x1080_2_Pool_Float_with_Champagne.png',
    '/assets/static/images/artists/caden_kane/caden_kane_1080x1080_3_Red_Tracksuit_in_G-Wagon.png',
    '/assets/static/images/artists/caden_kane/caden_kane_1800x566_4_Arena_Stage_Arms_Out_to_Crowd.png',
    '/assets/static/images/artists/caden_kane/caden_kane_1080x1350_5_Studio_Mic_Hands_Together_Prayer_Pose.png',
    '/assets/static/images/artists/caden_kane/caden_kane_1080x1350_6_Walking_with_Crew_at_Night_in_NYC.png',
    '/assets/static/images/artists/caden_kane/caden_kane_1080x1350_7_Sneaker_Wall_Collection.png',
    '/assets/static/images/artists/caden_kane/caden_kane_1080x1350_8_Barbershop_Laughing_in_Chair.png',
  ],
  [
    '/assets/static/images/artists/nyko_blaze/nyko_blaze_1080x1350_1_Studio_Selfie_black_hoodie_mic_chain.png',
    '/assets/static/images/artists/nyko_blaze/nyko_blaze_1080x1350_2_Studio_Mirror_Selfie_flash_layered_chains.png',
    '/assets/static/images/artists/nyko_blaze/nyko_blaze_1080x1350_3_With_Engineer_mixing_board.png',
    '/assets/static/images/artists/nyko_blaze/nyko_blaze_1080x1350_4_Sitting_on_Blue_Bugatti_at_Neon_Gas_Station.png',
    '/assets/static/images/artists/nyko_blaze/nyko_blaze_1800x566_5_Backstage_with_Crew_headphones_on_friends_hyping_him_up.png',
    '/assets/static/images/artists/nyko_blaze/nyko_blaze_1800x566_6_Rooftop_Performance_purple_hoodie_city_skyline.png',
    '/assets/static/images/artists/nyko_blaze/nyko_blaze_1080x1080_7_Courtside_laughing_pointing_sitting_with_legend.png',
    '/assets/static/images/artists/nyko_blaze/nyko_blaze_1080x1080_8_Grammys_Table_serious_look_dressed_up.png',
    '/assets/static/images/artists/nyko_blaze/nyko_blaze_1080x1080_9_Giving_Back_handing_out_backpacks.png',
    '/assets/static/images/artists/nyko_blaze/nyko_blaze_1080x1080_10_Counting_Money_at_Kitchen_Table.png',
  ],
  [
    '/assets/static/images/artists/sevenblock/sevenblock_1080x1080_1_Boarding_the_plane.png',
    '/assets/static/images/artists/sevenblock/sevenblock_1080x1080_2_Sneakers_Jordan_1s.png',
    '/assets/static/images/artists/sevenblock/sevenblock_1080x1080_3_Watch_&_tattoo_driving.png',
    '/assets/static/images/artists/sevenblock/sevenblock_1800x566_4_Limo_with_crew.png',
    '/assets/static/images/artists/sevenblock/sevenblock_1080x1350_5_On_stage_arena_fire_behind.png',
    '/assets/static/images/artists/sevenblock/sevenblock_1080x1350_6_Art_gallery_handshake.png',
    '/assets/static/images/artists/sevenblock/sevenblock_1080x1350_7_Leaning_on_car_neon_diner.png',
  ],
  [
    '/assets/static/images/artists/nyla_veil/nyla_veil_1800x566_1_Singing_in_the_shadows_close_up_with_retro_mic.png',
    '/assets/static/images/artists/nyla_veil/nyla_veil_1800x566_2_At_the_piano_thoughtful_reflection.png',
    '/assets/static/images/artists/nyla_veil/nyla_veil_1080x1080_3_FaceTime_with_a_fan_smiling.png',
    '/assets/static/images/artists/nyla_veil/nyla_veil_1080x1080_4_Getting_ready_in_the_makeup_chair.png',
    '/assets/static/images/artists/nyla_veil/nyla_veil_1080x1080_5_Neon_portrait_looking_serious.png',
    '/assets/static/images/artists/nyla_veil/nyla_veil_1080x1080_6_Recording_in_the_booth_black_&_white_singing_passionately.png',
    '/assets/static/images/artists/nyla_veil/nyla_veil_1080x1350_7_Sipping_tea_by_the_window.png',
    '/assets/static/images/artists/nyla_veil/nyla_veil_1080x1350_8_Holding_a_vinyl_record.png',
    '/assets/static/images/artists/nyla_veil/nyla_veil_1080x1350_9_Color_block_coat_portrait.png',
    '/assets/static/images/artists/nyla_veil/nyla_veil_1080x1350_10_Laughing_on_the_steps_with_iced_coffee.png',
    '/assets/static/images/artists/nyla_veil/nyla_veil_1080x1350_11_Beach_at_sunset_with_flowing_fabric.png',
  ],
];

export const shortCaptionsData = [
  // Sienna Solas

  'The lights, the energy, the moment. Nothing compares to feeling the crowd sing it back. 💫',
  'This is where it starts — the quiet moments before the chaos, where I ground myself and remember why I do this. Every note, every lyric, it’s all about pouring my truth into the music. The stage is next.',
  'All love. All energy. All of you. ❤️',
  'There’s something sacred about being in the studio - experimenting with sounds, chasing that one harmony that gives you chills. This is where songs are born, where emotions take shape, and where the world outside fades until the music is all that matters.',
  'Finding clarity in golden hours. 🌅',
  'You can’t fake joy like this. Music is serious, the grind is real, but I always come back to laughter. It fuels me, heals me, and keeps me grounded when life tries to make me forget who I am.',
  'Transformation mode: ON. 💄✨',
  'I grew up with city sounds -  trains, sirens, late-night conversations on stoops. That rhythm has always been in me. Walking these streets, I’m reminded of where I came from, and how every song I write is rooted in that heartbeat.',
  'Lost in the spotlight. Found in the music. 🎶',
  'Music isn’t always bright lights and big crowds. Sometimes it’s raw, vulnerable, and painted in shades of shadow. I’ve learned to embrace that side of me, because it’s real - and real is the only thing worth singing.',
  'All eyes, all lights. ✨',
  'Backstage rituals. The calm before the chaos, the sparkle before the storm. Every detail matters before stepping out there.',
  'Some stages are arenas, others are quiet corners. This is where the stories start - before they ever find a beat.',
  'Concrete truths.',
  'Streets change, faces pass, but the rhythm of the city keeps me grounded. Every step writes another line in my story.',
  'When the mic is on, the world fades. It’s just me, my voice, and a thousand feelings searching for the right words.',
  'Found my frequency.',
  'No walls, no distance.',
  'This is the roar, the shine, the moment you dream about when nobody’s watching. And I’m living it.',
  'Edge in every glance.',
  'Every note, every lyric, it’s all about pouring my truth into the music. The stage is next.',

  // caden kane
  [
    'Every bar, every verse - it’s all real. No filters, no gimmicks. Just truth in the booth.',
    'From the block to the rooftop - never forget where you came from, but don’t be afraid to toast to where you’re going.',
    'They doubted every move, laughed at every setback, counted me out every chance they had. Now I’m pushing foreigns, still hungry like day one. Success don’t change the grind, it just raises the stakes.',
    'This energy? Can’t buy it. Can’t fake it. It’s love.',
    'Not every day is bright, not every story is easy to tell. But the booth don’t judge - it listens. I step in here with gratitude, knowing my voice can change someone else’s darkest day. That’s the real blessing.',
    'Move smart, move solid, move with your day ones. Loyalty ain’t for sale.',
    'Every pair got a story. Every grind got a reward.',
    'Success don’t change the vibe. I’ll always be that kid who sat in the chair, laughing with my people, talking dreams while the clippers buzz. Ain’t nothing better than staying grounded while you rise.',
  ],

  // nyko blaze
  [
    'Studio is my second home. Every track, every verse, built right here.',
    'Reflecting on the grind, shining through the struggle.',
    'The artist holds the mic, but it’s the crew that brings the sound to life. Grateful for the engineers, producers, and writers that sharpen the vision. Teamwork turns raw energy into timeless records.',
    'This ain’t just flexing - it’s proof. Proof that hard work, vision, and faith can take you from corner store dreams to neon-lit nights in foreign rides. Still me, just moving different.',
    'Vibes are different when your team believes in you as much as you do.',
    'Skyline sessions. Just me, the city, and the music.',
    'Dreams courtside. From hooping on blacktops to sitting with icons.',
    'I remember scribbling verses on the back of receipts, dreaming about this moment. Now I’m in the room, where the lights are bright and the gold is real. Blessed, humbled, but still hungry for more.',
    'Always give back. The future starts with them.',
    'Paper’s cool, but it’s what you do with it that matters. Every stack here is proof of the nights I stayed grinding when the world slept. Respect the hustle, respect the discipline.',
  ],
  [
    // Nyla Veil
    'Sometimes the truest notes are born in the dark.',
    'My piano knows all my secrets.',
    'I’ll never stop being grateful for the love. Every message, every call, every moment I get to connect with you reminds me why I started this journey in the first place. You’re family.',
    'Before the spotlight hits, there’s a moment of calm.',
    'The city moves fast, the colors blur, but music slows it all down for me. No matter how chaotic it gets, the songs always lead me back to myself.',
    'Every lyric is a piece of me.',
    'Some days are made for silence. Just me, a warm cup, and the sound of rain painting stories on the glass. Inspiration doesn’t always come from chaos - sometimes it whispers.',
    'The music feels different when it spins.',
    'Art isn’t just what I make - it’s what I wear.',
    'Music is serious, life is deep - but don’t get it twisted, I love to laugh. These little moments, sunshine and good energy, are the fuel that keeps the music alive.',
    'Where the ocean meets the soul.',
  ],
  [
    // SevenBlock
    'New city, same hustle ✈️',
    'Fresh kicks, fresh moves 👟🔥',
    'The watch don’t lie. Every second is another chance to prove the block raised me right.',
    'Block strong. Always.',
    'St. Louis raised me for this moment. Every verse, every fire, every fan — it’s all part of the story.',
    'Respect moves louder than words.',
    'Night shift vibes.',
  ],
];

export const linksData = [
  {
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
        url: 'https://www.bandsintown.com/a/14146697-novara?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar',
      },
      {
        id: 2,
        platform: 'songkick',
        img: '/assets/images/social/songkick.png',
        url: 'https://www.songkick.com/artists/8966304-novara',
      },
    ],
  },
  {
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
        url: 'https://www.bandsintown.com/a/14146697-novara?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar',
      },
      {
        id: 2,
        platform: 'songkick',
        img: '/assets/images/social/songkick.png',
        url: 'https://www.songkick.com/artists/8966304-novara',
      },
    ],
  },
  {
    music: [
      {
        id: 1,
        platform: 'spotify',
        img: '/assets/images/social/spotify.png',
        url: 'https://open.spotify.com/artist/1',
      },
      // {
      //   id: 2,
      //   platform: 'apple-music',
      //   img: '/assets/images/social/apple-music.png',
      //   url: 'https://music.apple.com/us/artist/novarae/145567901',
      // },
    ],
    socials: [
      {
        id: 1,
        platform: 'instagram',
        img: '/assets/images/social/instagram.png',
        url: 'https://instagram.com/novarae',
      },
      // {
      //   id: 2,
      //   platform: 'x',
      //   img: '/assets/images/social/x.png',
      //   url: 'https://twitter.com/novarae',
      // },
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
      // {
      //   id: 5,
      //   platform: 'facebook',
      //   img: '/assets/images/social/facebook.png',
      //   url: 'https://facebook.com/novarae',
      // },
    ],
    shows: [
      // {
      //   id: 1,
      //   platform: 'bandsintown',
      //   img: '/assets/images/social/bandsintown.png',
      //   url: 'https://www.bandsintown.com/a/14146697-novara?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar',
      // },
      // {
      //   id: 2,
      //   platform: 'songkick',
      //   img: '/assets/images/social/songkick.png',
      //   url: 'https://www.songkick.com/artists/8966304-novara',
      // },
    ],
  },
  {
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
        url: 'https://www.bandsintown.com/a/14146697-novara?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar',
      },
      {
        id: 2,
        platform: 'songkick',
        img: '/assets/images/social/songkick.png',
        url: 'https://www.songkick.com/artists/8966304-novara',
      },
    ],
  },
  {
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
        url: 'https://www.bandsintown.com/a/14146697-novara?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar',
      },
      {
        id: 2,
        platform: 'songkick',
        img: '/assets/images/social/songkick.png',
        url: 'https://www.songkick.com/artists/8966304-novara',
      },
    ],
  },
];

const minLikes = 10;
const maxLikes = 200;
const dataGen = isoDateGenerator(1);

export const content = [...Array(artistData.length).keys()].map((artist, i) =>
  imagesData[i].map((image, j) => {
    return {
      id: idGenerator(),
      images: Array.isArray(image) ? [...image] : [image],
      title: shortCaptionsData[j] as string,
      content: shortCaptionsData[j] as string,
      date: dataGen.next().value,
      likes: randomNumberRange(minLikes, maxLikes),
      isLiked: getBool(),
    };
  }),
);

export let chatData = [
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
  [
    {
      name: 'nyla',
      message:
        'I swear the ocean keeps secrets… do you feel more at peace near water or mountains? 🌊⛰️',
    },
    {
      name: 'fan',
      message:
        'Always water. Something about the waves makes me feel like I can breathe again.',
    },
    {
      name: 'nyla',
      message:
        'If the moon could whisper one word to you tonight, what do you hope it says? 🌙✨',
    },
    {
      name: 'fan',
      message: '‘You’re enough.’ That’s what I’d want to hear.',
    },
    {
      name: 'nyla',
      message:
        'My songs are like journals I decided not to hide. What’s something you’ve written down that still feels like magic when you read it back? 🖋️📖',
    },
    {
      name: 'fan',
      message:
        'A letter I wrote to myself when I was 16. It reminds me I survived everything I thought I couldn’t.',
    },
    {
      name: 'nyla',
      message:
        'Sometimes silence feels louder than words. Do you find peace in quiet or does it make you restless? 🤍',
    },
    {
      name: 'fan',
      message: 'Quiet is where I heal. It’s when I finally hear myself.',
    },
    {
      name: 'nyla',
      message:
        'I light a candle before I write, just to remind myself there’s beauty in small rituals. Do you have a ritual that grounds you? 🕯️',
    },
    {
      name: 'fan',
      message: 'Tea at night. One cup and I feel like my soul settles down.',
    },
  ],
  [
    {
      name: 'sevenblock',
      message: 'What’s heavier… the crown or the chains? 👑⛓️',
    },
    {
      name: 'fan',
      message: 'Chains. The crown you earn, but the chains you carry.',
    },
    {
      name: 'sevenblock',
      message:
        'Every block got a story. What’s one lesson your city taught you? 🏙️',
    },
    {
      name: 'fan',
      message:
        'Trust your gut and never move sloppy. Learned that the hard way.',
    },
    {
      name: 'sevenblock',
      message: 'When the lights cut off, who still ridin’ with you? 💡',
    },
    {
      name: 'fan',
      message: 'The circle got real small, but the ones left are solid.',
    },
    {
      name: 'sevenblock',
      message:
        'Some nights the studio feel like church. You ever find your peace in a place nobody else would? 🎤🙏',
    },
    {
      name: 'fan',
      message: 'Yeah… the gym at 2am. Just me and the weights. Feels holy.',
    },
    {
      name: 'sevenblock',
      message:
        'I don’t rap fairy tales. I rap survival. What track of mine hit you in the chest the hardest? 💥',
    },
    {
      name: 'fan',
      message: 'old Winter’ -  felt every word of that one.',
    },
    {
      name: 'sevenblock',
      message:
        'Pressure make diamonds… or dust. Which one you turnin’ into? 💎',
    },
    {
      name: 'fan',
      message: 'Diamond. Been through too much not to shine.',
    },
    {
      name: 'sevenblock',
      message:
        'Sometimes the ops ain’t outside… they in your head. How you fight yours? 🥊🧠',
    },
    {
      name: 'fan',
      message: 'Writing it down. Can’t fight the demons till I see ‘em clear.',
    },
    {
      name: 'sevenblock',
      message:
        'I came from nothin’. What’s one thing you promised yourself you’d never go back to? 🚫',
    },
    {
      name: 'fan',
      message:
        'Sleeping on floors. I grind every day to make sure that ain’t my life again.',
    },
  ],
  [
    {
      name: 'nyko',
      message:
        'Biggest flex ain’t the car, it’s the fact I ain’t who I used to be. 💯',
    },
    {
      name: 'fan',
      message: 'Facts. Glow-up hits harder when people know where you started.',
    },
    {
      name: 'nyko',
      message:
        'If I pulled up with a surprise show tonight, what song y’all screaming first? 🎤🔥',
    },
    {
      name: 'fan',
      message: '‘No Sleep City’!! That track goes crazy live!',
    },
    {
      name: 'nyko',
      message: 'What’s louder — my engine or my bass line? 🏎️🔊',
    },
    {
      name: 'fan',
      message:
        'Engine got the growl… but the bass shakes my whole apartment 😂',
    },
    {
      name: 'nyko',
      message: 'Luxury don’t mean nothin’ if your loyalty broke. You agree? 🤔',
    },
    {
      name: 'fan',
      message: '100%. Money comes and goes, loyalty is forever.',
    },
    {
      name: 'nyko',
      message: 'Some chase clout, I chase legacy. What are YOU chasing rn? 🚀',
    },
    {
      name: 'fan',
      message: 'Peace of mind. Everything else comes after that.',
    },
    {
      name: 'nyko',
      message:
        'Studio’s been crazy… should I leak a snippet here first or hold it till drop day? 👀',
    },
    {
      name: 'fan',
      message: 'Snippet!! Don’t play with us 😭🔥',
    },
  ],
];
export const chat = [...Array(artistData.length).keys()].map((artist, i) => {
  console.log('chatData[i]', chatData[i]);
  if (!chatData[i]) return [];
  return [
    ...chatData[i].map((item, j) => {
      if (item.name === 'fan') {
        return {
          id: idGenerator(),
          userId: (i + 1).toString(),
          role: UserRoleEnum.USER,
          name: 'Fan',
          surname: '',
          shortName: 'F',
          img: '',
          message: item.message,
          date: dataGen.next().value,
        };
      } else {
        return {
          id: idGenerator(),
          userId: artistData[i].id,
          role: UserRoleEnum.ARTIST,
          name: artistData[i].name,
          surname: artistData[i].surname,
          shortName: artistData[i].shortName ? artistData[i].shortName : '',
          img: artistData[i].image ? artistData[i].image : '',
          message: item.message,
          date: dataGen.next().value,
        };
      }
    }),
  ];
});
console.log('chat', chat);
const artistDataLast = [
  ...artistData.map((artist, i) => {
    return {
      ...artist,
      content: { ...content[i] },
      chat: chat[i] ? [...chat[i]] : [],
      links: linksData ? { ...linksData[i] } : {},
      merchandise: [...initialMerchandiseSlice.items],
      vault: { ...initialVaultSlice.items },
    };
  }),
];

export const artistDetails = [
  {
    ...baseArtistData[0],
    content: [...content[0]],
    chat: [...chat[0]],
    links: { ...linksData[0] },
    merchandise: [...initialMerchandiseSlice.items],
    vault: [...initialVaultSlice.items],
  },
  {
    ...baseArtistData[1],
    content: [...content[1]],
    chat: [...chat[1]],
    links: { ...linksData[1] },
    merchandise: [...initialMerchandiseSlice.items],
    vault: [...initialVaultSlice.items],
  },
  {
    ...baseArtistData[2],
    content: [...content[2]],
    chat: [...chat[2]],
    links: { ...linksData[2] },
    merchandise: [...initialMerchandiseSlice.items],
    vault: [...initialVaultSlice.items],
  },
  {
    ...baseArtistData[3],
    content: [...content[3]],
    chat: [...chat[3]],
    links: { ...linksData[3] },
    merchandise: [...initialMerchandiseSlice.items],
    vault: [...initialVaultSlice.items],
  },
  {
    ...baseArtistData[4],
    content: [...content[4]],
    chat: [...chat[4]],
    // links: { ...linksData[4] }, // gives ts errors
    merchandise: [...initialMerchandiseSlice.items],
    vault: [...initialVaultSlice.items],
  },
];
console.log('artistData', artistData);

const artistsData = [
  { ...artistDetails[0] },
  { ...artistDetails[1] },
  { ...artistDetails[2] },
  { ...artistDetails[3] },
  { ...artistDetails[4], links: { ...linksData[4] } },
];
export const artists = [...artistsData];
