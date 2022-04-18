import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { logo } from '../../constants/ImageAssets';
import PrimaryButton from '../../components/button/PrimaryButton';
import TextButton from '../../components/button/TextButton';
import {
  GLOBAL_STYLES,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../styles/Style';
import { SIGN_UP } from '../../constants/ScreenName';
import { auth } from '../../firebase';
import { setUser } from '../../redux/userSlice';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const loginHandle = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const { email, uid, accessToken } =
          userCredential.user;
        dispatch(
          setUser({
            email,
            uid,
            accessToken,
          })
        );
      })
      .catch((error) => {
        alert('Email or password is wrong!');
      });
  };

  const forgotHandle = () => {
    console.log('FORGOT PASSWORD');
  };

  const signupHandle = () => {
    setEmail('');
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
  image: {
    height: 88,
    marginBottom: 66,
    marginLeft: 163,
    width: 88,
  },
  loginButton: {
    marginLeft: 271,
    marginTop: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    marginLeft: 85,
    marginTop: 30,
  },
  signupText: {
    fontWeight: '400',
    marginLeft: 15,
    marginRight: 8,
  },
  // eslint-disable-next-line react-native/no-color-literals
  textInput: {
    backgroundColor: '#f6f6f6',
    borderColor: '#f8f8f8',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    height: 50,
    marginBottom: 20,
    marginLeft: 30,
    paddingLeft: 16,
    width: 350,
  },
  title: {
    fontWeight: '500',
    marginBottom: 30,
    marginLeft: 30,
  },
});
