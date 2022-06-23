import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import firebase from '../../../firebase'
import BaseButton from '../atoms/BaseButton'
import LogOut from '../../assets/png/LogOut.png'
import { useAuthState } from 'react-firebase-hooks/auth'

const HomeScreen = () => {
    const navigation = useNavigation()
    const [user, loading, error] = useAuthState(firebase.auth())


    useEffect(() => {
        console.log(user)
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
                <TouchableOpacity onPress={handleLogOut}>
                    <Image source={LogOut} style={styles.logout} />
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
        marginBottom: 30,
        alignItems: 'center'
    },
    logout: {
        width: 25,
        height: 27
    }
});