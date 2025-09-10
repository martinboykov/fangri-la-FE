import { PartialStateUpdater } from '@ngrx/signals';
import { Merchandise, MerchandiseSlice } from './merchandise.slice';
import { AppointmentDay, CalendarDay } from 'src/app/models/calendar.model';

export function getById(merchId: string) {
  return (store: MerchandiseSlice) =>
    store.items.find((item: Merchandise) => item.id === merchId);
}
