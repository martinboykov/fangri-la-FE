import { Component, effect, inject, input, OnInit } from '@angular/core';
import { HeaderMainPageComponent } from 'src/app/components/headers/header-main-page/header-main-page.component';
import { SharedModule } from 'src/app/shared.module';
import { ArtistStore } from './store/artist.store';
import { ArtistTabContentComponent } from './tabs/content/content.component';
import { ArtistTabChatComponent } from './tabs/chat/chat.component';
import { ArtistTabLinksComponent } from './tabs/links/links.component';
import { ArtistTabMerchandiseComponent } from './tabs/merchandise/merchandise.component';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
  standalone: true,
  imports: [
    SharedModule,
    HeaderMainPageComponent,
    ArtistTabContentComponent,
    ArtistTabChatComponent,
    ArtistTabLinksComponent,
    ArtistTabMerchandiseComponent
  ],
})
export class ArtistPage implements OnInit {
  readonly artistStore = inject(ArtistStore);
  readonly id = input.required<string>();
  activeTabClass = 'border-b-2 text-green-100 border-green-100 font-bold';
  inactiveTabClass = 'font-medium text-black-60';
  constructor() {
    effect(() => {
      this.artistStore.getArtistById(this.id());
    });
  }

  ngOnInit() {}
  ngOnChange(sampleChanges: any) {
    console.log('sampleChanges', sampleChanges);
  }
}
