import React from 'react'
import MenuItem from '../molecules/MenuItem'
import { StyleSheet, View, TouchableOpacity } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Figures') }} style={styles.menuItem}>
                    <MenuItem text="Profil" color="powderblue" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Figures') }} style={styles.menuItem}>
                    <MenuItem text="Kalendarz" color="blue" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('Figures') }} style={styles.menuItem}>
                    <MenuItem text="Figury" color="pink" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuItem}>
                    <MenuItem text="Ustawienia" color="red" />
                </TouchableOpacity>
            </View>
        )
    }
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