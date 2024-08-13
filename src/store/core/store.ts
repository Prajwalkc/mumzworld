import {
  initialProductActions,
  initProductState,
  IProductActionsStore,
  IProductStateStore,
} from '../product/productStore';

export interface Store {
  productStore: IProductStateStore;
  productActions: IProductActionsStore;
  clearStore: () => void;
}

export const store = (set: any, get: any): Store => {
  return {
    productStore: initProductState,
    productActions: initialProductActions(set, get),
    clearStore: () => set(initialState(set, get), true),
  };
};

const initialState = (set: any, get: any): Store => {
  return {
    productStore: initProductState,
    productActions: initialProductActions(set, get),
    clearStore: () => set(initialState(set, get), true),
  };
};
