import {APIMode} from '../providers/api/types';
import {useMainStore} from '../store/core/useStore';
import {ProductDetail} from '../store/product/productDetail';
import {Product} from '../store/product/productList';
import log from '../utils/logs';
import useApi from './useApi';

export const useProduct = () => {
  const {makeApiCall} = useApi();

  const {setProducts, setCurrentProduct} = useMainStore(
    store => store.productActions,
  );
  const {allProducts, selectedProduct} = useMainStore(
    store => store.productStore,
  );

  const getProductDetails = async (
    productId: string,
  ): Promise<ProductDetail[] | undefined> => {
    log.info('getting products');
    log.info(
      'making api call prodcuts details ',
      selectedProduct.length,
      productId,
    );
    if (selectedProduct.length > 0) {
      console.log('found selected prodcuct', productId);
      return selectedProduct;
    }
    try {
      const {data} = await makeApiCall('/product', APIMode.GET);
      const products: ProductDetail[] = data.data.product;
      setCurrentProduct(products);
      return products;
    } catch (e) {
      log.error('error', JSON.stringify(e));
    }
  };
  const getAllProducts = async (): Promise<Product[] | undefined> => {
    log.info('getting products');
    log.info('making api call all prodcuts', allProducts.length);
    if (allProducts.length > 0) {
      return allProducts;
    }
    try {
      const {data} = await makeApiCall('/product-list-lite', APIMode.GET);
      const products: Product[] = data.data.products.items;
      setProducts(products);
      return products;
    } catch (e) {
      log.error('error', JSON.stringify(e));
    }
  };
  return {
    getAllProducts,
    getProductDetails,
  };
};
