import { Component, EventEmitter, inject, input, OnInit, Output, Signal } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';
import { Location } from '@angular/common';
import { AppStore } from 'src/app/store/app.store';
import { SearchComponent } from '../../search/search.component';
@Component({
  selector: 'app-header-inner-page',
  templateUrl: './header-inner-page.component.html',
  styleUrls: ['./header-inner-page.component.scss'],
  standalone: true,

  imports: [SharedModule, SearchComponent],
})
export class HeaderInnerPageComponent implements OnInit {
  private location: Location = inject(Location);
  title = input.required<string>();
  defaultHref = input<string>();
  isScrolled = input<boolean>(false);
  isFilter = input<boolean>(false);
  isTabsPage = input<boolean>(false);
  @Output() newSearchEvent = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  goBack() {
    if (this.location.back() !== undefined) {
      this.location.back();
    } else if (this.defaultHref() !== undefined) {
      this.location.go(this.defaultHref() as string);
    } else {
      this.location.go('/tabs/home');
    }
  }
  onSearch(value: string) {
    this.newSearchEvent.emit(value);
  }
}
