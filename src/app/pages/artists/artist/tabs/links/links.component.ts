import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { ArtistStore } from '../../store/artist.store';

@Component({
  selector: 'app-artist-tab-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class ArtistTabLinksComponent implements OnInit {
  readonly artistStore = inject(ArtistStore);

  constructor() {}

  ngOnInit() {}
}
