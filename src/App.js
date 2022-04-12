import React from 'react';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';

import RootNavigator from './navigation/RootNavigator';
import store from './redux/store';
import TestDoc from './screens/TestDoc';

export default function App() {
  LogBox.ignoreLogs([
    "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  ]);
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
    // <TestDoc />
  );
}
