import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator';

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
