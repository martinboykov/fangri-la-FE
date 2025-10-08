import { PartialStateUpdater } from '@ngrx/signals';
import { ArtistSlice, ContentItem } from './artist.slice';
import { User } from 'src/app/models/auth.model';
import dayjs from 'dayjs';
export function increaseLikes(
  contentId: string,
): PartialStateUpdater<ArtistSlice> {
  return (store) => ({
    artist: {
      ...store.artist,
      content: ((store.artist.content as ContentItem[]) || []).map(
        (content: any) => {
          if (content.id === contentId && !content.isLiked) {
            return { ...content, likes: content.likes + 1, isLiked: true };
          }
          return content;
        },
      ),
    },
  });
}

export function addChatMessage(
  message: string,
  user: User,
): PartialStateUpdater<ArtistSlice> {
  const newChatItem = {
    id: Date.now().toString(),
    userId: user.id,
    role: user.role,
    name: user.name,
    surname: user.surname,
    shortName: user.shortName,
    img: user.img,
    message,
    isCreator: false,
    isMyself: true,
    date: dayjs().toISOString(), // new Date().toUTCString(),
  };
  // format('ddd h:mm A')
  return (store) => ({
    artist: {
      ...store.artist,
      chat: [...store.artist.chat, newChatItem],
    },
  });
}
