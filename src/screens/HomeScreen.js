import { Button, View } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title="Go to the function screen"
        onPress={() =>
          navigation.navigate('Function', {
            name: 'Nhat Linh',
            age: 20,
          })
        }
      />
    </View>
  );
}

export default HomeScreen;
