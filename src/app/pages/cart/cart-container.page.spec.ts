import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartContainerPage } from './cart-container.page';

describe('CartContainerPage', () => {
  let component: CartContainerPage;
  let fixture: ComponentFixture<CartContainerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartContainerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
