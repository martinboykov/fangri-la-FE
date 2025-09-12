import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-vault-container',
  templateUrl: './vault-container.page.html',
  styleUrls: ['./vault-container.page.scss'],
  standalone: true,
    imports: [SharedModule],
})
export class VaultContainerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
