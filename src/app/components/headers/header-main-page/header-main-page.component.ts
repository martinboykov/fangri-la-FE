import { Component, computed, inject, input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoleEnum } from 'src/app/models/auth.model';
import { CartStore } from 'src/app/pages/cart/store/cart.store';
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
  readonly cartStore = inject(CartStore);
  readonly authService = inject(AuthService);
  private router = inject(Router);
  parentPage = input<string>();
  contentId = computed(() => 'main-content' + '-' + this.parentPage());
  cartItems = [];
  UserRoleEnum = UserRoleEnum;
  constructor() {}

  ngOnInit() {}
  goHome() {
    if (this.authStore.user()?.role === UserRoleEnum.USER) {
      this.router.navigate(['/artists/list']);
    } else {
      this.router.navigate([`/artists/` + this.authStore.user()?.id]);
    }
  }
  logout() {
    this.authService.logout();
  }
}
