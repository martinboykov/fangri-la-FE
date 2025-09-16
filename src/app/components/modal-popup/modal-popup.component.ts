import { Component, inject, input, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { ModalController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal-popup',
  templateUrl: './modal-popup.component.html',
  styleUrls: ['./modal-popup.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class ModalPopupComponent implements OnInit {
  private modalController = inject(ModalController);
  readonly content = input.required<string>();
  constructor() {}

  ngOnInit() {}
  dismissModal() {
    this.modalController.dismiss();
  }
}
