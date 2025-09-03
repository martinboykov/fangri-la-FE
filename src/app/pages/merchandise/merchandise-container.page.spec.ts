import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchandiseContainerPage } from './merchandise-container.page';

describe('MerchandiseContainerPage', () => {
  let component: MerchandiseContainerPage;
  let fixture: ComponentFixture<MerchandiseContainerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandiseContainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
