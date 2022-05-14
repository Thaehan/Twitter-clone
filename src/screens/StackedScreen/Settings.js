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
import React, {
  useState,
  useEffect,
  useRef,
  useLayoutEffect,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  signOut,
  updatePassword,
  updateEmail,
} from 'firebase/auth';
import DateTimePicker from '@react-native-community/datetimepicker';
import Dialog from 'react-native-dialog';
import { Timestamp } from 'firebase/firestore/lite';
import * as ImagePicker from 'expo-image-picker';

import { upLoadImage, deleteImage } from '../../api/image';
import { auth } from '../../firebase';
import {
  GLOBAL_STYLES,
  MAIN_COLOR,
  SCREEN_HEIGHT,
} from '../../styles/Style';
import { removeUser, setUser } from '../../redux/userSlice';
import { updateUser } from '../../api/user';
import TextButton from '../../components/button/TextButton';
import IconButton from '../../components/button/IconButton';

export default function Settings({ navigation }) {
  const userRef = auth.currentUser;
  const currentUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const [fullnameVisible, setFullnameVisible] =
    useState(false);
  //
  const [usernameVisible, setUsernameVisible] =
    useState(false);
  /**/
  const [newFullname, setNewFullname] = useState('');
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
  const [newAvatar, setNewAvatar] = useState(null);
  //
  const [bannerVisible, setBannerVisible] = useState(false);
  const [newBanner, setNewBanner] = useState(null);
  //
  const [passwordVisible, setPasswordVisible] =
    useState(false);
  const [newPassword, setNewPassword] = useState('');
  //
  const [saveVisible, setSaveVisible] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Settings',
      headerLeft: () => {
        return (
          <IconButton
            type="ionicon"
            icon="ios-arrow-back-outline"
            onPress={() => navigation.goBack()}
          />
        );
      },
    });
  }, []);

  useEffect(() => {
    setFullname(currentUser.fullname);
    setUsername(currentUser.username);
    setEmail(currentUser.email);
    setCountry(currentUser.country);
    setDateOfBirth(currentUser.dateOfBirth);
  }, [currentUser]);

  useEffect(() => {
    if (
      currentUser.username != username ||
      currentUser.email != email ||
      currentUser.dateOfBirth != dateOfBirth ||
      currentUser.country != country ||
      newAvatar ||
      newBanner
    ) {
      setSaveVisible(true);
    } else {
      setSaveVisible(false);
    }
  }, [
    username,
    email,
    dateOfBirth,
    country,
    newAvatar,
    newBanner,
  ]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const pickImageHandle = async (type) => {
    //Nhận vào type 'avatar' / 'banner'
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.cancelled) {
      const newImageUrl = await upLoadImage(result.uri);
      if (type == 'avatar') {
        setNewAvatar(newImageUrl);
      } else {
        setNewBanner(newImageUrl);
      }
    }
  };

  const changeFullnameHandle = () => {
    if (newFullname.length < 5) {
      alert('Fullname is invalid!');
    } else {
      setFullname(newFullname);
      setFullnameVisible(!fullnameVisible);
    }
  };

  const changeUsernameHandle = () => {
    if (newUsername.length < 5) {
      alert('Username is too short!');
    } else {
      setUsername(newUsername);
      setUsernameVisible(!usernameVisible);
    }
  };

  const changeEmailHandle = () => {
    //Check email hơp lệ và có được dùng chưa // Nếu khác với email hiện tại
    //Nếu chuẩn thì cập nhật global state, cập nhật firebase-auth, cập nhật firebase-firestore
    if (email == newEmail) {
      alert('Email is the same as old email!');
    } else if (validateEmail(newEmail)) {
      setEmail(newEmail);
      setEmailVisible(!emailVisible);
    } else {
      console.log('Error');
    }
  };

  const changeDateOfBirthHandle = (event, selectedDate) => {
    const currentDate = selectedDate;
    if (currentDate >= moment()) {
      alert('Invalid date!');
    } else {
      setNewDateOfBirth(currentDate);
      setDateOfBirth(
        moment(currentDate).format('DD/MM/YYYY')
      );
    }
  };

  const changeCountryHandle = () => {
    setCountry(newCountry);
    setCountryVisible(!countryVisible);
  };

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

  const saveHandle = () => {
    //Update database => update global state
    const newUserData = {};
    if (currentUser.fullname != fullname) {
      newUserData.fullname = fullname;
    }
    if (currentUser.username != username) {
      newUserData.username = username;
    }
    if (currentUser.email != email) {
      newUserData.email = email;
    }
    if (currentUser.dateOfBirth != dateOfBirth) {
      newUserData.dateOfBirth =
        Timestamp.fromDate(newDateOfBirth);
    }
    if (currentUser.country != country) {
      newUserData.country = country;
    }
    if (newAvatar != null) {
      newUserData.avatar = newAvatar;
    }
    if (newBanner != null) {
      newUserData.banner = newBanner;
    }

    if (
      Object.keys(newUserData).length === 0 &&
      newUserData.constructor === Object
    ) {
      alert('Nothing change!');
    } else {
      //Update db => update global state => delete old image
      //Nếu có avatar - nếu không có avatar - nếu không có cả 2
      updateUser(currentUser.userId, newUserData)
        .then(() => {
          const oldAvatar = currentUser.avatar;
          const oldBanner = currentUser.banner;
          dispatch(
            setUser({
              ...currentUser,
              ...newUserData,
              dateOfBirth:
                moment(newDateOfBirth).format('DD/MM/YYYY'),
            })
          );
          alert('Update user data');
          if (newBanner != null) {
            deleteImage(oldBanner)
              .then(() => {
                console.log('Delete old banner');
              })
              .catch((error) => {
                console.log(error);
              });
            dispatch(
              setUser({
                ...currentUser,
                ...newUserData,
                dateOfBirth:
                  moment(newDateOfBirth).format(
                    'DD/MM/YYYY'
                  ),
              })
            );
          }
          if (newAvatar != null) {
            deleteImage(oldAvatar)
              .then(() => {
                console.log('Delete old avatar');
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            setFullnameVisible(!fullnameVisible)
          }
        >
          <Text style={GLOBAL_STYLES.text}>Fullname</Text>
          <Text style={GLOBAL_STYLES.username}>
            {fullname}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            setUsernameVisible(!usernameVisible)
          }
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
          <Text style={GLOBAL_STYLES.username}>
            {email}
          </Text>
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
                value={newDateOfBirth}
                mode="date"
                is24Hour={true}
                onChange={changeDateOfBirthHandle}
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
          onPress={() =>
            pickImageHandle('avatar')
              .then(() => console.log('Image uploaded'))
              .catch((error) => console.log(error))
          }
        >
          <Text style={GLOBAL_STYLES.text}>Avatar</Text>
          <Text style={GLOBAL_STYLES.username}>
            Tap to choose image
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            pickImageHandle('banner')
              .then(() => console.log('Image uploaded'))
              .catch((error) => console.log(error))
          }
        >
          <Text style={GLOBAL_STYLES.text}>Banner</Text>
          <Text style={GLOBAL_STYLES.username}>
            Tap to choose image
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            setPasswordVisible(!passwordVisible)
          }
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
        <Dialog.Container visible={fullnameVisible}>
          <Dialog.Title>Change Fullname</Dialog.Title>
          <Dialog.Description>
            Insert your fullname to change
          </Dialog.Description>
          <Dialog.Input
            value={newFullname}
            onChangeText={setNewFullname}
          />
          <Dialog.Button
            label="OK"
            onPress={changeFullnameHandle}
          />
          <Dialog.Button
            label="Cancel"
            onPress={() => {
              setNewFullname('');
              setFullnameVisible(!fullnameVisible);
            }}
          />
        </Dialog.Container>

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
        {/* save button */}
        {saveVisible && (
          <TouchableOpacity
            style={styles.saveButton}
            onPress={saveHandle}
          >
            <Text style={{ color: 'white' }}>
              Save Change
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
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
  saveButton: {
    alignSelf: 'center',
    backgroundColor: MAIN_COLOR,
    borderRadius: 10,
    bottom: 10,
    marginTop: 5,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    position: 'absolute',
  },
});
