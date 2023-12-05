import React, {useRef, useState} from 'react';
import {ActivityIndicator, AppState} from 'react-native';
import {Div} from 'react-native-magnus';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './bottom-tabs/bottom-tabs';

export default function AppNavigation() {
  return (
    <>
      <NavigationContainer>
        <BottomTabNavigator />
      </NavigationContainer>
    </>
  );
}
