import { Component, inject, OnInit } from '@angular/core';
import { VaultStore } from '../store/vault.store';
import { SharedModule } from 'src/app/shared.module';
import { HeaderMainPageComponent } from 'src/app/components/headers/header-main-page/header-main-page.component';

@Component({
  selector: 'app-vault-list',
  templateUrl: './vault-list.page.html',
  styleUrls: ['./vault-list.page.scss'],
  standalone: true,
  imports: [SharedModule, HeaderMainPageComponent],
})
export class VaultListPage implements OnInit {
  readonly vaultStore = inject(VaultStore);
  constructor() {}

  ngOnInit() {}
}
