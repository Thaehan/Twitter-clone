import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import store from '../../src/redux/store';
import ToggleButton from '../../src/components/button/ToggleButton';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<ToggleButton />', () => {
  it('Render ToggleButton', () => {
    const testComponent = render(<ToggleButton />);
    expect(testComponent.toJSON()).toMatchSnapshot();
    // testComponent.getByTestId('AvatarImage').tobe();
  });
});
