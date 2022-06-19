import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/screens/HomeScreen'
import Figures from './src/components/screens/FiguresScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Figures" component={Figures}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
  );
}
