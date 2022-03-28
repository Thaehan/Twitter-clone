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
import {
  CONTENT_SCREEN_HEIGHT,
  HEADER_HEIGHT,
  NAVBAR_HEIGHT,
  SCREEN_WIDTH,
} from '../styles/Style';
import MainHeader from '../components/functional/MainHeader';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: NAVBAR_HEIGHT,
          width: SCREEN_WIDTH,
        },
      }}
    >
      <Tab.Screen
        name={FEED}
        component={Feed}
        options={{
          headerTitle: (props) => (
            <MainHeader style={styles.headerContainer} />
          ),
          headerStyle: {
            height: HEADER_HEIGHT,
          },
        }}
      />
      <Tab.Screen
        name={SEARCH}
        component={Search}
        options={{
          headerTitle: (props) => (
            <MainHeader style={styles.headerContainer} />
          ),
          headerStyle: {
            height: HEADER_HEIGHT,
          },
        }}
      />
      <Tab.Screen
        name={NOTIFICATION}
        component={Notification}
        options={{
          headerTitle: (props) => (
            <MainHeader style={styles.headerContainer} />
          ),
          headerStyle: {
            height: HEADER_HEIGHT,
          },
        }}
      />
      <Tab.Screen
        name={MESSAGE}
        component={Message}
        options={{
          headerTitle: (props) => (
            <MainHeader style={styles.headerContainer} />
          ),
          headerStyle: {
            height: HEADER_HEIGHT,
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {},
});
