import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';

import { logo } from '../constants/ImagePath';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandle = () => {
    console.log(username, password);
    setUsername('');
    setPassword('');
    navigation.navigate('Home', {});
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.textInput}
        placeholder="Your Username..."
        placeholderTextColor="#ffffff"
        autoFocus
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.textInput}
        placeholder="Your Password..."
        placeholderTextColor="#ffffff"
        secureTextEntry={true}
      />
      <Button title="Login" onPress={loginHandle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    height: 50,
    width: 50,
  },
  textInput: {
    width: '30%',
    height: 40,
    paddingLeft: 10,
    fontSize: 15,
    fontFamily: 'Arial',
    margin: 15,
    backgroundColor: '#E8E8E8',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
});
