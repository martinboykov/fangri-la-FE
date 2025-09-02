import {
  AfterViewInit,
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  signal,
  WritableSignal,
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
import { UserRoleEnum } from 'src/app/models/auth.model';

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
  private destroyedRef = inject(DestroyRef);
  private translateService: TranslateService = inject(TranslateService);
  private authService: AuthService = inject(AuthService);
  UserRoleEnum = UserRoleEnum;
  isSMSRequired = computed(
    () => this.form.get('role')?.value === UserRoleEnum.USER,
  );

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
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      surname: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),

      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9 \-\.\s+|]{8,32}$/),
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
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
      sms: new FormControl(false, [Validators.requiredTrue]),
      role: new FormControl(UserRoleEnum.USER, [Validators.required]),
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
      name: 'smsLabel',
      translationString: 'AUTH.REGISTER.LABEL_SMS',
      translation: '',
    },
  ];

  LanguagesEnum = LanguagesEnum;

  currentSlide: WritableSignal<number> = signal(1);

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
  get name() {
    return this.form.get('name');
  }
  get surname() {
    return this.form.get('surname');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }
  get username() {
    return this.form.get('username');
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
  get sms() {
    return this.form.get('sms');
  }
  get role() {
    return this.form.get('role');
  }

  get termsLabel() {
    return this.translations.find((item: any) => item.name === 'termsLabel')
      .translation;
  }
  get smsLabel() {
    return this.translations.find((item: any) => item.name === 'smsLabel')
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
  changeRole(value: UserRoleEnum) {
    this.form.patchValue({ role: value });
    if(value === UserRoleEnum.ARTIST){
      this.form.get('sms')?.setValidators([]);
    } else {
      this.form.get('sms')?.setValidators([Validators.requiredTrue]);
    }
    this.form.get('sms')?.updateValueAndValidity();
  }
  async onSubmit() {
    console.log('🚀 ~ LoginPage ~ onSubmit:', this.form.getRawValue());
    this.authService.register({
      email: this.form.getRawValue().email,
      password: this.form.getRawValue().password,
      terms: this.form.getRawValue().terms,
      sms: this.form.getRawValue().sms,
    });
  }
}
