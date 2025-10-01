import { Component, effect, inject, input, OnInit } from '@angular/core';
import { VideoComponent } from 'src/app/components/video/video.component';
import { ArtistStore } from '../../store/artist.store';
import { SharedModule } from 'src/app/shared.module';
import { MainSwiperComponent } from 'src/app/components/swipers/main/main-swiper.component';
import dayjs from 'dayjs';

@Component({
  selector: 'app-artist-tab-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  standalone: true,
  imports: [SharedModule, VideoComponent, MainSwiperComponent],
})
export class ArtistTabContentComponent implements OnInit {
  readonly artistStore = inject(ArtistStore);

  videoPlayerOptions!: any;
  constructor() {


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
