import React, {useRef, useState} from 'react';
import {ActivityIndicator, AppState} from 'react-native';
import {Div} from 'react-native-magnus';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './bottom-tabs/bottom-tabs';
import OnbordingStack from '../screens/onboarding-screens/stack';
import AuthNavigator from '../screens/auth-screens/stack';

export default function AppNavigation() {
  return (
    <>
      <NavigationContainer>
        {/* <AuthNavigator /> */}
        {/* <OnbordingStack /> */}
        <BottomTabNavigator />
      </NavigationContainer>
    </>
  );
}
