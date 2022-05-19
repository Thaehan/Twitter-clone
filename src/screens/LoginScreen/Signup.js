import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, { useState } from 'react';

import { logo } from '../../constants/ImageAssets';
import PrimaryButton from '../../components/button/PrimaryButton';
import TextButton from '../../components/button/TextButton';
import {
  GLOBAL_STYLES,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  MAIN_COLOR,
} from '../../styles/Style';
import {
  LOGIN,
  SIGN_UP_INFORMATION,
} from '../../constants/ScreenName';
import { getMultipleUsers } from '../../api/user';

export default function Signup({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const registerHandle = () => {
    getMultipleUsers('email', '==', email)
      .then((docs) => {
        if (docs.length == 0) {
          console.log('==0');
          if (validateEmail(email) && password.length > 8) {
            navigation.navigate(SIGN_UP_INFORMATION, {
              email,
              password,
            });
          } else {
            alert('Email is invalid or too short password');
          }
        } else {
          alert('Email is already in use!');
        }
      })
      .catch((error) => {
        alert('Error when checking users');
      });
  };

  const loginHandle = () => {
    navigation.navigate(LOGIN, { email, password });
  };

  return (
    <SafeAreaView
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <StatusBar
        animated={true}
        backgroundColor="#ffffff"
        hidden={false}
        barStyle="dark-content"
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={
            Platform.OS === 'ios' ? 'padding' : 'height'
          }
        >
          <Image source={logo} style={styles.image} />
          <Text style={styles.title}>
            Sign up an account
          </Text>
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
            <TextButton
              color={MAIN_COLOR}
              title="Login"
              onPress={loginHandle}
            />
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
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
  loginContainer: {
    flexDirection: 'row',
    marginLeft: 90,
    marginTop: 20,
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
  // eslint-disable-next-line react-native/no-color-literals
  textInput: {
    backgroundColor: '#f6f6f6',
    borderColor: '#e8e8e8',
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
    marginBottom: 20,
    marginLeft: 30,
  },
});
