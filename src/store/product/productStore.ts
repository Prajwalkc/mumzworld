import {ProductDetail} from './productDetail';
import {type Product} from './productList';

export interface IProductActionsStore {
  setCurrentProduct: (product: ProductDetail[]) => void;
  setProducts: (products: Product[]) => void;
  clearProduct: () => void;
}

export interface IProductStateStore {
  selectedProduct: ProductDetail[];
  allProducts: Product[];
}

const initailProduct: any = {};

export const initProductState: IProductStateStore = {
  selectedProduct: initailProduct,
  allProducts: [],
};

export const initialProductActions = (
  set: any,
  get: any,
): IProductActionsStore => {
  return {
    clearProduct: () => {
      set({
        productStore: {
          selectedProduct: initailProduct,
          allProducts: [],
        },
      });
    },
    setProducts: (products: Product[]) => {
      set({
        productStore: {
          ...get().productStore,
          allProducts: products,
        },
      });
    },

    setCurrentProduct: (product: ProductDetail[]) => {
      set({
        productStore: {
          ...get().productStore,
          selectedProduct: product,
        },
      });
    },
  };
};
