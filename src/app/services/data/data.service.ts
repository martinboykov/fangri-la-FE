import { effect, inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';
import {
  AuthLoginRequestData,
  AuthLoginResponseData,
  AuthRegisterRequestData,
  AuthRegisterResponseData,
} from '../../models/auth.model';
import { TranslationService } from '../translation/translation.service';
import { IMessage } from 'src/app/models/response.model';

import { AuthStore } from '../auth/store/auth.store';

const BASE_URL = environment.BASE_URL;
const API = environment.API;
const isProd = environment.production;

@Injectable({
  providedIn: 'root',
})
export class DataService {
  language!: string | undefined;
  timeOffset = new Date().getTimezoneOffset() / 60;
  private translateService = inject(TranslateService);
  private translationService = inject(TranslationService);
  private readonly authStore = inject(AuthStore);
  constructor(private http: HttpClient) {
    effect(() => {
      this.language = this.translationService.language();
    });
  }

  // AUTH
  postLogin(userData: AuthLoginRequestData) {
    return this.http
      .post<{
        message: IMessage;
        data: AuthLoginResponseData;
      }>(
        `${BASE_URL}/${API}/${this.language}/auth/login?zone=${this.timeOffset}`,
        userData,
      )
      .pipe(map((response) => response));
  }
  postRegister(userData: AuthRegisterRequestData) {
    return this.http
      .post<{
        message: IMessage;
        data: AuthRegisterResponseData;
      }>(
        `${BASE_URL}/${API}/${this.language}/auth/register?zone=${this.timeOffset}`,
        userData,
      ) // returns nothing
      .pipe(map((response) => response));
  }



  getUserHasEntered(userData: string) {
    return this.http
      .get<{
        message: IMessage;
        data: AuthLoginResponseData;
      }>(
        `${BASE_URL}/${API}/${this.language}/auth/user-entered/${userData}?zone=${this.timeOffset}`,
      )
      .pipe(map((response) => response));
  }
  postForgottenPassword(email: string) {
    return this.http
      .post<{
        message: IMessage;
      }>(
        `${BASE_URL}/${API}/${this.language}/auth/forgotten-password?zone=${this.timeOffset}`,
        {
          email,
        },
      )
      .pipe(map((response) => response));
  }
  postUpdateEmailPassword(userData: { email: string; password: string }) {
    const { email, password } = userData;
    return this.http
      .post<{
        message: IMessage;
        data: AuthLoginResponseData;
      }>(
        `${BASE_URL}/${API}/${this.language}/auth/new-email-password?zone=${this.timeOffset}&userId=${this.authStore.user()?.id}`,
        {
          email,
          password,
        },
      )
      .pipe(map((response) => response));
  }

  deleteProfile() {
    return this.http
      .delete<{
        message: IMessage;
      }>(
        `${BASE_URL}/${API}/${this.language}/auth/delete-profile?zone=${this.timeOffset}&userId=${this.authStore.user()?.id}`,
      )
      .pipe(map((response) => response));
  }


}
