import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProductDetails from '../features/product/ProductDetails';
import ProductList from '../features/product/ProductList';
import useIntl from '../hooks/useIntl';
const ProductStack = createNativeStackNavigator();
const ProductNavigator: React.FC = () => {
  const {translate} = useIntl();
  return (
    <ProductStack.Navigator
      initialRouteName={'ProductList'}
      screenOptions={{
        headerBackTitleVisible: false,

        headerTintColor: 'black',
      }}>
      <ProductStack.Screen
        options={{
          title: translate({
            defaultMessage: 'Product List',
            id: 'productList',
          }),
        }}
        name="ProductList"
        component={ProductList}
      />
      <ProductStack.Screen
        options={{
          title: translate({
            defaultMessage: 'Product Details',
            id: 'productDetails',
          }),
        }}
        name="ProductDetails"
        component={ProductDetails}
      />
    </ProductStack.Navigator>
  );
};

export default ProductNavigator;

// const styles = StyleSheet.create({});
