import { useState } from 'react';
import { View, Button, Text } from 'react-native';

function Counting() {
  const [count, setCount] = useState(0);

  const buttonHandle = () => {
    setCount(pre => pre + 1);
    console.log(count);
  }

  return (
    <View>
      <Text>{count}</Text>
      <Button
        title='Count'
        onPress={buttonHandle}
      />
    </View>
  )
}

export default Counting;