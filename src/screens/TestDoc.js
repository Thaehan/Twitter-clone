import {
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  doc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
} from 'firebase/firestore/lite';

import { storage, db, app } from '../firebase';
import {
  createUser,
  getMultipleUsers,
  getUserById,
  updateUser,
} from '../api/user';

export default function TestDoc() {
  const testId = 'B3JwV6l530bG9vXPNUUp';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date()
  );
  const [country, setCountry] = useState('');

  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDateOfBirth(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const getHandle = () => {
    getUserById(testId)
      .then((doc) => {
        console.log(doc.data());
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getMultipleHandle = () => {
    getMultipleUsers()
      .then((docs) => {
        docs.forEach((doc) => {
          console.log(doc.data(), doc.id);
        });
      })
      .catch((error) => console.log(error));
  };

  const createHandle = () => {
    createUser(
      'thaehannllll@gmail.com',
      'thaehan061111',
      'Thaehan333',
      'Do Datt',
      new Date(),
      'VietNam'
    );
  };

  const updateHandle = () => {
    const change = {
      username: 'Nowano',
      fullname: 'Trung Hieu',
    };
    updateUser(testId, change)
      .then((res) => {
        alert('Updated');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      {/* <Button title="Pick Date" onPress={showDatepicker} />
      <Text>
        selected: {dateOfBirth.toLocaleDateString()}
      </Text>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dateOfBirth}
          mode={'date'}
          is24Hour={true}
          onChange={onChange}
        />
      )} */}
      <Button title="Create" onPress={createHandle} />
      <Button title="Get By ID" onPress={getHandle} />
      <Button
        title="Get multiple"
        onPress={getMultipleHandle}
      />
      <Button title="update" onPress={updateHandle} />
    </View>
  );
}
