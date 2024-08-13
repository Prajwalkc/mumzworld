import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainNavigator from './src/navigator/MainNavigator';
const App = () => {
  return (
    <GestureHandlerRootView>
      <MainNavigator />
    </GestureHandlerRootView>
  );
};

export default App;
