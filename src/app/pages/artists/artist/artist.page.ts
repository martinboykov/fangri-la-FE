import {
  Component,
  effect,
  inject,
  input,
  OnInit,
  viewChild,
} from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { HeaderMainPageComponent } from 'src/app/components/headers/header-main-page/header-main-page.component';
import { SharedModule } from 'src/app/shared.module';
import { ArtistStore } from './store/artist.store';
import { ArtistTabContentComponent } from './tabs/content/content.component';
import { ArtistTabChatComponent } from './tabs/chat/chat.component';
import { ArtistTabLinksComponent } from './tabs/links/links.component';
import { ArtistTabMerchandiseComponent } from './tabs/merchandise/merchandise.component';
import { ArtistTabVaultComponent } from './tabs/vault/vault.component';
import { ActivatedRoute } from '@angular/router';
import { ArtistsStore } from '../store/artists.store';

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
    ArtistTabMerchandiseComponent,
    ArtistTabVaultComponent,
  ],
})
export class ArtistPage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  readonly artistStore = inject(ArtistStore);
  readonly artistsStore = inject(ArtistsStore);
  id = '';
  activeTabClass = 'border-b-2 text-green-100 border-green-100 font-bold';
  inactiveTabClass = 'font-medium text-black-60';
  constructor() {
    effect(() => {});
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.artistStore.getArtistById(this.id);
        this.artistsStore
      }
    });
  }

  ngOnChange(sampleChanges: any) {
    console.log('sampleChanges', sampleChanges);
  }
}
