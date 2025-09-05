import { HttpErrorResponse } from '@angular/common/http';
import { effect, Inject, inject, Injectable, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform, AlertController } from '@ionic/angular/standalone';
import {
  EMPTY,
  from,
  map,
  Subscription,
  switchMap,
  take,
  tap,
  timer,
} from 'rxjs';
import { DataService } from '../data/data.service';
import { StorageService } from '../storage/storage.service';
import {
  AuthLoginRequestData,
  AuthLoginResponseData,
  AuthRegisterRequestData,
  User,
  UserRoleEnum,
} from '../../models/auth.model';
import { TranslateService } from '@ngx-translate/core';
import { Device, DeviceId } from '@capacitor/device';
import { DOCUMENT } from '@angular/common';
import { TranslationService } from '../translation/translation.service';
import { FormGroup } from '@angular/forms';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { LoadingService } from '../modals/loading/loading.service';
import { AlertService } from '../modals/alert/alert.service';
import { AuthStore } from './store/auth.store';
import { AUTH_DATA } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  uuid!: string;

  homeRouteUser: string = '/artists';

  // private _user = new BehaviorSubject<User | null>(null);
  private _user = signal<User | null>(null);
  public user = this._user.asReadonly();
  public user$ = toObservable(this._user).pipe(
    map((user) => {
      if (user) {
        return user;
      } else {
        return null;
      }
    }),
  );

  private activeLogoutTimer: Subscription | null = null;

  public dataService: DataService = inject(DataService);
  public storageService: StorageService = inject(StorageService);
  public loadingService: LoadingService = inject(LoadingService);
  public platform: Platform = inject(Platform);
  public router: Router = inject(Router);
  public route: ActivatedRoute = inject(ActivatedRoute);
  public alertService: AlertService = inject(AlertService);
  public translateService = inject(TranslateService);
  public translationService = inject(TranslationService);
  private alertCtrl: AlertController = inject(AlertController);
  private authStore = inject(AuthStore);

  constructor(@Inject(DOCUMENT) private document: Document) {
    effect(() => {
      console.log('🚀 AuthService -> user', this.user());
      this.authStore.updateUser(this.user());
    });
    this.platform.ready().then(async () => {
      console.log('platform ready');
      await this.loadingService.presentLoading();

      this.uuid = ((await Device.getId()) as DeviceId).identifier;

      if (!this.translationService.language()) {
        await this.translationService.initLanguage();
      }
      this.translationService.language$
        .pipe(
          take(2),
          switchMap((res) => {
            if (!res) return from(EMPTY);
            return this.autoLogin().pipe(
              take(1),
              switchMap((userData) => {
                if (userData && userData.id) {
                  // if user has already been logged in and his data is saved on the device
                  return this.dataService.getUserHasEntered(userData.id);

                  // console.log('🚀 AuthService -> userData', userData);
                  // return of(userData);
                } else {
                  this.loadingService.dismissLoading();
                  return from(EMPTY);
                }
              }),
            );
          }),
        )

        .subscribe({
          next: async (response) => {
            if (!response) {
              return;
            }
            const userData = response?.data;
            await this.setUserData(userData, true);
            await this.loadingService.dismissLoading();
            // if (!userData.isVerified) {
            //   this.setNotVerifiedAlert();
            //   return;
            // }
            this.onLoginRouting();
          },
          error: async (error) => {
            await this.loadingService.dismissLoading();
            await this.alertService.presentDefaultAlertErrorMessage(error);
            return EMPTY;
          },
          complete: async () => {
            await this.loadingService.dismissLoading();
          },
        });
    });
  }

  onLoginRouting() {
    let returnUrl = this.route.snapshot.queryParams['returnUrl'];
    console.log('🚀 ~ AuthService ~ onLoginRouting ~ returnUrl:', returnUrl);
    let url = returnUrl || this.homeRouteUser;

    if (this.user()?.role === UserRoleEnum.ARTIST) {
      url = returnUrl || '/artists/' + this.user()?.id;
    }
    console.log('🚀 ~ AuthService ~ onLoginRouting ~ url:', url);
    if (this.router.url.includes('nfc')) {
      this.router.navigateByUrl(this.router.url);
      return;
    }
    if (this.route.snapshot) this.router.navigateByUrl(url);
  }

  autoLogin() {
    return from(this.storageService.getItem(AUTH_DATA)).pipe(
      map((storedData) => {
        console.log('🚀 storedData', storedData);
        if (!storedData) {
          return null;
        }
        const parsedData = JSON.parse(storedData);
        console.log('🚀 parsedData', parsedData);
        parsedData.token = parsedData.token;
        parsedData.isConfirmed = parsedData.isConfirmed;
        const user = this.createNewUser(parsedData);
        this._user.set(user);
        return user;
      }),
      map((user) => {
        return user;
      }),
    );
  }
  async login(userData: AuthLoginRequestData, isCheckedToRemember: boolean) {
    await this.loadingService.presentLoading();

    return this.dataService
      .postLogin(userData)
      .pipe(
        take(1),
        switchMap((response) => {
          console.log('🚀 userData', userData);
          return from(
            this.setUserData(response.data, isCheckedToRemember),
          ).pipe(take(1));
        }),
      )
      .subscribe({
        next: async (res) => {
          await this.loadingService.dismissLoading();
          if (!res) return;
          this.onLoginRouting();
        },
        error: async (error) => {
          console.log('login error', error);
          await this.loadingService.dismissLoading();
          const user = this.user();

          // if (user && !user?.isVerified) {
          //   this.setNotVerifiedAlert(error);
          // } else {
          const buttons = this.alertService.getAlertButtonsTranslations([
            { text: 'CONSTANTS.CLOSE' },
          ]);
          const message = this.alertService.getAlertMessage(
            error?.error?.message,
            {
              title: 'CONSTANTS.ERRORS.FAILURE.TITLE',
              subtitle: 'CONSTANTS.ERRORS.FAILURE.SUBTITLE',
            },
          );
          this.alertService.presentAlertMessage(message, buttons);
          // }
        },
        complete: async () => {
          console.log('login complete');
        },
      });
  }

  async register(userData: AuthRegisterRequestData) {
    await this.loadingService.presentLoading();

    return this.dataService
      .postRegister(userData)
      .pipe(
        take(1),
        switchMap((response) => {
          console.log('🚀 response', response);
          return from(this.setUserData(response.data, true)).pipe(take(1));
        }),
      )
      .subscribe({
        next: async (res) => {
          await this.loadingService.dismissLoading();
          this.onLoginRouting();
        },
        error: async (error) => {
          await this.loadingService.dismissLoading();
          console.log('register error', error);
          this.alertService.presentDefaultAlertErrorMessage(error);
        },
        complete: async () => {
          console.log('register complete');
        },
      });
  }
  async updateEmailPassword(userData: AuthLoginRequestData) {
    await this.loadingService.presentLoading();
    return this.dataService
      .postUpdateEmailPassword(userData)
      .pipe(
        take(1),
        switchMap((response) => {
          console.log('🚀 response', response);
          const newUserData = { ...this.user(), ...response.data };
          return from(this.setUserData(newUserData, true)).pipe(take(1));
        }),
      )
      .subscribe({
        next: async (res) => {
          await this.loadingService.dismissLoading();
          this.router.navigate(['settings']);
        },
        error: async (error) => {
          await this.loadingService.dismissLoading();
          console.log('register error', error);
          this.alertService.presentDefaultAlertErrorMessage(error);
        },
        complete: async () => {
          console.log('register complete');
        },
      });
  }

  async forgottenPassword(email: string, form: FormGroup) {
    await this.loadingService.presentLoading();

    return this.dataService
      .postForgottenPassword(email)
      .pipe(take(1))
      .subscribe({
        next: async (res) => {
          await this.loadingService.dismissLoading();
          const message = this.alertService.getAlertMessage(
            {
              title: '',
              subtitle: 'AUTH.FORGOTTEN_PASSWORD.SUCCESS_MESSAGE.SUBTITLE',
            },
            res.message,
          );
          const buttons = this.alertService.getAlertButtonsTranslations([
            {
              text: 'CONSTANTS.CLOSE',
              handler: () => {
                this.router.navigateByUrl('/auth/login');
                form.reset();
              },
            },
          ]);
          this.alertService.presentAlertMessage(message, buttons);
        },
        error: async (error) => {
          console.log('forgottenPassword error', error);
          await this.loadingService.dismissLoading();
          this.alertService.presentDefaultAlertErrorMessage(error);
        },
        complete: async () => {
          console.log('forgottenPassword complete');
        },
      });
  }

  async deleteProfile() {
    await this.loadingService.presentLoading();
    this.dataService.deleteProfile().subscribe({
      next: async (res) => {
        await this.loadingService.dismissLoading();
        this.router.navigateByUrl('/auth/login');
      },
      error: async (error) => {
        console.log('deleteProfile error', error);
        await this.loadingService.dismissLoading();
        this.alertService.presentDefaultAlertErrorMessage(error);
      },
      complete: async () => {
        console.log('deleteProfile complete');
      },
    });
  }
  logout(guard = false) {
    // AUTO LOGOUT START
    // ---------------
    if (this.activeLogoutTimer) {
      this.clearTimeout();
    }
    // ---------------
    // AUTO LOGOUT END
    if (!guard) this.router.navigateByUrl('/auth/login');
    this._user.set(null);
    // if (Capacitor.getPlatform() !== 'web') {
    //   this.pushNotificationsService.removePush();
    // }
    return this.storageService.removeItem(AUTH_DATA);
  }
  // updateUserDetails(newUserDetails: { name: string, email: string }) {
  //   const IUserd = this.userSnapshot?.id;
  //   return this.dataService.putUpdateUserDetails(IUserd, newUserDetails).pipe(
  //     take(1),
  //     switchMap((userData) => {
  //       return from(this.setUserData(userData)).pipe(take(1));
  //     })
  //   );
  // }
  // deleteProfile() {
  //   return this.dataService.deleteProfile(this.userSnapshot?.id).pipe(
  //     take(1),
  //     switchMap((response) => {
  //       return from(this.logout(true));
  //     })
  //   );
  // }
  private async setUserData(
    newUserData: AuthLoginResponseData,
    isCheckedToRemember: boolean,
  ) {
    const oldUser = this.user();
    const newUser = {
      ...(oldUser ? oldUser : {}),
      ...newUserData,
    };
    console.log('auth.service.ts ~ oldUser', oldUser);
    console.log('auth.service.ts ~ newUserData', newUserData);
    console.log('auth.service.ts ~ newUser', newUser);

    const user = this.createNewUser(newUser);

    this._user.set(user);

    // AUTO LOGOUT START
    // ---------------
    if (user.tokenDuration < 0 || !isCheckedToRemember) {
      this.storageService.removeItem(AUTH_DATA);
      await this.logout();
      await this.alertTokenExpired();
      return new Promise((resolve) => resolve(null));
    }
    this.autoLogout(user.tokenDuration);
    return await this.storeAuthData(user);
  }

  private autoLogout(duration: number) {
    console.log('🚀 duration', duration);
    if (this.activeLogoutTimer) {
      this.clearTimeout();
    }

    this.activeLogoutTimer = timer(duration)
      .pipe(
        tap(() => {
          console.log('tap autoLogout');
          this.logout();
          this.alertTokenExpired();
        }),
      )
      .subscribe(() => console.log('subscribe autoLogout'));
  }
  setNotVerifiedAlert(error?: any) {
    const buttons = this.alertService.getAlertButtonsTranslations([
      {
        text: 'CONSTANTS.CLOSE',
        handler: () => {
          this.router.navigateByUrl('/auth/verification');
        },
      },
    ]);
    const message = this.alertService.getAlertMessage(error?.error?.message, {
      title: 'AUTH.LOGIN.LOGIN_FAILURE_MESSAGE.TITLE',
      subtitle: 'AUTH.LOGIN.LOGIN_FAILURE_MESSAGE.SUBTITLE',
    });
    this.alertService.presentAlertMessage(message, buttons);
  }
  alertTokenExpired() {
    let message = this.alertService.getAlertMessage({
      title: 'AUTH.TOKEN_EXPIRED.TITLE',
      subtitle: 'AUTH.TOKEN_EXPIRED.SUBTITLE',
    });
    const buttons = this.alertService.getDefaultAlertButton(() => {
      this.router.navigateByUrl('/auth/login');
    });
    return this.alertService.presentAlertMessage(message, buttons);
  }
  // ---------------
  // AUTO LOGOUT END

  private storeAuthData(user: User) {
    const data = JSON.stringify(user);
    return this.storageService.setItem(AUTH_DATA, data);
  }
  private createNewUser(data: any) {
    const user = new User(data);
    console.log('🚀  user', user);
    return user;
  }
  private clearTimeout() {
    if (this.activeLogoutTimer) {
      this.activeLogoutTimer.unsubscribe();
      this.activeLogoutTimer = null;
    }
  }
}
