import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class SuccessPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
