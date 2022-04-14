import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';

import { logo } from '../../constants/ImageAssets';
import PrimaryButton from '../../components/button/PrimaryButton';
import TextButton from '../../components/button/TextButton';
import {
  GLOBAL_STYLES,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../styles/Style';
import {
  LOGIN,
  SIGN_UP_INFORMATION,
} from '../../constants/ScreenName';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerHandle = () => {
    console.log(email, password);
    setEmail('');
    setPassword('');
    navigation.navigate(SIGN_UP_INFORMATION, {
      email,
      password,
    });
  };

  const loginHandle = () => {
    navigation.navigate(LOGIN, {});
  };

  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        hidden={false}
        barStyle="dark-content"
      />
      <Image source={logo} style={styles.image} />
      <Text style={styles.title}>Sign up an account</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
        placeholder="Email"
        placeholderTextColor="#BDBDBD"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        style={styles.textInput}
        placeholder="Password"
        placeholderTextColor="#BDBDBD"
        secureTextEntry={true}
      />
      <PrimaryButton
        title="Register"
        onPress={registerHandle}
        style={styles.registerButton}
      />
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          Already got an account?
        </Text>
        <TextButton title="Login" onPress={loginHandle} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  title: {
    marginLeft: 30,
    fontWeight: '500',
    marginBottom: 20,
  },
  loginContainer: {
    marginTop: 20,
    marginLeft: 90,
    flexDirection: 'row',
  },
  image: {
    marginBottom: 66,
    marginLeft: 163,
    height: 88,
    width: 88,
  },
  textInput: {
    width: 350,
    height: 50,
    paddingLeft: 16,
    marginBottom: 20,
    fontSize: 16,
    marginLeft: 30,
    backgroundColor: '#f6f6f6',
    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 8,
  },
  loginText: {
    fontWeight: '400',
    marginLeft: 15,
    marginRight: 8,
  },
  registerButton: {
    marginLeft: 255,
    marginTop: 20,
  },
});
