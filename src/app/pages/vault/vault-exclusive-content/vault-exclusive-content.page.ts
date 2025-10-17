import {
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  input,
  OnInit,
  signal,
  viewChild,
  WritableSignal,
} from '@angular/core';
import { VaultStore } from '../store/vault.store';
import { HeaderInnerPageComponent } from 'src/app/components/headers/header-inner-page/header-inner-page.component';
import { SharedModule } from 'src/app/shared.module';
import { Merchandise } from '../../merchandise/store/merchandise.slice';
import { Router } from '@angular/router';
import { AuthStore } from 'src/app/services/auth/store/auth.store';
import { VideoComponent } from 'src/app/components/video/video.component';

@Component({
  selector: 'app-vault-exclusive-content',
  templateUrl: './vault-exclusive-content.page.html',
  styleUrls: ['./vault-exclusive-content.page.scss'],
  standalone: true,
  imports: [SharedModule, HeaderInnerPageComponent, VideoComponent],
})
export class VaultExclusiveContentPage implements OnInit {
  private router = inject(Router);
  readonly vaultStore = inject(VaultStore);
  readonly authStore = inject(AuthStore);


  readonly id = input.required<string>();

  readonly merchandise: WritableSignal<Merchandise | undefined> = signal<
    Merchandise | undefined
  >(undefined);

  url = computed(() => decodeURI(`${window.location.href}`));
  parser = document.createElement('a');
  path = computed(() => this.parser.pathname + this.parser.search);

  constructor() {
    this.parser.href = this.url();
    const navigation = this.router.currentNavigation();
    const state = navigation?.extras.state;
    console.log('🚀 ~ VaultExclusiveContentPage ~ constructor ~ state:', state);
    if (state) {
      this.merchandise.set(state as Merchandise);
    }

    effect(() => {
      console.log('🚀 ~ VaultExclusiveContentPage ~ id:', this.id());
      // TODO if id get merchandise from api
      // this.getMerchandise();
      if (!state) {
        const merchandise = this.vaultStore
          .items()
          .find((merchandise) => merchandise.id === this.id());
        this.merchandise.set(merchandise as any);
      }
    });
  }
  ngOnInit() {}

}
