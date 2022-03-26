import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
library.add(faPlus, faEnvelope);
export default function ButtonCreateMessage(props) {
  return (
    <TouchableOpacity style={styles.button_size}>
      <FontAwesomeIcon
        icon={faEnvelope}
        style={{
          position: 'absolute',
          left: 17,
          top: 18,
          width: 22,
          height: 22,

          //backgroundColor: '#ffffff',
        }}
        color="#ffffff"
      />
      <FontAwesomeIcon
        icon={faPlus}
        style={{
          position: 'absolute',
          left: 37,
          top: 14,
          width: 11,
          height: 11,

          //backgroundColor: '#ffffff',
        }}
        color="#ffffff"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button_size: {
    position: 'absolute',
    left: 305,
    top: 625,
    width: 56,
    height: 56,
    backgroundColor: '#4C9EEB',
    borderRadius: 56 / 2,
  },
});
