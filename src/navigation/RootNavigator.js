import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

import MainTabsNavigator from './MainTabsNavigator';
import AuthStackNavigator from './AuthStackNavigator';

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  const user = useSelector((state) => state.user);

  return (
    <NavigationContainer>
      {user.isLoading ? (
        <AuthStackNavigator />
      ) : (
        <MainTabsNavigator />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
