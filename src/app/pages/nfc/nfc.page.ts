import { Component, computed, effect, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { AuthStore } from 'src/app/services/auth/store/auth.store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingService } from 'src/app/services/modals/loading/loading.service';
import { Router } from '@angular/router';
import { UserRoleEnum } from 'src/app/models/auth.model';
import {
  initialMerchandiseSlice,
  Merchandise,
} from '../merchandise/store/merchandise.slice';
import { MerchandiseStore } from '../merchandise/store/merchandise.store';
import { VideoComponent } from 'src/app/components/video/video.component';

@Component({
  selector: 'app-nfc',
  templateUrl: './nfc.page.html',
  styleUrls: ['./nfc.page.scss'],
  standalone: true,
  imports: [SharedModule, VideoComponent],
})
export class NfcPage implements OnInit {
  readonly authService = inject(AuthService);
  private loadingService = inject(LoadingService);
  private router = inject(Router);
  readonly authStore = inject(AuthStore);
  readonly merchandiseStore = inject(MerchandiseStore);
  UserRoleEnum = UserRoleEnum;
  isLoading = computed(() => this.loadingService.isLoading());
  url = computed(() => decodeURI(`${window.location.href}`));
  parser = document.createElement('a');
  path = computed(() => this.parser.pathname + this.parser.search);

  user = computed(() => this.authStore.user());
  routerLink = computed(() =>
    this.authService.user()?.role === UserRoleEnum.USER
      ? '/artists/list'
      : '/artists/' + this.authStore.user()?.id,
  );

  merch!: any;

  constructor() {
    this.parser.href = this.url();
    console.log('🚀 ~ NfcPage ~ authService.user:', this.authService.user());
    console.log('🚀 ~ NfcPage ~ isLoading:', this.isLoading());
    console.log(
      '🚀 ~ NfcPage ~ path:',
      this.parser.pathname + this.parser.search,
    );
    effect(() => {
      console.log('🚀 ~ NfcPage ~ authService.user:', this.authService.user());
      const merchandise = this.merchandiseStore
        .items()
        .find((item) => item.id === '1');
      console.log('🚀 ~ NfcPage ~ constructor ~ merchandise:', merchandise);
      const d = 1;
      if (merchandise) {
        this.merch = merchandise;
      }
    });
  }

  ngOnInit() {}

  goToExclusiveContent() {
    if (
      this.authService.user() &&
      this.authService.user()?.role === UserRoleEnum.USER
    ) {
      this.router.navigateByUrl(`/vault/${this.merch?.id}/exclusive-content`);
    }
  }
}
