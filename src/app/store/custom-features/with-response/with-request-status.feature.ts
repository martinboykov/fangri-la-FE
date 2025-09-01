import { computed, effect } from '@angular/core';
import {
  patchState,
  SignalStoreFeature,
  signalStoreFeature,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import {
  initialRequestStatusSlice,
  RequestStatusSlice,
} from './with-request-status.slice';
import {
  setError,
  setFulfilled,
  setPending,
} from './with-request-status.updaters';
export function withRequestStatus(): SignalStoreFeature<
  {
    state: {};
    props: {};
    methods: {};
  },
  {
    state: RequestStatusSlice;
    props: {
    };
    methods: {
      setPending: () => void;
      setFulfilled: () => void;
      setError: () => void;
      resetRequestStatus: () => void;
    };
  }
>;
export function withRequestStatus() {
  return signalStoreFeature(
    withState<RequestStatusSlice>(initialRequestStatusSlice),
    withComputed(({ requestStatus }) => ({
      isPending: computed(() => requestStatus() === 'pending'),
      isFulfilled: computed(() => requestStatus() === 'fulfilled'),
      error: computed(() => requestStatus() === 'error'),
    })),
    withMethods((store) => {
      return {
        setPending: () => patchState(store, setPending()),
        setFulfilled: () => patchState(store, setFulfilled()),
        setError: () => patchState(store, setError()),
        resetRequestStatus: () => patchState(store, initialRequestStatusSlice),
      };
    }),
     withHooks((store) => {
      return {
        onInit: () => {
          effect(() => {
            console.log('withRequestStatus requestStatus()', store.requestStatus());


          });
        },
      };
    }),
  );
}
