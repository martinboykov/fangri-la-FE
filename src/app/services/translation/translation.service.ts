import { DOCUMENT } from '@angular/common';
import { inject, Inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { ActivatedRoute } from '@angular/router';
import { LANGUAGE, LANGUAGES } from 'src/app/constants';
import { Device } from '@capacitor/device';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  // private _language = new BehaviorSubject<string | null>(null);
  private _language = signal<string | undefined>(undefined);
  public language$ = toObservable(this._language);

  public translateService = inject(TranslateService);
  public storageService: StorageService = inject(StorageService);
  public route: ActivatedRoute = inject(ActivatedRoute);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  get language() {
    // return this._language.getValue();
    return this._language.asReadonly();
  }

  async initLanguage() {
    this.translateService.addLangs([LANGUAGES.BG, LANGUAGES.EN]);
    let langCode = null;
    const params = this.route.snapshot.queryParamMap;
    let paramsLangCode = params.get('lang');
    const storageLangCode = await this.storageService.getItem(LANGUAGE);

    // const deviceLangCode = (await Device.getLanguageCode()).value;
    // if (deviceLangCode) {
    //   langCode = deviceLangCode;
    // }
    if (paramsLangCode) {
      langCode = paramsLangCode;
    }
    if (storageLangCode) {
      langCode = storageLangCode;
    }
    console.log('🚀 ~ TranslationService ~ initLanguage ~ langCode:', langCode);
    if (langCode) {
      this.translateService.setDefaultLang(langCode);
      this.translateService.use(langCode);
      if (langCode === LANGUAGES.BG) {
        this.document.documentElement.lang = 'bg'; // 'bg-BG'
      } else if (langCode === LANGUAGES.EN) {
        this.document.documentElement.lang = 'en'; // 'en-US'
      }
    } else {
      this.translateService.setDefaultLang(LANGUAGES.BG);
      this.translateService.use(LANGUAGES.BG);
      this.storageService.setItem(LANGUAGE, LANGUAGES.BG);
      this.document.documentElement.lang = 'bg'; // 'bg-BG'
    }
    this._language.set(this.translateService.store.currentLang);
  }
  updateLanguage(lang: string) {
    this.translateService.use(lang);
    this.storageService.setItem(LANGUAGE, lang);
    this._language.set(lang);
  }
}
