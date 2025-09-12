import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VaultListPage } from './vault-list.page';

describe('VaultListPage', () => {
  let component: VaultListPage;
  let fixture: ComponentFixture<VaultListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
