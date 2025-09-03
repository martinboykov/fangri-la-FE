import { Component, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoleEnum } from 'src/app/models/auth.model';
import { AuthService } from 'src/app/services/auth/auth.service';
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
  readonly authStore = inject(AuthStore);
  readonly authService = inject(AuthService);
  private router = inject(Router);
  cartItems = [];
  constructor() {}

  ngOnInit() {}
  goHome() {
    if (this.authStore.user()?.role === UserRoleEnum.USER) {
      this.router.navigate(['/artists/list']);
    } else {
      this.router.navigate([`/artist/` + this.authStore.user()?.id]);
    }
  }
  logout(){
    this.authService.logout();
  }
}
