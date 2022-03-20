import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import React, { useState } from 'react';

import { logo } from '../constants/ImageAssets';
import PrimaryButton from '../components/button/PrimaryButton';
import SecondaryButton from '../components/button/SecondaryButton';
import { CONTAINER_STYLES } from '../styles/Style';
import Statusbar from '../components/functional/Statusbar';
import { HOME, SIGN_UP } from '../constants/ScreenName';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandle = () => {
    console.log(username, password);
    setUsername('');
    setPassword('');
    navigation.navigate(HOME, {});
  };

  const forgotHandle = () => {
    console.log('FORGOT PASSWORD');
  };

  const signupHandle = () => {
    setUsername('');
    setPassword('');
    navigation.navigate(SIGN_UP, {});
  };

  return (
    <View style={CONTAINER_STYLES.container}>
      <Statusbar />
      <Image source={logo} style={styles.image} />
      <Text style={styles.title}>Login to Twitter</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor="#BDBDBD"
        autoFocus
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor="#BDBDBD"
        secureTextEntry={true}
      />
      <View style={styles.buttonContainer}>
        <SecondaryButton
          title="Forgot your password?"
          onPress={forgotHandle}
        />
      </View>
      <PrimaryButton
        title="Login"
        onPress={loginHandle}
        style={styles.forgotButton}
      />
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Do not have an account?
        </Text>
        <SecondaryButton
          title="Sign up"
          onPress={signupHandle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 16,
    fontWeight: '500',
    marginBottom: 20,
  },
  signupContainer: {
    marginTop: 20,
    marginLeft: 59,
    flexDirection: 'row',
  },
  image: {
    marginBottom: 66,
    marginLeft: 147,
    height: 80,
    width: 80,
  },
  textInput: {
    width: '90%',
    height: 40,
    paddingLeft: 16,
    marginBottom: 20,
    fontSize: 16,
    marginLeft: 16,
    backgroundColor: '#F6F6F6',
    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 8,
  },
  signupText: {
    fontWeight: '400',
    marginLeft: 15,
    marginRight: 8,
  },
});
