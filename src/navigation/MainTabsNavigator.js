import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useRef, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  CONVERSATION,
  FEED,
  MESSAGE,
  NOTIFICATION,
  SEARCH,
  MESSAGESTACK,
  SEARCHSTACK,
  NOTIFICATIONSTACK,
  FEEDSTACK,
  TWEET_DETAIL,
  NEW_CONVERSATION,
  PROFILE,
  TWEET_POST,
  SETTINGS,
  COMMENT_POST,
} from '../constants/ScreenName.js';
import {
  Feed,
  Message,
  Notification,
  Conversation,
  Search,
  TweetDetail,
  Profile,
  TweetPost,
  NewConversation,
  Settings,
  CommentPost,
} from '../screens/index.js';
import {
  NAVBAR_HEIGHT,
  SCREEN_WIDTH,
  HEADER_HEIGHT,
  MAIN_COLOR,
} from '../styles/Style.js';

const MainTabs = createBottomTabNavigator();
const FeedStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const NotificationStack = createNativeStackNavigator();
const MessageStack = createNativeStackNavigator();

const animationConfig = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function MainTabsNavigator() {
  return (
    <MainTabs.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: 'black',
        tabBarActiveTintColor: MAIN_COLOR,
      }}
    >
      <MainTabs.Screen
        name={FEEDSTACK}
        component={FeedStackScreen}
        options={{
          tabBarIcon: ({ color, size = 30 }) => {
            return (
              <Ionicons
                name="home-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <MainTabs.Screen
        name={SEARCHSTACK}
        component={SearchStackScreen}
        options={{
          tabBarIcon: ({ color, size = 30 }) => {
            return (
              <Ionicons
                name="search-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <MainTabs.Screen
        name={NOTIFICATIONSTACK}
        component={NotificationStackScreen}
        options={{
          tabBarIcon: ({ color, size = 30 }) => {
            return (
              <Ionicons
                name="notifications-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
      <MainTabs.Screen
        name={MESSAGESTACK}
        component={MessageStackScreen}
        options={{
          tabBarIcon: ({ color, size = 30 }) => {
            return (
              <Ionicons
                name="mail-outline"
                color={color}
                size={size}
              />
            );
          },
        }}
      />
    </MainTabs.Navigator>
  );
}

function FeedStackScreen() {
  return (
    <FeedStack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerStyle: [styles.headerBarStyle],
        headerShadowVisible: false,
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        transitionSpec: {
          open: animationConfig,
          close: animationConfig,
        },
      }}
    >
      <FeedStack.Screen name={FEED} component={Feed} />
      <FeedStack.Screen
        name={PROFILE}
        component={Profile}
      />
      <FeedStack.Screen
        name={TWEET_DETAIL}
        component={TweetDetail}
      />
      <FeedStack.Screen
        name={TWEET_POST}
        component={TweetPost}
      />
      <FeedStack.Screen
        name={SETTINGS}
        component={Settings}
      />
      <FeedStack.Screen
        name={COMMENT_POST}
        component={CommentPost}
      />
    </FeedStack.Navigator>
  );
}

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerStyle: [styles.headerBarStyle],
        gestureEnabled: true,
      }}
    >
      <SearchStack.Screen
        name={SEARCH}
        component={Search}
        options={{
          headerShown: false,
        }}
      />

      <SearchStack.Screen
        name={PROFILE}
        component={Profile}
      />
      <SearchStack.Screen
        name={COMMENT_POST}
        component={CommentPost}
      />
    </SearchStack.Navigator>
  );
}

function NotificationStackScreen() {
  return (
    <NotificationStack.Navigator
      screenOptions={{
        headerStyle: [styles.headerBarStyle],
        headerShadowVisible: false,
        gestureEnabled: true,
      }}
    >
      <NotificationStack.Screen
        name={NOTIFICATION}
        component={Notification}
      />
      <NotificationStack.Screen
        name={SETTINGS}
        component={Settings}
      />
      <NotificationStack.Screen
        name={PROFILE}
        component={Profile}
      />
    </NotificationStack.Navigator>
  );
}

function MessageStackScreen() {
  return (
    <MessageStack.Navigator
      screenOptions={{
        headerStyle: [styles.headerBarStyle],
        headerShadowVisible: false,
        gestureEnabled: true,
      }}
    >
      <MessageStack.Screen
        name={MESSAGE}
        component={Message}
      />
      <MessageStack.Screen
        name={NEW_CONVERSATION}
        component={NewConversation}
      />
      <MessageStack.Screen
        name={CONVERSATION}
        component={Conversation}
      />
      <SearchStack.Screen
        name={PROFILE}
        component={Profile}
      />
      <MessageStack.Screen
        name={SETTINGS}
        component={Settings}
      />
    </MessageStack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerBarStyle: {
    height: HEADER_HEIGHT,
  },
  headerContainer: {
    backgroundColor: 'white',
    height: HEADER_HEIGHT,
  },
  leftHeader: {
    width: 60,
  },
  rightHeader: {
    width: 60,
  },
  tabBarStyle: {
    height: NAVBAR_HEIGHT,
    justifyContent: 'space-around',
    width: SCREEN_WIDTH,
  },
});
