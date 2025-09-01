import { PartialStateUpdater } from '@ngrx/signals';
import { LoadingSlice } from './with-loading.slice';

export function presentLoading(): PartialStateUpdater<LoadingSlice> {
  return (_) => ({ isLoading: true });
}

export function dismissLoading(): PartialStateUpdater<LoadingSlice> {
  return (_) => ({ isLoading: false });
}

export function toggleLoading(): PartialStateUpdater<LoadingSlice> {
  return (state) => ({ isLoading: !state.isLoading });
}
