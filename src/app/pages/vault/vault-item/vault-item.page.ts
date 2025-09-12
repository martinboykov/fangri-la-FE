import {
  Component,
  computed,
  effect,
  inject,
  input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { VaultStore } from '../store/vault.store';
import { MainSwiperComponent } from 'src/app/components/swipers/main/main-swiper.component';
import { HeaderInnerPageComponent } from 'src/app/components/headers/header-inner-page/header-inner-page.component';
import { SharedModule } from 'src/app/shared.module';
import { Merchandise } from '../../merchandise/store/merchandise.slice';
import { Router } from '@angular/router';
import { AuthStore } from 'src/app/services/auth/store/auth.store';

@Component({
  selector: 'app-vault-item',
  templateUrl: './vault-item.page.html',
  styleUrls: ['./vault-item.page.scss'],
  standalone: true,
  imports: [SharedModule, HeaderInnerPageComponent, MainSwiperComponent],
})
export class VaultItemPage implements OnInit {
  private router = inject(Router);
  readonly vaultStore = inject(VaultStore);
  readonly authStore = inject(AuthStore);

  readonly id = input.required<string>();

  readonly merchandise: WritableSignal<Merchandise | undefined> = signal<
    Merchandise | undefined
  >(undefined);

  socials = [
    {
      icon: 'tiktok',
      link: '',
    },
    {
      icon: 'snapchat',
      link: '',
    },
    {
      icon: 'x',
      link: '',
    },
    {
      icon: 'instagram',
      link: '',
    },
    {
      icon: 'facebook',
      link: '',
    },
  ];
  // TODO: add links for social media

  url = computed(() => decodeURI(`${window.location.href}`));
  parser = document.createElement('a');
  path = computed(() => this.parser.pathname + this.parser.search);
  constructor() {
    this.parser.href = this.url();
    const navigation = this.router.currentNavigation();
    const state = navigation?.extras.state;
    console.log('🚀 ~ MerchandisePage ~ constructor ~ state:', state);
    if (state) {
      this.merchandise.set(state as Merchandise);
    }

    effect(() => {
      console.log('🚀 ~ MerchandisePage ~ id:', this.id());
      // TODO if id get merchandise from api
      // this.getMerchandise();
      if (!state) {
        const merchandise = this.vaultStore
          .items()
          .find((merchandise) => merchandise.id === this.id());
        this.merchandise.set(merchandise);
      }
      const merchandise = this.merchandise();
    });
  }

  ngOnInit() {}
}
