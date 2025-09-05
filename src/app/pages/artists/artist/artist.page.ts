import { Component, OnInit } from '@angular/core';
import { HeaderMainPageComponent } from 'src/app/components/headers/header-main-page/header-main-page.component';
import { SharedModule } from 'src/app/shared.module';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.page.html',
  styleUrls: ['./artist.page.scss'],
  standalone: true,
  imports: [SharedModule, HeaderMainPageComponent],
})
export class ArtistPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
