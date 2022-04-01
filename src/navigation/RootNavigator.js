import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabsNavigator from './MainTabsNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import { LoginContext } from '../context/LoginContext';

const RootStack = createNativeStackNavigator();

export default function RootNavigator() {
  const loginContext = useContext(LoginContext);

  return (
    <NavigationContainer>
      {loginContext.isLoggedIn ? (
        <MainTabsNavigator />
      ) : (
        <AuthStackNavigator />
      )}
    </NavigationContainer>
    // <View style={styles.container}>
    //   <Button
    //     title={
    //       loginContext.isLoggedIn ? 'Logged in' : "I'm out"
    //     }
    //     color="black"
    //     onPress={loginContext.loginHandle}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
