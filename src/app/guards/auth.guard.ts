import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.user();
  if (user) {
    console.log('🚀 ~ file: auth.guard.ts:23 ~ tap ~ user:', user);
    return true;
  } else {
    console.log('🚀 ~ state.url:', state.url);
    const paramsOnLoad = route.queryParamMap;
    console.log('🚀 ~ params:', paramsOnLoad.keys);
    const params: any = {
      returnUrl: state.url,
    };
    if (paramsOnLoad.has('lang')) {
      params['lang'] = paramsOnLoad.get('lang');
    }

    router.navigate(['/auth/login'], { queryParams: params });
    return false;
  }
};
