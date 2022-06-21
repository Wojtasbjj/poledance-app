import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/screens/HomeScreen'
import Figures from './src/components/screens/FiguresScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Button } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isUserLogin, setIsUserLogin] = useState(false)

  const login = () => {
    setIsUserLogin(true)
  }
  return (
    <NavigationContainer>
      {isUserLogin ? <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Figures" component={Figures}></Stack.Screen>
    </Stack.Navigator> : <View><Button onPress={login} title="Zaloguj się!"></Button></View>}

  </NavigationContainer>
  );
}
