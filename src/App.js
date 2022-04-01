import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { LoginProvider } from './context/LoginContext';

import RootNavigator from './navigation/RootNavigator';

export default function App() {
  return (
    <LoginProvider>
      <RootNavigator />
    </LoginProvider>
  );
}
