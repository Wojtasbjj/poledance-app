import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MenuItem from './src/components/molecules/MenuItem'

export default function App() {
  return (
    <View style={styles.container}>
      <MenuItem text="Figury" color="powderblue"/>
      <MenuItem text="moje konto" color="red"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
