import { Component, inject, OnInit } from '@angular/core';
import { HeaderInnerPageComponent } from 'src/app/components/headers/header-inner-page/header-inner-page.component';
import { SharedModule } from 'src/app/shared.module';
import { environment } from 'src/environments/environment';
import { MerchandiseStore } from '../store/merchandise.store';
import { MerchandiseStatusEnum } from '../store/merchandise.slice';

@Component({
  selector: 'app-merchandise-list',
  templateUrl: './merchandise-list.page.html',
  styleUrls: ['./merchandise-list.page.scss'],
  standalone: true,
  imports: [SharedModule, HeaderInnerPageComponent],
})
export class MerchandiseListPage implements OnInit {
  readonly merchandiseStore = inject(MerchandiseStore);
  MerchandiseStatusEnum = MerchandiseStatusEnum;

  currency = environment.currency;
  constructor() {}

  ngOnInit() {}
}
