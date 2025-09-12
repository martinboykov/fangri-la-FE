import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VaultItemPage } from './vault-item.page';

describe('VaultItemPage', () => {
  let component: VaultItemPage;
  let fixture: ComponentFixture<VaultItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
