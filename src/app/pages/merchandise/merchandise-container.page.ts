import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-merchandise-container',
  templateUrl: './merchandise-container.page.html',
  styleUrls: ['./merchandise-container.page.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class MerchandiseContainerPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
