import { Schedule } from './schedule.model';

export enum CalendarTypeEnum {
  APPOINTMENTS = 'appointments',
  CONSULTATIONS = 'consultations',
  SCHEDULE = 'schedule',
}

export interface CalendarDay {
  id: string;
  date: string;
}
export interface AppointmentDay extends CalendarDay {
  freeHours: string[];
}
export interface ScheduleDay extends CalendarDay {
  appointments: Schedule[];
}
