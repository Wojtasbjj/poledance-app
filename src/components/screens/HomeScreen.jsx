import React from 'react'
import MenuItem from '../molecules/MenuItem'
import { StyleSheet, View, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    // render() {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.navigate('Figures') }} style={styles.menuItem}>
                <MenuItem text="Figury" color="powderblue" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <MenuItem text="moje konto" color="red" />
            </TouchableOpacity>
        </View>
    )
    // }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuItem: {
        flex: 1
    }
});