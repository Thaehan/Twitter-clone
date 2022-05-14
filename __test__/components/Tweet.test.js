import React from 'react';
// import renderer from 'react-test-renderer';\
import { render } from '@testing-library/react-native';
import { Provider } from 'react-redux';

import store from '../../src/redux/store';
import Tweet from '../../src/components/tweet/Tweet';
import { NavigationContainer } from '@react-navigation/native';

jest.useFakeTimers();
jest.mock(
  'react-native/Libraries/Animated/NativeAnimatedHelper'
);

describe('<Tweet />', () => {
  it('Render Tweet', () => {
    const testComponent = render(
      <NavigationContainer>
        <Provider store={store}>{/* <Tweet /> */}</Provider>
      </NavigationContainer>
    );
    expect(testComponent.toJSON()).toMatchSnapshot();
    // testComponent.getByTestId('AvatarImage').tobe();
  });
});
