import { Component, inject, OnInit, Sanitizer } from '@angular/core';

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
  readonly artistStore = inject(ArtistStore);
  public dayjs = dayjs;
  newMessage!: string;
  constructor() {}

  ngOnInit() {}
  sendMessage() {
    console.log(
      '🚀 ~ ArtistTabChatComponent ~ sendMessage ~ this.newMessage:',
      this.newMessage,
    );
    if(!this.newMessage) return;
    this.artistStore.addChatMessage(this.newMessage);
    this.newMessage = '';
  }
  clearMessage() {
    this.newMessage = '';
  }
}
