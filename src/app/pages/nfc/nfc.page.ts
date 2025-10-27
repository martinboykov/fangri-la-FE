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
  MerchandiseStatusEnum,
} from '../merchandise/store/merchandise.slice';
import { MerchandiseStore } from '../merchandise/store/merchandise.store';
import { VideoComponent } from 'src/app/components/video/video.component';
import { VideoService } from 'src/app/components/video/video.service';

@Component({
  selector: 'app-nfc',
  templateUrl: './nfc.page.html',
  styleUrls: ['./nfc.page.scss'],
  standalone: true,
  imports: [SharedModule, VideoComponent],
})
export class NfcPage implements OnInit {
  private videoService = inject(VideoService);
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

  merch = {
    id: '1',
    artist: 'Nova Rae',
    name: 'Virtual Vinyl',
    images: [
      '/assets/static/images/merchandise/nfc.jpg',
    ],
    video: {
      poster: '/assets/static/videos/video_nfc.png',
      sources: [
        {
          src: '/assets/static/videos/video_nfc.mp4',
          type: 'video/mp4',
        },
      ],
    },
    description:
      'Limited edition skate deck designed by the Fangri-la Design Haus TeamLimited edition skate deck designed by the Fangri-la Design Haus TeamLimited edition skate deck designed by the Fangri-la Design Haus Team',
    price: 125,
    stock: 2,
    labels: [
      {
        name: '50 OF 100 AVAILABLE',
        color: '#fff',
        background: '#4cc8bc',
      },
      {
        name: 'Exclusive early access',
        color: '#111',
        background: '#fff7a1',
      },
      {
        name: 'wearable',
        color: '#fff',
        background: '#2c2e35',
      },
    ],
    options: {
      colors: ['#FFF7A1', '#A1FFAF', '#A1A6FF', '#FFA1EB', '#FFA1A3'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    },
    parameters: [
      {
        name: 'materials',
        value: 'Wood, Paint, Fabric',
      },
      {
        name: 'dimensions',
        value: '10x300x60mm',
      },
      {
        name: 'weight',
        value: '5kg',
      },
    ],

    status: MerchandiseStatusEnum.IN_STOCK,
  };
  wasVideoActivated = false;
  isVideoPlaying = false;
  constructor() {
    this.parser.href = this.url();
    console.log('🚀 ~ NfcPage ~ authService.user:', this.authService.user());
    console.log('🚀 ~ NfcPage ~ isLoading:', this.isLoading());

    console.log(
      '🚀 ~ NfcPage ~ path:',
      this.parser.pathname + this.parser.search,
    );
    effect(() => {
      this.isVideoPlaying = this.videoService.videoPlayState();

      if (this.isVideoPlaying && !this.wasVideoActivated) {
        this.wasVideoActivated = true;
      }
      // console.log('🚀 ~ NfcPage ~ authService.user:', this.authService.user());
      // const merchandise = this.merchandiseStore
      //   .items()
      //   .find((item) => item.id === '1');
      // console.log('🚀 ~ NfcPage ~ constructor ~ merchandise:', merchandise);
      // const d = 1;
      // if (merchandise) {
      //   this.merch = merchandise;
      // }
    });
  }

  ngOnInit() {}

  goToExclusiveContent() {
    // if (
    //   this.authService.user() &&
    //   this.authService.user()?.role === UserRoleEnum.USER
    // ) {
    //   this.router.navigateByUrl(`/vault/${this.merch?.id}/exclusive-content`);
    // }
  }
  fakeLogin() {
      this.authService.login({ email: 'palash.ahmed@gmail.com', password: 'Kipo123$' }, true, true);
  }
  ionViewWillLeave() {
    this.videoService.setVideoState(false);
    console.log('🚀 ~ NfcPage ~ ionViewWillLeave ~ ionViewWillLeave:');
  }
}
