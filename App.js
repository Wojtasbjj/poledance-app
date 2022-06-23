import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/screens/HomeScreen'
import Figures from './src/components/screens/FiguresScreen'
import Join from './src/components/screens/JoinScreen'
import Login from './src/components/screens/LoginScreen'
import Register from './src/components/screens/RegisterScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FlashMessage from "react-native-flash-message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Join"
        component={Join}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
      <Stack.Screen
        name="Register"
        component={Register}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen name="Figures" component={Figures}></Stack.Screen>
      </Stack.Navigator>
      <FlashMessage position="top" /> 
  </NavigationContainer>
  );
}
