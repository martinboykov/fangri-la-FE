import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VaultContainerPage } from './vault-container.page';

describe('VaultContainerPage', () => {
  let component: VaultContainerPage;
  let fixture: ComponentFixture<VaultContainerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultContainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
