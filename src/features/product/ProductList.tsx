/* eslint-disable react-hooks/exhaustive-deps */
import {FlashList} from '@shopify/flash-list';
import React, {ReactNode, useEffect, useRef, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Text from '../../component/core/Text';
import View from '../../component/core/View';
import SearchBar, {ISearchBar} from '../../component/SearchBar';
import useIntl from '../../hooks/useIntl';
import {useProduct} from '../../hooks/useProduct';
import {useAppNavigator} from '../../navigator/utils';
import {Product} from '../../store/product/productList';
import colors from '../../themes/colors';
import ProductItem from './ProductItem';
import {mapProductToItemViewModel} from './utils';

const ProductList: React.FC = () => {
  const {getAllProducts} = useProduct();
  const mainProductList = useRef<Product[]>();
  const [products, setProducts] = useState<Product[]>([]);
  const searchRef = useRef<ISearchBar | any>();

  const {navigate} = useAppNavigator();

  const {translate} = useIntl();

  useEffect(() => {
    const init = async () => {
      const response = await getAllProducts();
      if (response) {
        setProducts(response);
        mainProductList.current = response;
      }
    };
    init();
  }, []);

  const renderAllProducts = (): ReactNode => {
    return (
      <FlashList
        data={products}
        renderItem={({item, index}) => {
          const viewModel = mapProductToItemViewModel(item);
          return (
            <ProductItem
              onProductSelected={() => {
                navigate('ProductDetails');
              }}
              key={index}
              item={viewModel}
            />
          );
        }}
        estimatedItemSize={100}
      />
    );
  };

  return (
    <SafeAreaView style={styles.mainView}>
      {/* <CustomNavigationHeader headerTitleView={<View />} showBackIcon={false} /> */}
      <View testID={''} style={styles.searchBarView}>
        <SearchBar
          ref={searchRef}
          onChangeSearchText={(text: string) => {
            const filteredList = mainProductList?.current?.filter(item =>
              item.name.match(text),
            );
            if (filteredList) {
              setProducts(filteredList);
            }
          }}
        />
      </View>
      {products.length === 0 ? (
        <View style={styles.noItemView}>
          <Text>
            {translate({
              id: 'noItems',
              defaultMessage: 'No items found! Please try again',
            })}
          </Text>
        </View>
      ) : (
        renderAllProducts()
      )}
    </SafeAreaView>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  noItemView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  searchBarView: {
    padding: 18,
  },
  imageStyle: {},
  textStyle: {
    color: colors.textPrimary,
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
  },
  headerStyle: {
    color: 'red',
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
  },
});
