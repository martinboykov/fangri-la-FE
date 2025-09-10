import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  input,
  OnInit,
  viewChild,
} from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
// import Swiper from 'swiper';
import { Swiper } from 'swiper/types';
import { SwiperOptions } from 'swiper/types';
import { Pagination } from 'swiper/modules';
import { register, SwiperContainer } from 'swiper/element/bundle';
import { RequestStatus } from 'src/app/store/custom-features/with-response/with-request-status.slice';

@Component({
  selector: 'app-main-swiper',
  templateUrl: './main-swiper.component.html',
  styleUrls: ['./main-swiper.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SharedModule],
})
export class MainSwiperComponent implements OnInit {
  private readonly swiperContainer = viewChild.required<ElementRef>('swiper');
  readonly imgs = input<string[]>();
  readonly isLoading = input<boolean>();
  readonly requestStatus = input<RequestStatus>();
  swiperElement?: SwiperContainer;
  swiper?: Swiper;
  swiperOptions!: SwiperOptions;
  isSwiperInitialized: boolean = false;
  constructor() {
    register();
    this.swiperOptions = {
      // modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 8,
      pagination: {
        enabled: true,
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      on: {
        init: (e) => {
          console.log(e);
          this.isSwiperInitialized = true;
        },
      },
    };

    effect(() => {
      const swiperElement = this.swiperContainer().nativeElement;

      if (!swiperElement) return;

      if (swiperElement.swiper) return;

      Object.assign(swiperElement, this.swiperOptions);
      swiperElement.initialize();
    });
  }

  ngOnInit() {}
}
