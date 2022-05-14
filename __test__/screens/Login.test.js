import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { Login } from '../../src/screens';
import store from '../../src/redux/store';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<Login />', () => {
  it('Render Login', () => {
    const loginScreen = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
    expect(loginScreen.toJSON()).toMatchSnapshot();
  });
});
