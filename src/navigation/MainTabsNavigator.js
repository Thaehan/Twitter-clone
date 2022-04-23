import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  FEED,
  MESSAGE,
  NOTIFICATION,
  SEARCH,
  MESSAGESTACK,
  SEARCHSTACK,
  NOTIFICATIONSTACK,
  FEEDSTACK,
  TWEET_DETAIL,
  PROFILE,
} from '../constants/ScreenName.js';
import {
  Feed,
  Message,
  Notification,
  Search,
  CurrentProfile,
  OtherProfile,
  TweetDetail,
  Profile,
} from '../screens/index.js';
import {
  NAVBAR_HEIGHT,
  SCREEN_WIDTH,
  HEADER_HEIGHT,
  MAIN_COLOR,
} from '../styles/Style.js';
import IconButton from '../components/button/IconButton.js';
import AvatarButton from '../components/button/AvatarButton';

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
  const user = useSelector((state) => state.user);

  return (
    <FeedStack.Navigator
      screenOptions={{
        headerStyle: [styles.headerBarStyle],
        headerShadowVisible: false,
      }}
    >
      <FeedStack.Screen
        name={FEED}
        component={Feed}
        options={{
          headerLeft: () => {
            return (
              <AvatarButton
                style={styles.leftHeader}
                source={user.avatar}
                userId={user.userId}
                size={30}
              />
            );
          },
          headerRight: () => {
            return (
              <IconButton
                style={styles.rightHeader}
                type="font-awesome"
                icon="gear"
                color="black"
                size={30}
              />
            );
          },
          headerTitle: () => (
            <IconButton
              style={styles.centerHeader}
              type="entypo"
              icon="twitter"
              color={MAIN_COLOR}
              size={30}
            />
          ),
          headerTitleAlign: 'center',
        }}
      />

      <SearchStack.Screen
        name={PROFILE}
        component={Profile}
      />
      <FeedStack.Screen
        name={TWEET_DETAIL}
        component={TweetDetail}
      />
    </FeedStack.Navigator>
  );
}

function SearchStackScreen() {
  const [searchText, setSearchText] = useState('');

  return (
    <SearchStack.Navigator
      screenOptions={{
        headerStyle: [styles.headerBarStyle],
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

    </SearchStack.Navigator>
  );
}

function NotificationStackScreen() {
  const user = useSelector((state) => state.user);

  return (
    <NotificationStack.Navigator
      screenOptions={{
        headerStyle: [styles.headerBarStyle],
        headerShadowVisible: false,
      }}
    >
      <NotificationStack.Screen
        name={NOTIFICATION}
        component={Notification}
        options={{
          headerLeft: () => {
            return (
              <AvatarButton
                style={styles.leftHeader}
                source={user.avatar}
                userId={user.userId}
                size={30}
              />
            );
          },
          headerRight: () => {
            return (
              <IconButton
                style={styles.rightHeader}
                type="font-awesome"
                icon="gear"
                color="black"
                size={30}
              />
            );
          },
          headerTitle: 'Notification',
          headerTitleAlign: 'center',
        }}
      />
    </NotificationStack.Navigator>
  );
}

function MessageStackScreen() {
  const user = useSelector((state) => state.user);

  return (
    <MessageStack.Navigator
      screenOptions={{
        headerStyle: [styles.headerBarStyle],
        headerShadowVisible: false,
      }}
    >
      <MessageStack.Screen
        name={MESSAGE}
        component={Message}
        options={{
          headerLeft: () => {
            return (
              <AvatarButton
                style={styles.leftHeader}
                source={user.avatar}
                userId={user.userId}
                size={30}
              />
            );
          },
          headerRight: () => {
            return (
              <IconButton
                style={styles.rightHeader}
                type="font-awesome"
                icon="gear"
                color="black"
                size={30}
              />
            );
          },
          headerTitle: 'Message',
          headerTitleAlign: 'center',
        }}
      />

      <SearchStack.Screen
        name={PROFILE}
        component={Profile}
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
