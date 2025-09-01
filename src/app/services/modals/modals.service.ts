import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalController } from '@ionic/angular/standalone';
@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  private _modals = new BehaviorSubject<HTMLIonModalElement[]>([]);
  private loadingCtrl: ModalController = inject(ModalController);

  constructor() {

  }

  get modals$() {
    return this._modals.asObservable();
  }
  get modals() {
    return this._modals.getValue();
  }

  get modalsCount() {
    return this._modals.getValue().length;
  }
  addModal(modal: HTMLIonModalElement) {
    if (this.getModalById(modal.id)) return;
    this._modals.next([...this._modals.getValue(), modal]);
    console.log(
      '🚀 ~ ModalsService ~ addModal ~ this._modals.getValue():',
      this._modals.getValue(),
    );
  }

  async presentModal(id: string) {
    const modal = this.getModalById(id);
    if (!modal) return;
    await modal.present();
  }
  async dismissModal(id: string) {
    const modal = this.getModalById(id);
    if (!modal) return;
    await modal.dismiss();
    this._modals.next([...this._modals.getValue().filter((m) => m.id !== id)]);
    console.log(
      '🚀 ~ ModalsService ~ dismissModal ~ this._modals.getValue():',
      this._modals.getValue(),
    );

  }
  getModalById(id: string) {
    const index = this._modals.getValue().findIndex((m) => m.id === id);
    const modal = this._modals.getValue()[index];
    return modal;
  }
}
