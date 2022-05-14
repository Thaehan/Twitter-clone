import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { Notification } from '../../src/screens';
import store from '../../src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<Notification />', () => {
  it('Render Notification', () => {
    const Stack = createNativeStackNavigator();
    const NotificationScreen = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              component={Notification}
              name={'Notification'}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
    expect(NotificationScreen.toJSON()).toMatchSnapshot();
  });
});
