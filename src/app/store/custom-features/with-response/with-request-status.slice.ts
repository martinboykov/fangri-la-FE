import { HttpErrorResponse } from '@angular/common/http';

export type RequestStatus =
  | 'idle'
  | 'pending'
  | 'fulfilled'
  | 'error';

export interface RequestStatusSlice {
  requestStatus: RequestStatus;
}

export const initialRequestStatusSlice: RequestStatusSlice = {
  requestStatus: 'idle',
};
