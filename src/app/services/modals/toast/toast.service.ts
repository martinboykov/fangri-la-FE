import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { closeOutline } from 'ionicons/icons';
@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(public toastController: ToastController) {
    addIcons({ closeOutline });
  }

  async presentToast({
    message,
    duration,
  }: {
    message: string;
    duration: number;
  }) {
    const toast = await this.toastController.create({
      message,
      duration: duration || 5000,
      color: 'success',
      position: 'top',
      buttons: [
        {
          icon: 'closeOutline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    toast.present();
  }

  async presentErrorToast({
    subtitle,
    title,
    duration,
  }: {
    subtitle: string;
    title: string;
    duration: number;
  }) {
    const toast = await this.toastController.create({
      header: title || '',
      message: subtitle,
      position: 'top',
      duration: duration || 50000,
      color: 'danger',
      swipeGesture:'vertical',
      mode: 'ios',
      translucent: true,
      buttons: [
        {
          icon: 'close-outline',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
      // cssClass: 'toast-error',
    });
    toast.present();
  }
}
