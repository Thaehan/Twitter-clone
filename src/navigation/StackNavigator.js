import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  LOGIN,
  SIGN_UP,
  SIGN_UP_INFORMATION,
  TAB,
} from '../constants/ScreenName';

import {
  Login,
  Signup,
  SignupInfo,
} from '../screens/index';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Group>
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
      </Stack.Group>
      <Stack.Group>
        <Stack.Screen
          name={TAB}
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
