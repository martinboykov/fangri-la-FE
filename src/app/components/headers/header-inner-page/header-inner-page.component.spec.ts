import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeaderInnerPageComponent } from './header-inner-page.component';

describe('HeaderInnerPageComponent', () => {
  let component: HeaderInnerPageComponent;
  let fixture: ComponentFixture<HeaderInnerPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HeaderInnerPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderInnerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
