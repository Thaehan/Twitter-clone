import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { Message } from '../../src/screens';
import store from '../../src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<Message />', () => {
  it('Render Message', () => {
    const Stack = createNativeStackNavigator();
    const MessageScreen = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              component={Message}
              name={'Message'}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
    expect(MessageScreen.toJSON()).toMatchSnapshot();
  });
});
