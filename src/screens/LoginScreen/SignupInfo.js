import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { logo } from '../../constants/ImageAssets';
import IconButton from '../../components/button/IconButton';
import PrimaryButton from '../../components/button/PrimaryButton';
import {
  GLOBAL_STYLES,
  MAIN_COLOR,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../styles/Style';
import {
  createUser,
  getMultipleUsers,
} from '../../api/user';
import TextButton from '../../components/button/TextButton';
import { LOGIN, SIGN_UP } from '../../constants/ScreenName';
import { auth } from '../../firebase';
import moment from 'moment';

export default function SignupInfo({ navigation, route }) {
  const [showDatepicker, setShowDatePicker] =
    useState(false);
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date()
  );
  const [country, setCountry] = useState('');
  const { email, password } = route.params;

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowDatePicker(false);
    setDateOfBirth(currentDate);
  };

  const createHandle = () => {
    getMultipleUsers('username', '==', username)
      .then((docs) => {
        if (docs.length != 0) {
          alert('Username is already in use!');
        } else if (!username || !fullname || !country) {
          alert(
            'Please check the informations and fill it!!'
          );
        } else if (
          dateOfBirth.getDate() >= new Date().getDate()
        ) {
          alert('Date of birth is invalid!');
        } else {
          //Tạo tài khoản authorization
          //Tạo data user account =>
          // Quay lại trang Login
          createUserWithEmailAndPassword(
            auth,
            email,
            password
          )
            .then(() => {
              createUser(
                email,
                username,
                fullname,
                dateOfBirth,
                country
              )
                .then(() => {
                  navigation.navigate(LOGIN, {});
                  alert('Successfuly created an user!');
                })
                .catch((error) => {
                  alert('Error when create user');
                });
            })
            .catch((error) => {
              alert(error);
            });
        }
      })
      .catch((error) => {
        alert(error);
      });
  };

  const backHandle = () => {
    navigation.navigate(SIGN_UP, {});
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
      <Image source={logo} style={styles.image} />
      <TextInput
        value={username}
        onChangeText={setUsername}
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor="#BDBDBD"
      />
      <TextInput
        value={fullname}
        onChangeText={setFullname}
        style={styles.textInput}
        placeholder="Fullname"
        placeholderTextColor="#BDBDBD"
      />
      <View style={styles.dateContainer}>
        <IconButton
          type={'fontisto'}
          icon={'date'}
          color={'black'}
          onPress={() => setShowDatePicker(!showDatepicker)}
          style={styles.dateIcon}
        />
        <Text style={styles.dateText}>
          {moment(dateOfBirth).format('DD/MM/YYYY')}
        </Text>
      </View>
      {showDatepicker && (
        <DateTimePicker
          value={dateOfBirth}
          mode="date"
          is24Hour={true}
          onChange={onChangeDate}
        />
      )}
      <TextInput
        value={country}
        onChangeText={setCountry}
        style={styles.textInput}
        placeholder="Country"
        placeholderTextColor="#BDBDBD"
      />
      <PrimaryButton
        style={styles.button}
        title="Register"
        onPress={createHandle}
      />
      <TextButton
        color={MAIN_COLOR}
        style={styles.button}
        title="Go back to previous"
        onPress={backHandle}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
    marginTop: 5,
  },
  container: {
    flex: 2,
    paddingTop: 20,

    // height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
  },
  // eslint-disable-next-line react-native/no-color-literals
  dateContainer: {
    alignItems: 'center',
    backgroundColor: '#f6f6f6',
    borderColor: '#f8f8f8',
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',

    fontSize: 16,
    height: 50,
    marginBottom: 20,
    marginLeft: 30,
    paddingLeft: 16,
    width: 350,
  },
  dateIcon: {
    position: 'absolute',
    right: 20,
  },
  dateText: {
    fontSize: 15,
    left: 15,
    position: 'absolute',
  },
  image: {
    height: 88,
    marginBottom: 66,
    marginLeft: 163,
    width: 88,
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
});
