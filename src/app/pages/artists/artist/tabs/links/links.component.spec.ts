import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ArtistTabLinksComponent } from './links.component';

describe('ArtistTabLinksComponent', () => {
  let component: ArtistTabLinksComponent;
  let fixture: ComponentFixture<ArtistTabLinksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ArtistTabLinksComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistTabLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
