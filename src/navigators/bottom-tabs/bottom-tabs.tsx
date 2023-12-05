// Third Party Imports
import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useNavigationState} from '@react-navigation/native';

const Tabs = createBottomTabNavigator();

const BottomTabNavigator = () => {
  // state
  const [showPublishPostModal, setShowPublishPostModal] =
      useState<boolean>(false),
    [showPublishMarketListingModal, setShowPublishMarketListingModal] =
      useState<boolean>(false),
    [showPublishActions, setShowPublishActions] = useState<boolean>(false);

  // 하단 탭 네비게이터 반환 (Return Bottom Tab Navigator)

  const active =
    showPublishActions || showPublishPostModal || showPublishMarketListingModal;

  return (
    <>
      <Tabs.Navigator
        screenOptions={tabScreenOptions}
        initialRouteName={NAMES.HOME_TAB_STACK}>
        <Tabs.Screen
          name={NAMES.HOME_TAB_STACK}
          component={HomeStackNavigator}
          options={tabOptions(({focused}) => (
            <TabBarIcon
              focused={active ? false : focused}
              name="Home"
              title={t('home')}
            />
          ))}
        />
        <Tabs.Screen
          name={NAMES.MARKET_TAB_STACK}
          component={MarketStackNavigator}
          options={tabOptions(({focused}: {focused: boolean}) => (
            <TabBarIcon focused={focused} name="Market" title={t('market')} />
          ))}
        />
      </Tabs.Navigator>
    </>
  );
};

// 컴포넌트 내보내기 (Export Component)
export default BottomTabNavigator;
