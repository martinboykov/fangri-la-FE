import { TranslateService } from '@ngx-translate/core';
import { inject, Injectable } from '@angular/core';
import { AlertService } from '../modals/alert/alert.service';

@Injectable({ providedIn: 'root' })
export class HelperFunctions {
  public alertService: AlertService = inject(AlertService);
  public translateService = inject(TranslateService);
  constructor() {}

}
