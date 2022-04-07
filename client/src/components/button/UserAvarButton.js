import { View } from 'react-native';
import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { HEADER_HEIGHT } from '../../styles/Style';

//Giống image button nhưng khi ấn vào thì sẽ redirect đến pfp cá nhân của một người.
// Không redirect nếu đã có ở đó
export default function ImageButton(props) {
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
