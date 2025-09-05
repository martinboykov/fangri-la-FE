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
  readonly authStore = inject(AuthStore);
  title = input<string>();
  defaultHref = input<string>();
  itemsCount = input<number | null>(null);
  artistCount = input<number | null>(null);
  constructor() {}

  ngOnInit() {}
  goBack() {
    if (this.defaultHref() !== undefined) {
      this.router.navigateByUrl(this.defaultHref() as string);
    } else if (window.history.length > 0) {
      this.location.back();
    } else {
      if (this.authStore.user()?.role === 'artist') {
        this.router.navigateByUrl('/artist/' + this.authStore.user()?.id);
      } else {
        this.router.navigateByUrl('/artists/list');
      }
    }
  }
}
