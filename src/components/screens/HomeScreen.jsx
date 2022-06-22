import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import MenuItem from '../molecules/MenuItem'
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import firebase from '../../../firebase'


const HomeScreen = () => {
    const navigation = useNavigation()


    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                navigation.navigate("Login")
            }
        })

        return unsubscribe
    }, [])


    const handleChangeScreen = (screen) => {
        navigation.navigate(screen)
    }

    const handleLogOut = () => {
        firebase.auth().signOut()
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.menuItem}>
                <MenuItem text="Profil" color="powderblue" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <MenuItem text="Kalendarz" color="blue" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleChangeScreen('Figures')} style={styles.menuItem}>
                <MenuItem text="Figury" color="pink" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogOut} style={styles.menuItem}>
                <MenuItem text="Wyloguj" color="red" />
            </TouchableOpacity>
        </View>
    )
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