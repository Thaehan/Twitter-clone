import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import store from '../../src/redux/store';
import AvatarButton from '../../src/components/button/AvatarButton';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<Login />', () => {
  it('Render avatarButton', () => {
    const testComponent = render(<AvatarButton />);
    expect(testComponent.toJSON()).toMatchSnapshot();
    // testComponent.getByTestId('AvatarImage').tobe();
  });
});
