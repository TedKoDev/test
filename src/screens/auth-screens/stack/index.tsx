import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {stackScreenOptions} from '~/navigators/navigator-options';
import NAMES from './names';
import {stackScreenOptions} from '../../../navigators/navigator-options';
import LoginScreen from '../childrens/login-screen';
import RegisterScreen from '../childrens/register-screen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name={NAMES.LOGIN_SCREEN} component={LoginScreen} />
      <Stack.Screen name={NAMES.REGISTER_SCREEN} component={RegisterScreen} />
    </Stack.Navigator>
  );
}
