import {
  Component,
  effect,
  ElementRef,
  inject,
  input,
  OnInit,
  viewChildren,
} from '@angular/core';
import { VideoComponent } from 'src/app/components/video/video.component';
import { ArtistStore } from '../../store/artist.store';
import { SharedModule } from 'src/app/shared.module';
import { MainSwiperComponent } from 'src/app/components/swipers/main/main-swiper.component';
import dayjs from 'dayjs';
import { GestureController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-artist-tab-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  standalone: true,
  imports: [SharedModule, VideoComponent, MainSwiperComponent],
})
export class ArtistTabContentComponent implements OnInit {
  readonly artistStore = inject(ArtistStore);
  private gestureCtrl: GestureController = inject(GestureController);
  videos = viewChildren('video', { read: ElementRef });
  swipers = viewChildren('swiper', { read: ElementRef });
  imgs = viewChildren('image', { read: ElementRef });
  timeStartOne = 0;
  timeStartTwo = 0;
  videoPlayerOptions!: any;
  public dayjs = dayjs;
  constructor() {
    effect(() => {
      const videos = this.videos();
      const swipers = this.swipers();
      const imgs = this.imgs();
      [...videos, ...swipers, ...imgs].forEach((contentItem) => {
        const contentId = contentItem.nativeElement.id;
        const gesture = this.gestureCtrl.create(
          {
            el: contentItem.nativeElement,
            threshold: 0,
            onStart: (event) => {
              if (this.timeStartOne && !this.timeStartTwo) {
                this.timeStartTwo = event.startTime;
              }
              if (this.timeStartOne) {
                if (event.startTime - this.timeStartOne > 500) {
                  this.timeStartOne = 0;
                  this.timeStartTwo = 0;
                }
              }
              if (!this.timeStartOne) {
                this.timeStartOne = event.startTime;
              }
              if (this.timeStartOne && this.timeStartTwo) {
                if (this.timeStartTwo - this.timeStartOne < 500) {
                  this.artistStore.increaseLikes(contentId);
                }
                this.timeStartOne = 0;
                this.timeStartTwo = 0;
              }
            },
            onEnd: (event) => {},
            gestureName: 'double-tap',
          },
          false,
        );

        gesture.enable();
      });
    });
  }

  ngOnInit() {
    // this.videoPlayerOptions = {
    //   autoplay: false,
    //   controls: false,
    //   muted: false,
    //   fluid: true,
    //   aspectRatio: '16:9',
    //   poster: '/assets/static/images/content/content-artist-1-2.jpg',
    //   withCredentials: true,
    //   sources: [{src: '/assets/static/videos/novarae/novarae-lovely_man.mp4', type: 'video/mp4'}],
    // };
    // if (this.artistStore.artist.content.video().poster) {
    //   this.videoPlayerOptions.poster = this.match?.video?.poster;
    // }
    // if (this.match?.video?.hls_manifest) {
    //   this.videoPlayerOptions.sources = [
    //     { src: match.video.hls_manifest, type: 'application/x-mpegURL' },
    //   ];
    // }
  }
}
