import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Signup, SignupInfo } from '../screens';
import {
  LOGIN,
  SIGN_UP,
  SIGN_UP_INFORMATION,
} from '../constants/ScreenName';

const AuthStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <AuthStack.Screen name={LOGIN} component={Login} />
      <AuthStack.Screen name={SIGN_UP} component={Signup} />
      <AuthStack.Screen
        name={SIGN_UP_INFORMATION}
        component={SignupInfo}
      />
    </AuthStack.Navigator>
  );
}
