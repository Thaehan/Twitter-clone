import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { Feed } from '../../src/screens';
import store from '../../src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<Feed />', () => {
  it('Render Feed', () => {
    const Stack = createNativeStackNavigator();
    const FeedScreen = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen component={Feed} name={'Feed'} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
    expect(FeedScreen.toJSON()).toMatchSnapshot();
  });
});
