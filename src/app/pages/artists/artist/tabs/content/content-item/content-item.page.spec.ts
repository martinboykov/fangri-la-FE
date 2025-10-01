import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentItemPage } from './content-item.page';

describe('ContentItemPage', () => {
  let component: ContentItemPage;
  let fixture: ComponentFixture<ContentItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
