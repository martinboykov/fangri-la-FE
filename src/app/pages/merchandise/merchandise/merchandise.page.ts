import { Component, OnInit } from '@angular/core';
import { HeaderInnerPageComponent } from 'src/app/components/headers/header-inner-page/header-inner-page.component';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.page.html',
  styleUrls: ['./merchandise.page.scss'],
  standalone: true,
  imports: [SharedModule, HeaderInnerPageComponent],
})
export class MerchandisePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
