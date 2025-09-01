import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';
import { IError, IMessage } from 'src/app/models/response.model';

interface AlertButton {
  text: string;
  cssClass?: string;
  handler?: () => void;
}
@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(
    private alertCtrl: AlertController,
    private translateService: TranslateService,
  ) {}

  async presentAlert(
    header = '',
    subHeader = '',
    message: string,
    buttons: AlertButton[] = [],
    cssClasses: Array<string> = ['alert-custom'],
    backdropDismiss = false,
  ) {
    const alertCtrl = await this.alertCtrl.create({
      mode: 'ios',
      cssClass: [...cssClasses],
      backdropDismiss,
      header,
      subHeader,
      message,
      buttons,
    });
    await alertCtrl.present();
    return alertCtrl;
  }

  getAlertMessage = (
    messageConstants?: IMessage,
    messageResponse?: IMessage,
  ) => {
    let message: IMessage = {
      title: messageConstants?.title
        ? this.translateService.instant(messageConstants?.title as string)
        : '',
      subtitle: messageConstants?.subtitle
        ? this.translateService.instant(messageConstants?.subtitle as string)
        : '',
    };
    if (messageResponse?.title || messageResponse?.subtitle)
      message = { title: '', subtitle: '' };
    if (messageResponse?.title) message.title = messageResponse.title;
    if (messageResponse?.subtitle) message.subtitle = messageResponse.subtitle;
    console.log('🚀 ~ AlertService ~ message:', message);
    return {
      ...message,
    };
  };
  getAlertButtonsTranslations = (
    buttonsConstants: { text: string; handler?: () => void }[],
  ) => {
    return buttonsConstants.map((button) => ({
      ...button,
      text: this.translateService.instant(button.text),
    }));
  };
  getDefaultAlertButton = (fn?: any) => [
    { text: this.translateService.instant('CONSTANTS.CLOSE'), handler: fn },
  ];
  presentAlertMessage = (message: IMessage, buttons: any) => {
    const options = {
      backdropDismiss: false,
      header: message?.title ? message?.title : '',
      message: message?.subtitle ? message?.subtitle : '',
      buttons: [...buttons],
    };
    return this.presentAlert(
      options.header,
      '',
      options.message,
      options.buttons,
      [],
      true,
    );
  };
  presentDefaultAlertErrorMessage = (error: IError) => {
    const message = this.getAlertMessage(
      {
        title: 'CONSTANTS.ERRORS.FAILURE.TITLE',
        subtitle: 'CONSTANTS.ERRORS.FAILURE.SUBTITLE',
      },
      error?.error?.message,
    );
    const buttons = [
      {
        text: this.translateService.instant('CONSTANTS.CLOSE'),
      },
    ];
    const options = {
      backdropDismiss: false,
      header: message?.title ? message?.title : '',
      message: message?.subtitle ? message?.subtitle : '',
      buttons: [...buttons],
    };
    return this.presentAlert(
      options.header,
      '',
      options.message,
      options.buttons,
      [],
      true,
    );
  };
}
