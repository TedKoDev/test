import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {stackScreenOptions} from '../../../navigators/navigator-options';
import NAMES from './names';
import {OnbordingScreen} from '../childrens';

const Stack = createNativeStackNavigator();

export default function OnbordingStack() {
  return (
    <Stack.Navigator screenOptions={stackScreenOptions}>
      <Stack.Screen name={NAMES.ONBORDING_SCREEN} component={OnbordingScreen} />
    </Stack.Navigator>
  );
}
