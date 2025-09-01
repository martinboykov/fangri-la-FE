import { RequestStatusSlice } from './with-request-status.slice';

export function setPending(): RequestStatusSlice {
  return { requestStatus: 'pending' };
}

export function setFulfilled(): RequestStatusSlice {
  return { requestStatus: 'fulfilled' };
}

export function setError(): RequestStatusSlice {
  return { requestStatus: 'error' };
}
