import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import { MAIN_COLOR } from '../../styles/Style';
// Nhận vào style cho container để căn chỉnh, icon để hiện, type của icon, size
export default function CircleButton({
  style,
  onPress,
  icon,
  type,
  size,
  color,
}) {
  return (
    <View style={style}>
      <TouchableOpacity
        style={styles.container}
        onPress={onPress}
      >
        <Icon
          name={icon}
          type={type}
          size={size}
          color={color}
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
