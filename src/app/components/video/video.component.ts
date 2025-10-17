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
  readonly poster = input<string>();
  readonly sources = input.required<
    {
      src: string;
      type: string;
    }[]
  >();
  readonly config = input<{ [key: string]: any }>();
  readonly hasToggleIcon = input<boolean>(true);
  readonly isIconInCenter = input<boolean>(false);
  options: {
    withCredentials?: boolean;
    fluid?: boolean;
    muted?: boolean;
    aspectRatio?: string;
    autoplay?: boolean;
    controls?: boolean;
    poster?: string;
    sources?: { src: string; type: string }[];
  } = {
    autoplay: false,
    controls: false,
    muted: false,
    fluid: true,
    aspectRatio: '1:1',

    // withCredentials: true,
    // poster: this.poster() || '',
    // sources: this.sources(),
  };
  player!: Player;
  isVideoPlaying: boolean = false;
  constructor() {
    effect(() => {
      this.options.poster = this.poster() || '';
      this.options.sources = this.sources();
      console.log(
        '🚀 ~ VideoComponent ~ constructor ~ this.options:',
        this.options,
      );
      if (this.player) {
        this.player.pause();
        this.player.poster(this.poster() || '');
        const optionsSource = this.options.sources;
        if (optionsSource !== undefined && optionsSource.length > 0) {
          this.player.src(optionsSource[0].src);
          this.player.currentTime(0);
          this.player.trigger('loadstart');
        }
      }
      const config = this.config();
      if (config && config['muted']) {
        this.player.muted(true);
      }
      if (config && config['autoplay']) {
        this.toggleVideoState();
      }
    });
  }

  // Instantiate a Video.js player OnInit
  ngOnInit() {
    console.log('🚀 ~ VideoComponent ~ ngOnInit');
    this.player = videojs(
      this.target().nativeElement,
      this.options,
      function onPlayerReady() {
        console.log('🚀 ~ onPlayerReady ~ this:', this);
      },
    );
    this.videoService.videoPlayState$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        if (this.isIconInCenter()) {
          if (!value) {
            this.player.pause();
          }
        }
      });
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
      } else {
        this.player.pause();
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
