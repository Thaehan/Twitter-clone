/* eslint-disable react-native/no-raw-text */
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import moment from 'moment';
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  signOut,
  updatePassword,
  updateEmail,
} from 'firebase/auth';
import DateTimePicker from '@react-native-community/datetimepicker';
import Dialog from 'react-native-dialog';
import { Timestamp } from 'firebase/firestore/lite';

import { auth } from '../../firebase';
import {
  GLOBAL_STYLES,
  SCREEN_HEIGHT,
} from '../../styles/Style';
import { removeUser, setUser } from '../../redux/userSlice';
import { updateUser } from '../../api/user';
import TextButton from '../../components/button/TextButton';

export default function Settings({ navigation }) {
  const userRef = auth.currentUser;
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const [usernameVisible, setUsernameVisible] =
    useState(false);
  const [newUsername, setNewUsername] = useState('');
  //
  const [emailVisible, setEmailVisible] = useState(false);
  const [newEmail, setNewEmail] = useState('');
  //
  const [dateOfBirthVisible, setDateOfBirthVisible] =
    useState(false);
  const [newDateOfBirth, setNewDateOfBirth] = useState(
    new Date()
  );
  //
  const [countryVisible, setCountryVisible] =
    useState(false);
  const [newCountry, setNewCountry] = useState('');
  //
  const [avatarVisible, setAvatarVisible] = useState(false);
  const [newAvatar, setNewAvatar] = useState('');
  //
  const [bannerVisible, setBannerVisible] = useState(false);
  const [newBanner, setNewBanner] = useState('');
  //
  const [passwordVisible, setPasswordVisible] =
    useState(false);
  const [newPassword, setNewPassword] = useState('');
  //

  useEffect(() => {
    setUsername(currentUser.username);
    setEmail(currentUser.email);
    setCountry(currentUser.country);
    setDateOfBirth(currentUser.dateOfBirth);
  }, [currentUser]);

  useEffect(() => {}, [newDateOfBirth]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateOfBirthVisible(false);
    setNewDateOfBirth(currentDate);
  };

  const logoutHandle = () => {
    Alert.alert('Confirmation', 'Are you sure to logout!', [
      {
        text: 'OK',
        onPress: () => {
          signOut(auth)
            .then(() => {
              dispatch(removeUser({}));
            })
            .catch((error) => {
              console.log(error.message());
            });
        },
      },
      {
        text: 'Cancel',
        onPress: () => {},
      },
    ]);
  };

  const changeUsernameHandle = () => {
    if (newUsername.length < 5) {
      alert('Username is too short!');
    } else {
      // dispatch(setUser({...currentUser, username: newUsername}))
      console.log(newUsername);
    }
  };

  const changeEmailHandle = () => {
    //Check email hơp lệ và có được dùng chưa // Nếu khác với email hiện tại
    //Nếu chuẩn thì cập nhật global state, cập nhật firebase-auth, cập nhật firebase-firestore
    if (email == newEmail) {
      alert('Email is the same as old email!');
    } else if (validateEmail(newEmail)) {
      //Cập nhật globalState
      dispatch(
        setUser({ ...currentUser, email: newEmail })
      );
      //Cập nhật firebase-auth
      updateEmail(userRef, newEmail)
        .then(() => {
          //Cập nhật firestore
          updateUser(currentUser.userId, {
            email: newEmail,
          })
            .then(() => {
              alert('Email updated!');
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          alert('Error when update Email!');
        });
    } else {
      console.log('Error');
    }
  };

  const changeDateOfBirthHandle = () => {};

  const changeCountryHandle = () => {};

  const changeAvatarHandle = () => {};

  const changeBannerHandle = () => {};

  const changePasswordHandle = () => {
    if (newPassword.length < 8) {
      alert('Password length required more than 8');
    } else {
      updatePassword(userRef, newPassword)
        .then((res) => {
          alert('Password updated!');
          setPasswordVisible(!passwordVisible);
        })
        .catch((error) => {
          alert(error.message());
        });
    }
    // console.log(newPassword);
  };

  return (
    <SafeAreaView
      container={[
        GLOBAL_STYLES.container,
        styles.container,
      ]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setUsernameVisible(!usernameVisible)}
      >
        <Text style={GLOBAL_STYLES.text}>Username</Text>
        <Text style={GLOBAL_STYLES.username}>
          @{username}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setEmailVisible(!emailVisible)}
      >
        <Text style={GLOBAL_STYLES.text}>Email</Text>
        <Text style={GLOBAL_STYLES.username}>{email}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() =>
          setDateOfBirthVisible(!dateOfBirthVisible)
        }
      >
        <Text style={GLOBAL_STYLES.text}>
          Date of birth
        </Text>
        <Text style={GLOBAL_STYLES.username}>
          {dateOfBirth}
        </Text>
        {
          /**/ dateOfBirthVisible && (
            <DateTimePicker
              style={{ alignSelf: 'center' }}
              value={newDateOfBirth}
              mode="date"
              display="default"
              is24Hour={true}
              onChange={onChangeDate}
            />
          )
        }
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setCountryVisible(!countryVisible)}
      >
        <Text style={GLOBAL_STYLES.text}>Country</Text>
        <Text style={GLOBAL_STYLES.username}>
          {country}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setAvatarVisible(!avatarVisible)}
      >
        <Text style={GLOBAL_STYLES.text}>Avatar</Text>
        <Text style={GLOBAL_STYLES.username}>
          Tap to choose image
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setBannerVisible(!bannerVisible)}
      >
        <Text style={GLOBAL_STYLES.text}>Banner</Text>
        <Text style={GLOBAL_STYLES.username}>
          Tap to choose image
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => setPasswordVisible(!passwordVisible)}
      >
        <Text style={GLOBAL_STYLES.text}>Password</Text>
        <Text style={GLOBAL_STYLES.username}>
          Tap to change
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={logoutHandle}
      >
        <Text
          style={[GLOBAL_STYLES.text, { color: 'red' }]}
        >
          Logout
        </Text>
      </TouchableOpacity>

      {/**/}
      <Dialog.Container visible={usernameVisible}>
        <Dialog.Title>Change Username</Dialog.Title>
        <Dialog.Description>
          Insert your username to change
        </Dialog.Description>
        <Dialog.Input
          value={newUsername}
          onChangeText={setNewUsername}
        />
        <Dialog.Button
          label="OK"
          onPress={changeUsernameHandle}
        />
        <Dialog.Button
          label="Cancel"
          onPress={() => {
            setNewUsername('');
            setUsernameVisible(!usernameVisible);
          }}
        />
      </Dialog.Container>

      {/**/}
      <Dialog.Container visible={emailVisible}>
        <Dialog.Title>Change Email</Dialog.Title>
        <Dialog.Description>
          Insert your Email to change
        </Dialog.Description>
        <Dialog.Input
          value={newEmail}
          onChangeText={setNewEmail}
        />
        <Dialog.Button
          label="OK"
          onPress={changeEmailHandle}
        />
        <Dialog.Button
          label="Cancel"
          onPress={() => {
            setNewEmail('');
            setEmailVisible(!emailVisible);
          }}
        />
      </Dialog.Container>

      {/**/}
      <Dialog.Container visible={countryVisible}>
        <Dialog.Title>Change country</Dialog.Title>
        <Dialog.Description>
          Insert your country to change
        </Dialog.Description>
        <Dialog.Input
          value={newCountry}
          onChangeText={setNewCountry}
        />
        <Dialog.Button
          label="OK"
          onPress={changeCountryHandle}
        />
        <Dialog.Button
          label="Cancel"
          onPress={() => {
            setNewCountry('');
            setCountryVisible(!countryVisible);
          }}
        />
      </Dialog.Container>

      {/**/ avatarVisible && <View></View>}

      {/**/ bannerVisible && <View></View>}

      {/**/}
      <Dialog.Container visible={passwordVisible}>
        <Dialog.Title>Change password</Dialog.Title>
        <Dialog.Description>
          Insert your password to change
        </Dialog.Description>
        <Dialog.Input
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <Dialog.Button
          label="OK"
          onPress={changePasswordHandle}
        />
        <Dialog.Button
          label="Cancel"
          onPress={() => {
            setNewPassword('');
            setPasswordVisible(!passwordVisible);
          }}
        />
      </Dialog.Container>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingLeft: 5,
    paddingTop: 10,
  },

  container: {
    backgroundColor: 'white',
    height: SCREEN_HEIGHT,
  },
});
