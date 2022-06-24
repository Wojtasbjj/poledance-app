import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/core'
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import firebase from '../../../firebase'
import BaseButton from '../atoms/BaseButton'
import LogOut from '../../assets/png/LogOut.png'
import { useAuthState } from 'react-firebase-hooks/auth'

const HomeScreen = () => {
    const navigation = useNavigation()
    const [user, loading, error] = useAuthState(firebase.auth())
    const [name, setName] = useState('')


    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                navigation.navigate("Login")
            }
        })

        return unsubscribe
    }, [])

    useEffect(() => {
        if (user) {
            setName(user.displayName)
        }
    }, [user])

    const handleChangeScreen = (screen) => {
        navigation.navigate(screen)
    }

    const handleLogOut = () => {
        firebase.auth().signOut()
    }

    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <View style={styles.avatar}>
                    <Text style={styles.add}>+</Text>
                </View>
                <Text style={styles.name}>{name}</Text>
            </View>
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
        marginBottom: '10px',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 80,
        height: 80,
        backgroundColor: '#C4C4C4',
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    add: {
        color: 'white',
        fontSize: 28
    },
    name: {
        marginTop: 10,
        color: '#9247b1',
        fontSize: 22,
        fontWeight: 700

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