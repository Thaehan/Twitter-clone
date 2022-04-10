import React from 'react';
import { Provider } from 'react-redux';

import RootNavigator from './navigation/RootNavigator';
import TestScreen from './screens/TestScreen';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
    // <TestScreen />
  );
}
