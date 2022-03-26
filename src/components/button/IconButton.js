import {
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Nhận vào style cho container để căn chỉnh, icon để hiện, size
export default function IconButton(props) {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
      >
        <FontAwesomeIcon
          icon={props.icon}
          size={props.size}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignContent: 'center',
    borderRadius: 50,
  },
});
