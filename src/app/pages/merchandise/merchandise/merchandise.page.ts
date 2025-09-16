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
import { Merchandise, MerchandiseStatusEnum } from '../store/merchandise.slice';
import { environment } from 'src/environments/environment';
import { addIcons } from 'ionicons';
import { chevronDown, chevronUp } from 'ionicons/icons';
import { ModalPopupComponent } from 'src/app/components/modal-popup/modal-popup.component';
import { ModalController } from '@ionic/angular/standalone';
@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.page.html',
  styleUrls: ['./merchandise.page.scss'],
  standalone: true,
  imports: [SharedModule, HeaderInnerPageComponent, MainSwiperComponent],
})
export class MerchandisePage implements OnInit {
  private modalController = inject(ModalController);
  private router = inject(Router);
  readonly merchandiseStore = inject(MerchandiseStore);
  readonly id = input.required<string>();
  public readonly currency = environment.currency;
  public modal!: HTMLIonModalElement;
  readonly merchandise: WritableSignal<Merchandise | undefined> = signal<
    Merchandise | undefined
  >(undefined);
  selectedColor: WritableSignal<string | undefined> = signal<
    string | undefined
  >(undefined);
  selectedSize: string | undefined = undefined;

  MerchandiseStatusEnum = MerchandiseStatusEnum;

  constructor() {
    addIcons({ chevronDown, chevronUp });
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
      const merchandise = this.merchandise();
      if (merchandise?.options?.colors) {
        this.selectedColor.set(merchandise?.options?.colors[0] || '');
      }
    });
  }

  ngOnInit() {}

  selectColor(color: string) {
    this.selectedColor.set(color);
  }
  selectSize($event: CustomEvent) {
    console.log('🚀 ~ MerchandisePage ~ selectSize:', this.selectedSize);
  }
  getMerchandise() {}

  async openModalSheet() {
    console.log('openModalSheet');
    let config: any = {
      component: ModalPopupComponent,
      componentProps: {
        content: this.merchandiseStore.shippingInfo(),
        // config: {
        //   isModal: true,
        //   hasModal: false,
        //   hasGoal: this.config().modal?.hasGoal,
        //   canEdit: this.config().modal?.canEdit,
        //   hasActionButtons: this.config().modal?.hasActionButtons,
        // },
      },
      initialBreakpoint: 0.5,
      breakpoints: [0, 0.5, 1],
    };
    // if (!this.isMobile()) {
    //   config.breakpoints = [1];
    //   config.initialBreakpoint = 1;
    //   config.cssClass = 'custom-modal-popup';
    // }

    this.modal = await this.modalController.create(config);

    this.modal.present();
  }
}
