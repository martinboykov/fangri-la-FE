import { Injectable, signal, WritableSignal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { BehaviorSubject } from 'rxjs';
import Player from 'video.js/dist/types/player';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  _video = signal<Player | undefined>(undefined);
  _videoPlayState = signal<boolean>(false);
  get videoPlayState$() {
    return toObservable(this._videoPlayState);
  }
  get videoPlayState() {
    return this._videoPlayState.asReadonly();
  }
  constructor() {}
  setVideoState(value: boolean) {
    this._videoPlayState.set(value);
  }
  setVideo(value: Player) {
    this._video.set(value);
  }
}
