import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  inject,
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
import { ArtistStore } from 'src/app/pages/artists/artist/store/artist.store';

@Component({
  selector: 'app-main-swiper',
  templateUrl: './main-swiper.component.html',
  styleUrls: ['./main-swiper.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SharedModule],
})
export class MainSwiperComponent implements OnInit {
  readonly artistStore = inject(ArtistStore);
  private readonly swiperContainer = viewChild.required<ElementRef>('swiper');
  private readonly pagination = viewChild.required<ElementRef>('pagination');
  readonly imgs = input<string[]>([]);
  readonly isEdit = input<boolean>();
  readonly contentId = input<string>();
  readonly options = input<{ [key: string]: any }>({});
  readonly paginationClass = input<string>();
  readonly imgClass = input<string>();
  readonly isLoading = input<boolean>();
  readonly requestStatus = input<RequestStatus>();
  swiperElement?: SwiperContainer;
  swiper?: Swiper;
  swiperOptions!: SwiperOptions;
  isSwiperInitialized: boolean = false;
  constructor() {
    console.log('🚀 ~ MainSwiperComponent ~ constructor ~ imgs:', this.imgs());
    register();
    this.swiperOptions = {
      // modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 8,
      // pagination: {
      //   enabled: true,
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      //   clickable: true,
      // },

      on: {
        init: (e) => {
          console.log(e);
          this.isSwiperInitialized = true;
        },
      },
    };

    effect(() => {
      const swiperElement = this.swiperContainer().nativeElement;
      const imgs = this.imgs();

      if (!swiperElement) return;

      if (swiperElement.swiper) return;
      this.swiperOptions = {
        ...this.swiperOptions,
        ...this.options(),
      };
      if (imgs.length === 0) return;
      if (imgs.length > 1) {
        this.swiperOptions.pagination = {
          enabled: true,
          el: this.pagination().nativeElement,
          type: 'bullets',
          clickable: true,
          bulletClass: this.paginationClass(),
        };
      }
      console.log(
        '🚀 ~ MainSwiperComponent ~ constructor ~ this.swiperOptions:',
        this.swiperOptions,
      );
      Object.assign(swiperElement, this.swiperOptions);
      swiperElement.initialize();
    });
  }

  ngOnInit() {}
  fileChanged(event: any, fileType: 'image' | 'video', index: number) {
    const contentId = this.contentId();
    if (contentId === undefined) return;
    this.artistStore.onFileChanged(event, fileType, contentId, index);
  }
}
