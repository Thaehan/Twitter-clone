import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import React, { useState } from 'react';

import { LoginProvider } from './context/LoginContext';
import RootNavigator from './navigation/RootNavigator';
import app, {
  db,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  collection,
} from './firebase';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandle = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
        navigation.navigate('Welcome', {});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signupHandle = ({ navigation }) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    // <LoginProvider>
    //   <RootNavigator />
    // </LoginProvider>
    <View>
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
      />
      <Button title="login" onPress={loginHandle} />
      <Button title="signup" onPress={signupHandle} />
    </View>
  );
}

function Welcome() {
  return (
    <View>
      <Text>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
