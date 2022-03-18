import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import FunctionScreen from './screens/FunctionScreen';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Function"
          component={FunctionScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return <MyStack />;
}

export default App;
