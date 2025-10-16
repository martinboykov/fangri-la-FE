import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VaultExclusiveContentPage } from './vault-exclusive-content.page';

describe('VaultExclusiveContentPage', () => {
  let component: VaultExclusiveContentPage;
  let fixture: ComponentFixture<VaultExclusiveContentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VaultExclusiveContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
