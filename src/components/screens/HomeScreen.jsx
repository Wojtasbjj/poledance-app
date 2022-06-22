import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import firebase from '../../../firebase'
import BaseButton from '../atoms/BaseButton'

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
            <View style={styles.profileContainer}></View>
            <View style={styles.menuContainer}>
                <View style={styles.buttonWrapper}>
                    <BaseButton onPress={() => handleChangeScreen('Profile')} placeholder="Mój Profil" />
                </View>
                <View style={styles.buttonWrapper}>
                    <BaseButton onPress={() => handleChangeScreen('Figures')} placeholder="Figury" />
                </View>
                <View style={styles.buttonWrapper}>
                    <BaseButton onPress={() => handleChangeScreen('Calendar')} placeholder="Kalendarz" />
                </View>
                <View style={styles.buttonWrapper}>
                    <BaseButton onPress={() => handleChangeScreen('Goals')} placeholder="Moje cele" />
                </View>
                {/* TODO: svg zamiast napisu logout */}
                <TouchableOpacity onPress={handleLogOut}>
                    <Text>Logout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    profileContainer: {
        flex: 1,
        borderBottomColor: '#D1D1D1',
        borderBottomWidth: 1,
        marginBottom: '10px'
    },
    menuContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonWrapper: {
        width: '80%',
        marginBottom: 30
    }
});