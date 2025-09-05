import { effect, inject, Injector, signal } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from '../services/auth/auth.service';
import { User, UserRoleEnum } from '../models/auth.model';
import { map } from 'rxjs';

export const userGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let user = signal<User | null>(authService.user());
  effect(
    () => {
      user.set(authService.user());
      console.log('🚀 ~ userGuard ~ user:', user());
      if (user()) {
        console.log('🚀 ~ file: userGuard.guard.ts:23 ~ tap ~ user:', user());
        if (user()?.role === UserRoleEnum.USER) {
          return true;
        }
        if (user()?.role === UserRoleEnum.ARTIST) {
          router.navigate(['/artists/' + user()?.id]);
        }
        return false;
      } else {
        return true;
      }
    },
    { injector: inject(Injector) },
  );
  return true;
  // user.subscribe((user) => {});
  // return user.pipe(
  //   map((user) => {
  //     console.log('🚀 ~ userGuard ~ user:', user);
  //     if (user) {
  //       console.log('🚀 ~ file: userGuard.guard.ts:23 ~ tap ~ user:', user);
  //       if (user.role === UserRoleEnum.USER) {
  //         return true;
  //       }
  //       if (user.role === UserRoleEnum.ARTIST) {
  //         router.navigate(['/artists/' + user.id]);
  //       }
  //       return false;
  //     }
  //     return false;
  //   }),
  // );
};
