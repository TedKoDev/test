import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Homescreen from './screens/homescreen';
import Detailscreen from './screens/detailscreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import AppNavigation from './navigators/app-navigation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <React.Fragment>
      <SafeAreaProvider>
        <AppNavigation />
      </SafeAreaProvider>
    </React.Fragment>
  );
};

export default App;
