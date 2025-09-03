import { Component, computed, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { AuthStore } from 'src/app/services/auth/store/auth.store';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LoadingService } from 'src/app/services/modals/loading/loading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nfc',
  templateUrl: './nfc.page.html',
  styleUrls: ['./nfc.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class NfcPage implements OnInit {
  private authService = inject(AuthService);
  private loadingService = inject(LoadingService);
  private router = inject(Router);
  readonly authStore = inject(AuthStore);

  isLoading = computed(() => this.loadingService.isLoading());
  url = computed(() => decodeURI(`${window.location.href}`));
  parser = document.createElement('a');
  path = computed(() => this.parser.pathname + this.parser.search);

  readonly merch = {
    name: 'Tour Skate Deck',
    description:
      'Limited edition skate deck designed by the Fangri-la Design Haus Team',
    image: '/assets/static/images/merch-1.jpg',
  };

  constructor() {
    this.parser.href = this.url();
    console.log('🚀 ~ authStore.user:', this.authStore.user());
    console.log('🚀 ~ NfcPage ~ isLoading:', this.isLoading());
    console.log(
      '🚀 ~ NfcPage ~ path:',
      this.parser.pathname + this.parser.search,
    );
  }

  ngOnInit() {}
}
