import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewContentPage } from './new-content.page';

describe('NewContentPage', () => {
  let component: NewContentPage;
  let fixture: ComponentFixture<NewContentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
