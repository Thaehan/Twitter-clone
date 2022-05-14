import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { Search } from '../../src/screens';
import store from '../../src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<Search />', () => {
  it('Render Search', () => {
    const Stack = createNativeStackNavigator();
    const SearchScreen = render(
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              component={Search}
              name={'Search'}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
    expect(SearchScreen.toJSON()).toMatchSnapshot();
  });
});
