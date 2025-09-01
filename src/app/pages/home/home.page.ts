import { Component } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [SharedModule],
})
export class HomePage {
  constructor() {}
}
