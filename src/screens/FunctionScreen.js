import { View, Text } from 'react-native';

import Counting from '../components/Counting';
import HelloWorld from '../components/HelloWorld';
import SearchFilter from '../components/SearchFilter';

function FunctionScreen({ navigation, route }) {
  const { name, age } = route.params;

  return (
    <View>
      <HelloWorld />
      <Counting />
      <Text>{name}</Text>
      <Text>{age}</Text>
      <SearchFilter />
    </View>
  );
}

export default FunctionScreen;
