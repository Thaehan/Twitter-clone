import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  FEED,
  MESSAGE,
  NOTIFICATION,
  SEARCH,
} from '../constants/ScreenName';
import {
  Feed,
  Message,
  Notification,
  Search,
} from '../screens';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={FEED} component={Feed} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen
        name={NOTIFICATION}
        component={Notification}
      />
      <Tab.Screen name={MESSAGE} component={Message} />
    </Tab.Navigator>
  );
}
