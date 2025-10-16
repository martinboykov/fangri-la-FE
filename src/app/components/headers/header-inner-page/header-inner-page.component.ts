import {
  Component,
  EventEmitter,
  inject,
  input,
  OnInit,
  Output,
  Signal,
} from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthStore } from 'src/app/services/auth/store/auth.store';
import { environment } from 'src/environments/environment';
import { Merchandise } from 'src/app/pages/merchandise/store/merchandise.slice';
import dayjs from 'dayjs';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-header-inner-page',
  templateUrl: './header-inner-page.component.html',
  styleUrls: ['./header-inner-page.component.scss'],
  standalone: true,

  imports: [SharedModule],
})
export class HeaderInnerPageComponent implements OnInit {
  private location: Location = inject(Location);
  private router: Router = inject(Router);
  readonly authService = inject(AuthService);
  readonly currency = environment.currency;
  title = input<string>();
  defaultHref = input<string>();

  isCart = input<boolean>(false);

  isMerchandiseItem = input<boolean>(false);
  merchandise = input<Merchandise>();

  // for mech list
  isMerchandiseList = input<boolean>(false);
  totalItemsCount = input<number>(); // also for cart
  totalArtistsCount = input<number>();

  // for cart
  totalItemsCost = input<number>();

  // for Vault
  isVaultItem = input<boolean>(false);

  isVaultItemExclusive = input<boolean>(false);

  // for artist content page
  isArtistContent = input<boolean>(false);
  contentDate = input<string>();
  public dayjs = dayjs;
  constructor() {}

  ngOnInit() {
    console.log(
      '🚀 ~ HeaderInnerPageComponent ~ ngOnInit ~ this.defaultHref():',
      this.defaultHref(),
    );
  }
  goBack() {
    if (this.defaultHref() !== undefined) {
      this.router.navigateByUrl(this.defaultHref() as string);
    } else if (window.history.length > 0) {
      this.location.back();
    } else {
      if (this.authService.user()?.role === 'artist') {
        this.router.navigateByUrl('/artist/' + this.authService.user()?.id);
      } else {
        this.router.navigateByUrl('/artists/list');
      }
    }
  }
}
