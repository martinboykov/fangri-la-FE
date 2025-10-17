import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { CartStore } from '../store/cart.store';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class SuccessPage implements OnInit {
  readonly cartStore = inject(CartStore);
  constructor() {
    this.cartStore.clearCart();
  }

  ngOnInit() {}
}
