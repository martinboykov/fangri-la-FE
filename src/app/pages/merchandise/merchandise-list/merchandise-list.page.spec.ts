import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MerchandiseListPage } from './merchandise-list.page';

describe('MerchandiseListPage', () => {
  let component: MerchandiseListPage;
  let fixture: ComponentFixture<MerchandiseListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchandiseListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
