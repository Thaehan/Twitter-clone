import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import store from '../../src/redux/store';
import UserItemButton from '../../src/components/button/UserItemButton';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<UserItemButton />', () => {
  it('Render UserItemButton', () => {
    const testComponent = render(<UserItemButton />);
    expect(testComponent.toJSON()).toMatchSnapshot();
    // testComponent.getByTestId('AvatarImage').tobe();
  });
});
