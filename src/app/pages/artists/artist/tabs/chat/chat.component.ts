import {
  Component,
  effect,
  ElementRef,
  inject,
  OnInit,
  output,
  Sanitizer,
  viewChild,
  viewChildren,
} from '@angular/core';

import { ArtistStore } from '../../store/artist.store';
import { SharedModule } from 'src/app/shared.module';
import { SafeHtmlPipe } from 'src/app/pipes/sanitizer.pipe';
import dayjs from 'dayjs';
@Component({
  selector: 'app-artist-tab-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone: true,
  imports: [SharedModule, SafeHtmlPipe],
})
export class ArtistTabChatComponent implements OnInit {
  // chat = viewChild('chat', { read: ElementRef });
  input = viewChild('input', { read: ElementRef });
  messages = viewChildren('message', { read: ElementRef });
  readonly artistStore = inject(ArtistStore);
  public dayjs = dayjs;
  newMessage!: string;
  constructor() {
    // this.chat()?.nativeElement.scrollToBottom({ behavior: 'smooth' });

    effect(() => {
      // this.chat()?.nativeElement.scrollToBottom({ behavior: 'smooth' });
      setTimeout(() => {
        // const chat = this.chat();
        // chat?.nativeElement.scrollTo({ top: chat?.nativeElement.scrollHeight });
        // const messagesEls = this.messages();
        // const lastMessage = messagesEls[messagesEls.length - 1].nativeElement;
        // lastMessage.scrollIntoView({
        //   behavior: 'smooth',
        // });
        const input = this.input();
        input?.nativeElement.scrollIntoView({
        });
      }, 0);
    });
  }

  ngOnInit() {}
  sendMessage() {
    if (!this.newMessage) return;
    this.artistStore.addChatMessage(this.newMessage);

    // this.chat()?.nativeElement.scrollTo({
    //   top: this.chat()?.nativeElement.scrollHeight,
    // });

    setTimeout(() => {
      // const messagesEls = this.messages();

      // const lastMessage = messagesEls[messagesEls.length - 1].nativeElement;
      // lastMessage.scrollIntoView({});
      const input = this.input();
        input?.nativeElement.scrollIntoView({
        });
    }, 0);
    this.newMessage = '';
  }
  clearMessage() {
    this.newMessage = '';
  }
}
