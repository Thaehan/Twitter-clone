import { NavigationContainer } from '@react-navigation/native';
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
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
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
      <Stack.Screen name={TAB} component={TabNavigation} />
    </Stack.Navigator>
  );
}
