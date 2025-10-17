import { Injectable, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  videoPlayState$ = new BehaviorSubject<boolean>(true);

  constructor() {}
  setVideoState(value: boolean) {
    this.videoPlayState$.next(value);
  }
}
