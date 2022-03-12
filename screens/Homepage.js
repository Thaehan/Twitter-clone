import { View } from 'react-native';

import HelloWorld from '../components/HelloWorld';
import Counting from '../components/Counting';
import SearchFilter from '../components/SearchFilter';

export default function Homepage() {
  return (
    <View>
      <HelloWorld/>
      <Counting/>
      <SearchFilter/>
    </View>
  )
}