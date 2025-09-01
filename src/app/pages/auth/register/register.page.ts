import {
  AfterViewInit,
  Component,
  DestroyRef,
  inject,
  OnInit,
} from '@angular/core';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import {
  IonContent,
  IonInput,
  IonButton,
  IonCheckbox,
} from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EyeKey, EyeState, PasswordState } from 'src/app/models/form.model';
import { LanguagesEnum } from 'src/app/services/translation/translation.service';
import { confirmPasswordValidator } from 'src/app/validators/confirm-password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    IonCheckbox,
    IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterLink,
  ],
})
export class RegisterPage implements OnInit {
  eyeIsClosed: EyeState = {
    password: false,
    passwordConfirm: false,
  };
  passwordType: PasswordState = {
    password: 'password',
    passwordConfirm: 'password',
  };
  form: FormGroup = new FormGroup(
    {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[а-яa-zА-ЯA-Z])(?=.*\W)(?!.* ).{8,32}$/,
        ),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(?=.*[0-9])(?=.*[а-яa-zА-ЯA-Z])(?=.*\W)(?!.* ).{8,32}$/,
        ),
      ]),
      terms: new FormControl(false, [Validators.requiredTrue]),
      privacy: new FormControl(false, [Validators.requiredTrue]),
    },
    {
      validators: confirmPasswordValidator,
    },
  );

  translations: any = [
    {
      name: 'termsLabel',
      translationString: 'AUTH.REGISTER.LABEL_TERMS',
      translation: '',
    },
    {
      name: 'privacyLabel',
      translationString: 'AUTH.REGISTER.LABEL_PRIVACY',
      translation: '',
    },
  ];

  LanguagesEnum = LanguagesEnum;

  private destroyedRef = inject(DestroyRef);
  private translateService: TranslateService = inject(TranslateService);
  private authService: AuthService = inject(AuthService);
  constructor() {}

  ngOnInit() {
    this.translateService
      .stream(this.translations.map((item: any) => item.translationString))
      .pipe(takeUntilDestroyed(this.destroyedRef))
      .subscribe((res: any) => {
        this.translations.forEach((item: any, index: number) => {
          item.translation = res[item.translationString];
        });
      });
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get passwordConfirm() {
    return this.form.get('passwordConfirm');
  }
  get terms() {
    return this.form.get('terms');
  }
  get privacy() {
    return this.form.get('privacy');
  }

  get termsLabel() {
    return this.translations.find((item: any) => item.name === 'termsLabel')
      .translation;
  }
  get privacyLabel() {
    return this.translations.find((item: any) => item.name === 'privacyLabel')
      .translation;
  }

  onToggleEye(value: EyeKey) {
    this.eyeIsClosed[value] = !this.eyeIsClosed[value];
    if (this.eyeIsClosed[value]) {
      this.passwordType[value] = 'text';
    } else {
      this.passwordType[value] = 'password';
    }
  }

  async onSubmit() {
    console.log('🚀 ~ LoginPage ~ onSubmit:', this.form.getRawValue());
    this.authService.register({
      email: this.form.getRawValue().email,
      password: this.form.getRawValue().password,
      terms: this.form.getRawValue().terms,
      privacy: this.form.getRawValue().privacy,
    });
  }
}
