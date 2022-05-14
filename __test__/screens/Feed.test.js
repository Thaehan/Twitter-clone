import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { Feed } from '../../src/screens';
import store from '../../src/redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { configureStore } from '@reduxjs/toolkit';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<Feed />', () => {
  const initialState = {
    userId: '001',
    email: 'thaehan0611@gmail.com',
    avatar: '',
    fullname: 'Do Dat',
    username: 'Thaehan',
    banner: '',
    bio: '',
    country: 'VietNam',
    dateCreated: '20/06/2020',
    dateOfBirth: '20/06/2000',
    liked: [],
    followers: [],
    following: [],
    isLoading: true,
  };
  const localStore = configureStore({
    user: initialState,
  });
  const Stack = createNativeStackNavigator();
  const FeedScreen = render(
    <Provider store={localStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={Feed} name={'Feed'} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
  it('Render Feed', () => {
    expect(FeedScreen.toJSON()).toMatchSnapshot();
  });

  it('Test Login', () => {
    expect(1).toBe(1);
  });
});
