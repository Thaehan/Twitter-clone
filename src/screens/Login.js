import { View, Text, Button, Image } from 'react-native';

import { LOGO_PATH } from '../constants/ImagePath';

export default function Login({ navigation }) {
  return (
    <View>
      <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate('Home', {});
        }}
      />
      <Image source={LOGO_PATH} />
      <Text>Login</Text>
    </View>
  );
}
