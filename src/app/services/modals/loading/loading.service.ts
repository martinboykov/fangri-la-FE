import { inject, Injectable, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { LoadingController } from '@ionic/angular/standalone';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading = signal(false);
  // private _loaders = new BehaviorSubject<HTMLIonLoadingElement[] | null>(null);
  private _loaders = signal<HTMLIonLoadingElement[] | null>(null);

  private loadingCtrl: LoadingController = inject(LoadingController);
  constructor() {}
  get loaders$() {
    return toObservable(this._loaders).pipe(
      map((loader) => {
        if (loader) {
          return loader;
        } else {
          return null;
        }
      }),
    );
  }
  get loaders() {
    return this._loaders.asReadonly();
  }
  async presentLoading(showBackdrop = true) {
    console.log('presentLoading');

    // await this.dismissLoading();
    // console.log('dismissLoading');

    const newLoadingCtrl = await this.loadingCtrl.create({
      keyboardClose: true,
      cssClass: 'loader',
      mode: 'ios',
      spinner: 'bubbles',
      backdropDismiss: true,
      showBackdrop,
    });
    console.log('loadingCtrl create');

    await newLoadingCtrl.present();
    const prevLoaders = this.loaders();
    if (prevLoaders) {
      this._loaders.set([...prevLoaders, newLoadingCtrl]);
    } else {
      this._loaders.set([newLoadingCtrl]);
    }
     this.isLoading.set(true);
    return newLoadingCtrl;
  }
  async dismissLoading() {
    console.log("🚀 ~ LoaderService ~ dismissLoading")
    if (this.loaders) {
      this.loaders()?.forEach((loader) => loader.dismiss());
      this._loaders.set(null);
      this.isLoading.set(false);
    }
  }

}
