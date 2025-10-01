import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { ArtistStore } from '../../store/artist.store';
import { environment } from 'src/environments/environment';
import { MerchandiseStatusEnum } from 'src/app/pages/merchandise/store/merchandise.slice';
import { MainSwiperComponent } from 'src/app/components/swipers/main/main-swiper.component';
@Component({
  selector: 'app-artist-tab-vault',
  templateUrl: './vault.component.html',
  styleUrls: ['./vault.component.scss'],
  standalone: true,
  imports: [SharedModule, MainSwiperComponent],
})
export class ArtistTabVaultComponent implements OnInit {
  readonly artistStore = inject(ArtistStore);
  currency = environment.currency;
  MerchandiseStatusEnum = MerchandiseStatusEnum;
  constructor() {}

  ngOnInit() {}
}
