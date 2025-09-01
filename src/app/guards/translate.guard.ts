import { inject, Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

import { Observable } from 'rxjs';
import { TranslationService } from '../services/translation/translation.service';
import { toObservable } from '@angular/core/rxjs-interop';

export const translationGuard: CanActivateFn = () => {
  const translationService = inject(TranslationService);

  return new Observable((observer) => {
    translationService.language$.subscribe({
      next: async (res) => {
        console.log('🚀 ~ translateGuard ~ res:', res);
        if (!translationService.language) {
          await translationService.initLanguage();
        }
        observer.next(true);
      },
      error: (error) => {
        console.log('🚀 ~ translateGuard ~ error:', error);
        if (!translationService.language) {
          translationService.initLanguage();
        }
        observer.next(false);
        observer.error(error);
      },
      complete: () => {
        console.log('🚀 ~ translateGuard ~ completed');
        observer.complete();
      },
    });
  });
};

@Injectable({ providedIn: 'root' })
export class TranslationGuard implements CanActivate {
  constructor(private translationService: TranslationService) {}

  canActivate(): Observable<boolean> {
    return new Observable((observer) => {
      this.translationService.language$.subscribe({
        next: async (res) => {
          console.log('🚀 ~ translateGuard ~ res:', res);
          if (!this.translationService.language) {
            await this.translationService.initLanguage();
          }
          observer.next(true);
        },
        error: (error) => {
          console.log('🚀 ~ translateGuard ~ error:', error);
          if (!this.translationService.language) {
            this.translationService.initLanguage();
          }
          observer.next(false);
          observer.error(error);
        },
        complete: () => {
          console.log('🚀 ~ translateGuard ~ completed');
          observer.complete();
        },
      });
    });
  }
}
