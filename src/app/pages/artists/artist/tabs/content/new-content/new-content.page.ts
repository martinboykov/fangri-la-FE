import { Component, effect, inject, input, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { VideoComponent } from 'src/app/components/video/video.component';
import { MainSwiperComponent } from 'src/app/components/swipers/main/main-swiper.component';
import { HeaderInnerPageComponent } from 'src/app/components/headers/header-inner-page/header-inner-page.component';
import { ContentItem } from '../../../store/artist.slice';
import { ArtistStore } from '../../../store/artist.store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/services/modals/toast/toast.service';
import { idGenerator } from 'src/app/pages/artists/store/db';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.page.html',
  styleUrls: ['./new-content.page.scss'],
  standalone: true,
  imports: [
    SharedModule,
    VideoComponent,
    MainSwiperComponent,
    HeaderInnerPageComponent,
  ],
})
export class NewContentPage implements OnInit {
  private router: Router = inject(Router);
  readonly modalController = inject(ModalController);
  readonly toastService = inject(ToastService);
  readonly authService = inject(AuthService);
  readonly artistStore = inject(ArtistStore);
  readonly artistId = input.required<string>();

  images: string[] = [];
  text: string = '';
  constructor() {
    effect(() => {
      if (!this.artistStore.artist.id()) {
        this.artistStore.getArtistById(this.artistId());
      }
    });
  }

  ngOnInit() {
    console.log('NewContentPage ~ onInit');
  }
  goBack() {
    this.router.navigateByUrl('/artists/' + this.authService.user()?.id);
    this.modalController.dismiss();
  }
  async fileChanged(event: any, fileType: 'image' | 'video', index: number) {
    const url = await this.artistStore.fileUpload(event, fileType);
    if (typeof url !== 'string') return;
    this.images = [...this.images, url];
  }

  submitNewPost() {
    const content: ContentItem = {
      id: idGenerator(),
      title: this.text,
      content: this.text,
      images: this.images,
      video: {
        poster: '',
        sources: [],
      },
      date: new Date().toISOString(),
      likes: 0,
      isLiked: false,
    };
    this.artistStore.createContentItem(content);
  }
}
