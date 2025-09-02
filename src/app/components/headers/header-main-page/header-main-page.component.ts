import { Component, inject, input, OnInit } from '@angular/core';
import { AuthStore } from 'src/app/services/auth/store/auth.store';
import { SharedModule } from 'src/app/shared.module';
@Component({
  selector: 'app-header-main-page',
  templateUrl: './header-main-page.component.html',
  styleUrls: ['./header-main-page.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class HeaderMainPageComponent implements OnInit {
  authStore = inject(AuthStore);

  constructor() {}

  ngOnInit() {}
}

