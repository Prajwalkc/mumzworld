import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import ApiProvider from '../providers/api/ApiProvider';
import ProductNavigator from './ProductNavigator';

const MainNavigator = () => {
  const MainStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <ApiProvider>
        <MainStack.Navigator
          initialRouteName="Product"
          screenOptions={{
            headerShown: false,
          }}>
          <MainStack.Screen name="Product" component={ProductNavigator} />
        </MainStack.Navigator>
      </ApiProvider>
    </NavigationContainer>
  );
};

export default MainNavigator;
