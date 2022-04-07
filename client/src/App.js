import React, { useState } from 'react';
import { View, StyleSheet, StatusBar, TextInput, Button } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigator from './navigation/RootNavigator';
import store from './redux/store';
import { createUser, getUser } from './api/user';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const buttonHandle = () => {
    createUser(username, password)
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  return (
        // <Provider store={store}>
    //   <RootNavigator />
    // </Provider>

    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        style={styles.textInput}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.textInput}
      />
      <Button title="Create user" onPress={buttonHandle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 50,
    backgroundColor: 'red',
  },
});

