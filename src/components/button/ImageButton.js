import { View } from 'react-native';
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

//Nhưng Image button là những cái ảnh tròn có thể ấn vào
//nhận vào size= onPress= (size x size)
export default function AvatarButton(props) {
  return (
    <View style={props.style}>
      <TouchableOpacity
        style={styles.container}
        onPress={props.onPress}
      >
        <Image
          source={props.source}
          style={{
            height: props.size,
            width: props.size,
          }}
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
