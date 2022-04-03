import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, { useContext, useState } from 'react';

import { logo } from '../../constants/ImageAssets';
import PrimaryButton from '../../components/button/PrimaryButton';
import TextButton from '../../components/button/TextButton';
import {
  GLOBAL_STYLES,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../styles/Style';
import { SIGN_UP } from '../../constants/ScreenName';
import { LoginContext } from '../../context/LoginContext';

export default function Login({ navigation }) {
  const loginContext = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const loginHandle = () => {
    console.log(username, password);
    setUsername('');
    setPassword('');
    loginContext.loginHandle();
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
      <Text style={styles.title}>Login to Twitter</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.textInput}
        placeholder="Username"
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
      <View style={styles.buttonContainer}>
        <TextButton
          title="Forgot your password?"
          onPress={forgotHandle}
        />
      </View>
      <PrimaryButton
        title="Login"
        onPress={loginHandle}
        style={styles.loginButton}
      />
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>
          Do not have an account?
        </Text>
        <TextButton
          title="Sign up"
          onPress={signupHandle}
        />
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
    fontWeight: '400',
    marginLeft: 15,
    marginRight: 8,
  },
  loginButton: {
    marginLeft: 271,
    marginTop: 20,
  },
});
