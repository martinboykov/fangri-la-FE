import { Component, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonContent,
  IonInput,
  IonButton
} from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { AlertService } from 'src/app/services/modals/alert/alert.service';

@Component({
  selector: 'app-forgotten',
  templateUrl: './forgotten.page.html',
  styleUrls: ['./forgotten.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonInput,
    IonContent,
    CommonModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterLink
],
})
export class ForgottenPage {
  passwordType: string = 'password';
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  private authService: AuthService = inject(AuthService);
  private translateService: TranslateService = inject(TranslateService);
  private alertService: AlertService = inject(AlertService);
  private router: Router = inject(Router);
  constructor(private host: ElementRef<HTMLElement>) {}

  get email() {
    return this.form.get('email');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async submitMessageAlert(response: any) {
    const options = {
      message: 'FORGOTTEN_PASSWORD.SUCCESS.MESSAGE',
      // message: 'За някои функции на приложението ти е необходим профил. Влез на начален екран, за да се регистрираш или да влезеш в профила си от началния екран.',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.router.navigate(['/login']);
          },
        },
      ],
    };
    this.translateService.get(options.message).subscribe((str: string) => {
      options.message = str;
    });

    await this.alertService.presentAlert(
      '',
      '',
      response.message || options.message,
      options.buttons,
    );
  }
  async onSubmit() {
    const email = this.form.getRawValue().email;
    console.log('🚀 ~ ForgottenPage ~ onSubmit ~ email:', email);
    this.authService.forgottenPassword(email, this.form);
  }
}
