import { Advice } from '../models/advice.model';
import { Expert } from '../models/expert.model';
import { Schedule } from '../models/schedule.model';

export interface AppSlice {
  readonly innerWidth: number;
  readonly isMobile: boolean;
  readonly isMobileWidth: boolean;
  readonly mobileBreakpoint: string;
  readonly isScrolled: boolean;
}

export const initialAppSlice = {

  innerWidth: window.innerWidth,
  isMobile: false,
  isMobileWidth: false,
  mobileBreakpoint: window
    .getComputedStyle(document.body)
    .getPropertyValue('--mobile'),
  isScrolled: false,
};
