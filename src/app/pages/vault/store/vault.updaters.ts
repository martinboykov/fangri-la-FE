import { PartialStateUpdater } from '@ngrx/signals';
import { VaultSlice } from './vault.slice';
import { Merchandise } from '../../merchandise/store/merchandise.slice';

export function getById(merchId: string) {
  return (store: VaultSlice) =>
    store.items.find((item: Merchandise) => item.id === merchId);
}
