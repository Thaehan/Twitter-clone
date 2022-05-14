import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import store from '../../src/redux/store';
import CircleButton from '../../src/components/button/CircleButton';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<CircleButton />', () => {
  it('Render CircleButton', () => {
    const testComponent = render(<CircleButton />);
    expect(testComponent.toJSON()).toMatchSnapshot();
    // testComponent.getByTestId('AvatarImage').tobe();
  });
});
