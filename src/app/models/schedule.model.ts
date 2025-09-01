export interface Schedule {
  id?: string; // when you are creating new appointment there is no id
  expertId?: string;
  clientId?: string;
  date: string; // Пон, 20 Юни • 8:00-8:30
  dateISOStart: string;
  dateISOEnd: string;
  img: string;
  name: string;
  description: string; // for client can be firm or way of payment
  goal?: string;
  googleMeetLink?: string;
}
