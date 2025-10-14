import { Component, effect, inject, input, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { VideoComponent } from 'src/app/components/video/video.component';
import { MainSwiperComponent } from 'src/app/components/swipers/main/main-swiper.component';
import { HeaderInnerPageComponent } from 'src/app/components/headers/header-inner-page/header-inner-page.component';
import { ContentItem } from '../../../store/artist.slice';
import { ArtistStore } from '../../../store/artist.store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ToastService } from 'src/app/services/modals/toast/toast.service';

@Component({
  selector: 'app-content-item',
  templateUrl: './content-item.page.html',
  styleUrls: ['./content-item.page.scss'],
  standalone: true,
  imports: [
    SharedModule,
    VideoComponent,
    MainSwiperComponent,
    HeaderInnerPageComponent,
  ],
})
export class ContentItemPage implements OnInit {
  readonly toastService = inject(ToastService);
  readonly authService = inject(AuthService);
  readonly artistStore = inject(ArtistStore);
  readonly artistId = input.required<string>();
  readonly contentId = input.required<string>();
  readonly isEdit = input<boolean>();
  contentItem!: ContentItem;
  constructor() {
    effect(() => {
      console.log(
        '🚀 ~ ContentItemPage ~ constructor ~ isEdit:',
        this.isEdit(),
      );
      console.log(
        '🚀 ~ ContentItemPage ~ constructor ~ this.artistStore.artist():',
        this.artistStore.artist.id(),
      );
      if (!this.artistStore.artist.id()) {
        this.artistStore.getArtistById(this.artistId());
      }
      this.contentItem = this.artistStore.getContentById(
        this.contentId(),
      ) as ContentItem;
      console.log(
        '🚀 ~ ContentItemPage ~ constructor ~ this.contentItem:',
        this.contentItem,
      );
    });
  }

  ngOnInit() {
    console.log('🚀 ~ ContentItemPage ~ ngOnInit');
  }
  fileChanged(event: any, fileType: 'image' | 'video', index: number) {
    this.artistStore.onFileChanged(event, fileType, this.contentId(), index);
  }
  contentChanged(event: any, content: string) {
    this.artistStore.updateContent(this.contentId(), content);
  }
}
