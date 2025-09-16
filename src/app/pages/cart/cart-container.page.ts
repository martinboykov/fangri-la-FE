import { Component, OnInit } from '@angular/core';
import { HeaderInnerPageComponent } from 'src/app/components/headers/header-inner-page/header-inner-page.component';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.page.html',
  styleUrls: ['./cart-container.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class CartContainerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
