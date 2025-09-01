import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IonContent, IonInput, IonButton } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LanguagesEnum } from 'src/app/services/translation/translation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    IonContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterLink,
  ],
})
export class LoginPage implements OnInit, AfterViewInit {
  eyeIsClosed: boolean = false;
  passwordType: string = 'password';
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(
        /^(?=.*[0-9])(?=.*[а-яa-zА-ЯA-Z])(?=.*\W)(?!.* ).{8,32}$/,
      ),
    ]),
    // checkbox: new FormControl(false),
  });
  // checkboxLabel!: string;
  LanguagesEnum = LanguagesEnum;

  constructor() {}
  private authService: AuthService = inject(AuthService);
  ngOnInit() {}
  ngAfterViewInit() {}

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  ionViewWillEnter() {
    // this.host.nativeElement.style.setProperty(`--ion-background-color`, '#fff');
  }
  ionViewWillLeave() {
    // this.host.nativeElement.style.setProperty(
    //   `--ion-background-color`,
    //   'linear-gradient(180deg, #f3f3f3 0%, #eee 100%)',
    // );
  }
  onToggleEye() {
    this.eyeIsClosed = !this.eyeIsClosed;
    if (this.eyeIsClosed) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

  async onSubmit() {
    console.log('🚀 ~ LoginPage ~ onSubmit:', this.form.getRawValue());
    this.authService.login(
      {
        email: this.form.getRawValue().email,
        password: this.form.getRawValue().password,
      },
      true,
    );
  }
}
