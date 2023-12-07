// Third Party Imports
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigationState} from '@react-navigation/native';
import NAMES from '../Routes/Index';
import Icon from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {Text, View} from 'react-native';

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  // state
  const [showPublishPostModal, setShowPublishPostModal] =
      useState<boolean>(false),
    [showPublishMarketListingModal, setShowPublishMarketListingModal] =
      useState<boolean>(false),
    [showPublishActions, setShowPublishActions] = useState<boolean>(false);

  const active =
    showPublishActions || showPublishPostModal || showPublishMarketListingModal;

  const FirstScreen = () => {
    return (
      <View>
        <Text>hello</Text>
      </View>
    );
  };
  const SecondScreen = () => {
    return (
      <View>
        <Text>SecondScreen</Text>
      </View>
    );
  };

  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="first"
        component={FirstScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="second"
        component={SecondScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default BottomTabNavigator;
