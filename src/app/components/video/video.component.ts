import {
  Component,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit,
  OnChanges,
  ViewChild,
  ViewEncapsulation,
  input,
  viewChild,
  WritableSignal,
  signal,
  effect,
  DestroyRef,
} from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import { VideoService } from './video.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import 'fraction.js';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss'],
  standalone: true,
  imports: [SharedModule],
  encapsulation: ViewEncapsulation.None,
})
export class VideoComponent implements OnInit, OnChanges, OnDestroy {
  private videoService = inject(VideoService);
  private destroyRef = inject(DestroyRef);
  private readonly target = viewChild.required<ElementRef>('target');
  // See options: https://videojs.com/guides/options
  // readonly poster = input<string>();
  // readonly sources = input.required<
  //   {
  //     src: string;
  //     type: string;
  //   }[]
  // >();
  readonly config = input<{ [key: string]: any }>();
  readonly hasToggleIcon = input<boolean>(true);
  readonly isIconInCenter = input<boolean>(false);
  readonly isFullScreen = input<boolean>(false);
  // options: {
  //   withCredentials?: boolean;
  //   fluid?: boolean; // keeps to a specific aspect ratio
  //   fill?: boolean; // fills the container
  //   responsive?: boolean;
  //   muted?: boolean;
  //   aspectRatio?: string;
  //   autoplay?: boolean;
  //   controls?: boolean;
  //   poster?: string;
  //   sources?: { src: string; type: string }[];
  // } = {
  //   autoplay: false,
  //   controls: false,
  //   muted: false,
  //   fluid: false,
  //   fill: true,
  //   responsive: true,
  //   // aspectRatio: '1:1',
  //   // withCredentials: true,
  //   // poster: this.poster() || '',
  //   // sources: this.sources(),
  // };
  player!: Player;
  isVideoPlaying: boolean = false;
  constructor() {
    const self = this;
    // this.options.aspectRatio = `${window.innerWidth}:${window.innerHeight}`;

    effect(() => {
      const self = this;
      // this.options.poster = this.poster() || '';
      // this.options.sources = this.sources();
      // console.log(
      //   '🚀 ~ VideoComponent ~ constructor ~ this.options:',
      //   this.options,
      // );

      // console.log(
      //   '🚀 ~ VideoComponent ~ constructor ~ this.isFullScreen():',
      //   this.isFullScreen(),
      // );
      // if (!this.isFullScreen()) {
      //   this.options.aspectRatio = '1:1';
      //   this.options.fluid = true;
      //   this.options.fill = false;
      // }
    });
  }

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    const self = this;

    console.log('🚀 ~ VideoComponent ~ ngOnInit');
    let config = this.config();
    console.log('🚀 ~ VideoComponent ~ ngOnInit ~ config:', config);
    if (config && config['fluid']) {
      config = {
        ...config,
        // aspectRatio: `${window.innerWidth}:${Math.round(window.innerHeight * 0.7)}`,
      };
    }
    // if (config && config['muted']) {
    //   this.player.muted(true);
    // }
    // if (config && config['autoplay']) {
    //   this.toggleVideoState();
    // }
    this.player = videojs(
      this.target().nativeElement,
      config,
      // function onPlayerReady() {
      //   console.log('🚀 ~ onPlayerReady ~ this:', this);
      // },
    );
    if (this.player) {
      console.log('🚀 ~ VideoComponent ~ constructor ~ this.player:', [
        this.player,
        this.player.id_,
      ]);
      this.player.pause();
      // this.player.poster(this.poster() || '');
      // if (
      //   this.config()?.['sources'] !== undefined &&
      //   this.config()?.['sources'].length > 0
      // ) {
      //   // this.player.src(this.config()?.['sources'][0].src);
      //   this.player.currentTime(0);
      //   this.player.trigger('loadstart');
      // }
      this.player.on('ready', function () {
        console.log('video ready');
      });
      this.player.on('playing', function () {
        console.log('video playing');
        self.videoService.setVideoState(true);
        // if (self.isFullScreen()) {
        //   self.options.aspectRatio = `${window.innerWidth}:${window.innerHeight}`;
        // }
      });
      this.player.on('paused', function () {
        console.log('video paused');
        self.videoService.setVideoState(false);
        // self.options.aspectRatio = `1:1`;
      });
      this.player.on('ended', function () {
        console.log('video ended');
        self.videoService.setVideoState(false);
        // self.options.aspectRatio = `1:1`;
      });
    }
    // this.videoService.videoPlayState$
    //   .pipe(takeUntilDestroyed(this.destroyRef))
    //   .subscribe((value) => {
    //     if (this.isIconInCenter()) {
    //       if (!value) {
    //         this.player.pause();
    //       }
    //     }
    // });
  }

  // Dispose the player OnDestroy
  ngOnChanges() {
    console.log('🚀 ~ VideoComponent ~ ngOnChanges');
  }

  toggleVideoState() {
    console.log('🚀 ~ VideoComponent ~ toggleVideoState ~ toggleVideoState:');
    if (this.player) {
      this.isVideoPlaying = !this.isVideoPlaying;
      if (this.isVideoPlaying) {
        this.player.play();
        // this.player.requestFullscreen();
      } else {
        this.player.pause();
        console.log('video paused');
        this.videoService.setVideoState(false);
      }
    }
  }

  dbClick(event: any) {
    console.log('🚀 ~ VideoComponent ~ dbClick ~ event:', event);
  }
  ngOnDestroy() {
    if (this.player) {
      this.player.pause();
      this.player.dispose();
    }
  }
}
