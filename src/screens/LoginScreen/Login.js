import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';

import { logo } from '../../constants/ImageAssets';
import PrimaryButton from '../../components/button/PrimaryButton';
import SecondaryButton from '../../components/button/SecondaryButton';
import { GLOBAL_STYLES } from '../../styles/Style';
import Statusbar from '../../components/functional/Statusbar';
import { TAB, SIGN_UP } from '../../constants/ScreenName';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandle = () => {
    console.log(username, password);
    setUsername('');
    setPassword('');
    navigation.navigate(TAB, {});
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
    <View style={GLOBAL_STYLES.container}>
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
    marginLeft: 30,
    fontWeight: 500,
    marginBottom: 30,
  },
  signupContainer: {
    marginTop: 30,
    marginLeft: 85,
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
    borderColor: '#f8f8f8',
    borderWidth: 1,
    borderRadius: 8,
  },
  signupText: {
    fontWeight: 400,
    marginLeft: 15,
    marginRight: 8,
  },
});
