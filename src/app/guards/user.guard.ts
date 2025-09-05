import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
import { UserRoleEnum } from '../models/auth.model';

export const userGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user = authService.user();
  if (user) {
    console.log('🚀 ~ file: userGuard.guard.ts:23 ~ tap ~ user:', user);
    if (user.role === UserRoleEnum.USER) {
      return true;
    }
    if (user.role === UserRoleEnum.ARTIST) {
      router.navigate(['/artists/' + user.id]);
    }
    return false;
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
