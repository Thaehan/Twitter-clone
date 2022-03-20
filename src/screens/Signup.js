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

export default function Signup({ navigation }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerHandle = () => {
    console.log(username, email, password);
    setEmail('');
    setUsername('');
    setPassword('');
    navigation.navigate('SignupInfo', {
      username,
      email,
      password,
    });
  };

  const loginHandle = () => {
    navigation.navigate('Login', {});
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image} />
      <Text style={styles.title}>Sign up an account</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor="#BDBDBD"
        autoFocus
      />
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
        style={styles.forgotButton}
      />
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>
          Already got an account?
        </Text>
        <SecondaryButton
          title="Login"
          onPress={loginHandle}
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
  loginContainer: {
    marginTop: 20,
    marginLeft: 70,
    flexDirection: 'row',
  },
  container: {
    width: 375,
    height: 768,
    fontFamily: 'Open Sans',
    backgroundColor: 'white',
    fontSize: 16,
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
  loginText: {
    fontWeight: '400',
    marginLeft: 15,
    marginRight: 8,
  },
});
