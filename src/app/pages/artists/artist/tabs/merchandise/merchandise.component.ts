import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { ArtistStore } from '../../store/artist.store';
import { environment } from 'src/environments/environment';
import { MerchandiseStatusEnum } from 'src/app/pages/merchandise/store/merchandise.slice';
@Component({
  selector: 'app-artist-tab-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class ArtistTabMerchandiseComponent implements OnInit {
  readonly artistStore = inject(ArtistStore);
  currency = environment.currency;
  MerchandiseStatusEnum = MerchandiseStatusEnum;
  constructor() {
    console.log(
      '🚀 ~ ArtistTabMerchandiseComponent ~ constructor ~ this.artistStore.artist():',
      this.artistStore.artist(),
    );
  }

  ngOnInit() {}
}
