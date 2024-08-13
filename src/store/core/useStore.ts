import {create} from 'zustand';

import {createJSONStorage, persist} from 'zustand/middleware';
import {zustandStorage} from './mmkv';
import {store, Store} from './store';

export const useMainStore = create<Store>()(
  persist(
    (set, get) => {
      return store(set, get);
    },
    {
      name: 'mumzworld-store',
      storage: createJSONStorage(() => zustandStorage),
      partialize: state =>
        Object.fromEntries(
          Object.entries(state).filter(
            ([key]) => !['productActions'].includes(key),
          ),
        ),
    },
  ),
);
