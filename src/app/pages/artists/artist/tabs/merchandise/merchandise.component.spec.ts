import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArtistTabMerchandiseComponent } from './merchandise.component';

describe('ArtistTabMerchandiseComponent', () => {
  let component: ArtistTabMerchandiseComponent;
  let fixture: ComponentFixture<ArtistTabMerchandiseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ArtistTabMerchandiseComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistTabMerchandiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
