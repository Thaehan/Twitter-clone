import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import store from '../../src/redux/store';
import PrimaryButton from '../../src/components/button/PrimaryButton';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<PrimaryButton />', () => {
  it('Render Primary Button', () => {
    const testComponent = render(<PrimaryButton />);
    expect(testComponent.toJSON()).toMatchSnapshot();
    // testComponent.getByTestId('AvatarImage').tobe();
  });
});
