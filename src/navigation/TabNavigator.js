import React from 'react';
import { StyleSheet } from 'react-native';
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
import { SCREEN_WIDTH } from '../styles/Style';
import MainHeader from '../components/functional/MainHeader';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={FEED}
        component={Feed}
        // options={{ headerTitle: (props) => <MainHeader /> }}
      />
      <Tab.Screen
        name={SEARCH}
        component={Search}
        // options={{ headerTitle: (props) => <MainHeader /> }}
      />
      <Tab.Screen
        name={NOTIFICATION}
        component={Notification}
        // options={{ headerTitle: (props) => <MainHeader /> }}
      />
      <Tab.Screen
        name={MESSAGE}
        component={Message}
        // options={{ headerTitle: (props) => <MainHeader /> }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 44,
    width: SCREEN_WIDTH,
  },
});
