import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsContainerPage } from './artists-container.page';

describe('ArtistsContainerPage', () => {
  let component: ArtistsContainerPage;
  let fixture: ComponentFixture<ArtistsContainerPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(ArtistsContainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
