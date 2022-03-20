import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  LOGIN,
  SIGN_UP,
  SIGN_UP_INFORMATION,
  HOME,
} from './constants/ScreenName';

import {
  Login,
  Signup,
  Home,
  SignupInfo,
} from './screens/index';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={LOGIN}
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SIGN_UP}
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={SIGN_UP_INFORMATION}
          component={SignupInfo}
        />
        <Stack.Screen name={HOME} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return <MyStack />;
}

export default App;
