import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MainSwiperComponent } from './main-swiper.component';

describe('MainSwiperComponent', () => {
  let component: MainSwiperComponent;
  let fixture: ComponentFixture<MainSwiperComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MainSwiperComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MainSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
