import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { HeaderInnerPageComponent } from 'src/app/components/headers/header-inner-page/header-inner-page.component';
import { CartStore } from '../store/cart.store';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
  standalone: true,
  imports: [SharedModule, HeaderInnerPageComponent],
})
export class CartPage implements OnInit {
  readonly cartStore = inject(CartStore);
  readonly currency = environment.currency;

  constructor() {}

  ngOnInit() {}
}
