// import {
//   View,
//   Text,
//   Image,
//   TouchableOpacity,
//   TextInput,
//   StyleSheet,
// } from 'react-native';
// import React, { useState } from 'react';
// import {
//   Bubble_Send,
//   Bubble_Received,
// } from '../../components/ChatBubble';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import {
//   faPaperPlane,
//   faFileImage,
//   faArrowLeft,
// } from '@fortawesome/free-solid-svg-icons';

// library.add(faPaperPlane, faFileImage);
// const SCREEN_HEIGHT = 812;
// const SCREEN_WIDTH = 375;
// export default function Message() {
//   const [message, setMessage] = useState('');
//   return (
//     <View>
//       <View style={styles.header_bar_message}>
//         <TouchableOpacity>
//           <FontAwesomeIcon
//             icon={faArrowLeft}
//             style={{
//               position: 'absolute',
//               left: 23,
//               top: 27,
//               width: 20,
//               height: 15,

//               backgroundColor: '#ffffff',
//             }}
//             color="#000000"
//           />
//         </TouchableOpacity>

//         <Image
//           source={require('../../assets/no-avatar.png')}
//           style={{
//             left: 170,
//             top: 0,
//             width: 35,
//             height: 35,
//             borderRadius: 35 / 2,
//           }}
//         />
//         <Text style={styles.user_name}>Nowano</Text>
//       </View>
//       <View style={styles.conversation}>
//         <Bubble_Send content="tin nhan da gui 1" />
//         <Bubble_Send content="tin nhan da gui 2" />
//         <Bubble_Received content="tin nhan da nhan 1" />
//         <Bubble_Received content="tin nhan da nhan 2" />
//         <Bubble_Received content="tin nhan da nhan dai dai dai dai dai dai vai vai vai vai" />
//       </View>
//       <View style={styles.message_input}>
//         <TouchableOpacity>
//           <FontAwesomeIcon
//             icon={faFileImage}
//             style={{
//               position: 'absolute',
//               left: 15,
//               top: 18,
//               width: 30,
//               height: 20,

//               backgroundColor: '#ffffff',
//             }}
//             color="#1A8CD8"
//           />
//         </TouchableOpacity>
//         <TouchableOpacity>
//           <FontAwesomeIcon
//             icon={faPaperPlane}
//             style={{
//               position: 'absolute',
//               left: 340,
//               top: 18,
//               width: 20,
//               height: 20,

//               backgroundColor: '#ffffff',
//             }}
//             color="#1A8CD8"
//           />
//         </TouchableOpacity>

//         <TextInput
//           value={message}
//           //onChangeText={Send message}
//           style={styles.textInput}
//           placeholder="Start a message"
//           placeholderTextColor="#BDBDBD"
//           autoFocus
//         />
//       </View>
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   header_bar_message: {
//     position: 'relative',
//     width: SCREEN_WIDTH,
//     height: 70,
//     fontFamily: 'sans-serif',
//     backgroundColor: 'white',
//     fontSize: 16,
//   },
//   user_name: {
//     left: 128,
//     top: 40,
//     textAlign: 'center',
//     alignItems: 'center',
//     fontWeight: 'bold',
//     color: '#000000',
//     backgroundColor: '#ffffff',
//   },
//   conversation: {
//     //vung chua cac tin nhan
//     width: SCREEN_WIDTH,
//     height: SCREEN_HEIGHT - 234,
//     fontFamily: 'sans-serif',
//     backgroundColor: 'white',
//     fontSize: 16,
//   },
//   textInput: {
//     width: 275,
//     height: 35,
//     paddingLeft: 16,
//     //marginBottom: 20,
//     fontSize: 16,
//     marginLeft: 57,
//     marginTop: 10,
//     backgroundColor: '#ffffff',
//     borderColor: '#E8E8E8',
//     borderWidth: 1,
//     borderRadius: 8,
//   },
//   message_input: {
//     position: 'relative',
//     width: SCREEN_WIDTH,
//     height: 55,
//     fontFamily: 'sans-serif',
//     backgroundColor: 'white',
//     fontSize: 16,
//   },
// });

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import {
  CONTENT_SCREEN_HEIGHT,
  GLOBAL_STYLES,
  SCREEN_WIDTH,
} from '../../styles/Style';
import CircleButton from '../../components/button/CircleButton';

export default function Message({ navigation }) {
  return (
    <View
      style={[GLOBAL_STYLES.container, styles.container]}
    >
      <Text>Message</Text>
      <CircleButton
        type="material-community"
        icon="message-plus"
        color="#ffffff"
        size={30}
        style={styles.circleButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // height: CONTENT_SCREEN_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: 'cyan',
  },
  circleButton: {
    borderRadius: 50,
    alignItems: 'center',
    bottom: 20,
    right: 20,
    position: 'absolute',
  },
});
