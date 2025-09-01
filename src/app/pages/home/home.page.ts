import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { SharedModule } from 'src/app/shared.module';
import {TranslatePipe, TranslateDirective} from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [SharedModule],
})
export class HomePage {
  constructor() {}
}
