import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import { Signup } from '../../src/screens';
import store from '../../src/redux/store';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<Signup />', () => {
  it('Render Signup', () => {
    const SignupScreen = render(
      <Provider store={store}>
        <Signup />
      </Provider>
    );
    expect(SignupScreen.toJSON()).toMatchSnapshot();
  });
});
