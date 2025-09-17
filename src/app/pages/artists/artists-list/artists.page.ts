import { Component, inject } from '@angular/core';
import { HeaderMainPageComponent } from 'src/app/components/headers/header-main-page/header-main-page.component';
import { SharedModule } from 'src/app/shared.module';
import { ArtistsStore } from '../store/artists.store';
@Component({
  selector: 'app-artists',
  templateUrl: 'artists.page.html',
  styleUrls: ['artists.page.scss'],
  imports: [SharedModule, HeaderMainPageComponent],
})
export class ArtistsPage {
  readonly artistsStore = inject(ArtistsStore);


  constructor() {}
}
