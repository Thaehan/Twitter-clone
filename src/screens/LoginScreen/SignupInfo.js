import {
  View,
  Text,
  TextInput,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';

import IconButton from '../../components/button/IconButton';
import {
  GLOBAL_STYLES,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
} from '../../styles/Style';

export default function SignupInfo({ navigation, route }) {
  const [showDatepicker, setShowDatePicker] =
    useState(false);
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date()
  );
  const [country, setCountry] = useState('');

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShowDatePicker(false);
    setDateOfBirth(currentDate);
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
      <TextInput
        value={username}
        style={styles.textInput}
        placeholder="Username"
        placeholderTextColor="#BDBDBD"
      />
      <TextInput
        value={fullname}
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
        />
        <Text>{dateOfBirth.toLocaleDateString()}</Text>
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
        style={styles.textInput}
        placeholder="country"
        placeholderTextColor="#BDBDBD"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // height: SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
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
  dateContainer: {
    width: 350,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    flexDirection: 'row',
  },
});
