import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';

import {
  FEED,
  MESSAGE,
  NOTIFICATION,
  SEARCH,
  MESSAGESTACK,
  SEARCHSTACK,
  NOTIFICATIONSTACK,
  FEEDSTACK,
} from '../constants/ScreenName.js';
import {
  Feed,
  Message,
  Notification,
  Search,
} from '../screens/index.js';
import {
  NAVBAR_HEIGHT,
  SCREEN_WIDTH,
  HEADER_HEIGHT,
} from '../styles/Style.js';
import MainHeader from '../components/functional/MainHeader';

const MainTabs = createBottomTabNavigator();
const FeedStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const MessageStack = createNativeStackNavigator();

export default function MainTabsNavigator() {
  return (
    <MainTabs.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
      }}
    >
      <MainTabs.Screen
        name={FEEDSTACK}
        component={FeedStackScreen}
      />
      <MainTabs.Screen
        name={SEARCHSTACK}
        component={SearchStackScreen}
      />
      <MainTabs.Screen
        name={NOTIFICATIONSTACK}
        component={NotificationStackScreen}
      />
      <MainTabs.Screen
        name={MESSAGESTACK}
        component={MessageStackScreen}
      />
    </MainTabs.Navigator>
  );
}

function FeedStackScreen() {
  return (
    <FeedStack.Navigator>
      <FeedStack.Screen
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
    </FeedStack.Navigator>
  );
}

function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <FeedStack.Screen
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
    </SearchStack.Navigator>
  );
}

function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator>
      <FeedStack.Screen
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
    </NotificationStack.Navigator>
  );
}

function MessageStackScreen() {
  return (
    <MessageStack.Navigator>
      <FeedStack.Screen
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
    </MessageStack.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    height: NAVBAR_HEIGHT,
    width: SCREEN_WIDTH,
  },
});
