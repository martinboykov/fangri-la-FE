import {
  Component,
  effect,
  inject,
  input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { Router } from '@angular/router';
import { HeaderInnerPageComponent } from 'src/app/components/headers/header-inner-page/header-inner-page.component';
import { MainSwiperComponent } from 'src/app/components/swipers/main/main-swiper.component';
import { SharedModule } from 'src/app/shared.module';
import { MerchandiseStore } from '../store/merchandise.store';
import { Merchandise } from '../store/merchandise.slice';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.page.html',
  styleUrls: ['./merchandise.page.scss'],
  standalone: true,
  imports: [SharedModule, HeaderInnerPageComponent, MainSwiperComponent],
})
export class MerchandisePage implements OnInit {
  private router = inject(Router);
  readonly merchandiseStore = inject(MerchandiseStore);
  readonly id = input.required<string>();
  readonly merchandise: WritableSignal<Merchandise | undefined> = signal<
    Merchandise | undefined
  >(undefined);

  constructor() {
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
        const merchandise = this.merchandiseStore
          .items()
          .find((merchandise) => merchandise.id === this.id());
        console.log(
          '🚀 ~ MerchandisePage ~ constructor ~ merchandise:',
          merchandise,
        );
        this.merchandise.set(merchandise || undefined);
      }
    });
  }

  ngOnInit() {}

  getMerchandise() {}
}
