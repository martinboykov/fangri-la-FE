import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import {
  ArtistStore,
  LinkType,
  LinkTypeEnum,
  PlatformType,
  PlatformTypeEnum,
} from '../../store/artist.store';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-artist-tab-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class ArtistTabLinksComponent implements OnInit {
  readonly authService = inject(AuthService);
  readonly artistStore = inject(ArtistStore);
  LinkTypeEnum = LinkTypeEnum;
  PlatformTypeEnum = PlatformTypeEnum;
  constructor() {}

  ngOnInit() {}
  changePlatform(event: any, linkType: LinkType, platform: PlatformType) {
    const value = event.target.value;
    this.artistStore.updatePlatform(linkType, platform, value);
  }
}
