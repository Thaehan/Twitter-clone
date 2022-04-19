import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { MAIN_COLOR } from '../../styles/Style';
// Nhận vào style cho container để căn chỉnh, icon để hiện, type của icon, size
export default function CircleButton(props) {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
      >
        <Icon
          name={props.icon}
          type={props.type}
          size={props.size}
          color={props.color}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: MAIN_COLOR,
    borderRadius: 50,
    height: 60,
    justifyContent: 'center',
    width: 60,
  },
});
