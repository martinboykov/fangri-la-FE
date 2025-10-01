import {
  RouteReuseStrategy,
  provideRouter,
  withPreloading,
  PreloadAllModules,
  withComponentInputBinding,
} from '@angular/router';
import {
  IonicRouteStrategy,
  provideIonicAngular,
} from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

import { IonicStorageModule } from '@ionic/storage-angular';

import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideTranslateService } from '@ngx-translate/core';
import { routes } from './app.routes';
import { environment } from 'src/environments/environment';

import dayjs, { Dayjs } from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.updateLocale('en', {
  weekStart: 1,
});

export const appConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: LOCALE_ID, useValue: 'bg-BG' },
    provideIonicAngular({
      mode: 'md',
      useSetInputAPI: true, //allow to use signal input in modals
    }),
    provideRouter(
      routes,
      // withPreloading(PreloadAllModules),
      withComponentInputBinding(),
      // withDebugTracing(),
    ),
    provideHttpClient(),
    provideTranslateService({
      loader: provideTranslateHttpLoader({
        prefix: '/assets/i18n/',
        suffix: '.json',
      }),
      fallbackLang: 'en',
      lang: 'en',
    }),
    // withInterceptors(httpInterceptorProvidersFunctional), // TODO add interceptors for error handling
    // withInterceptorsFromDi() // since Angular v15
    importProvidersFrom([
      IonicStorageModule.forRoot({ storeName: 'fangri-la' }),
    ]),
  ],
};
