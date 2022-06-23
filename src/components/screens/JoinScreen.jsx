import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, Text, View, Image } from 'react-native'
import firebase from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import * as Progress from 'react-native-progress';
import BaseButton from '../atoms/BaseButton'
import FemaleDanceAvatar from '../../assets/png/FemaleDanceAvatar.png'


const JoinScreen = () => {
    const [user, loading] = useAuthState(firebase.auth())
    const [loader, setLoader] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
        if (user) {
            navigation.navigate("Home")
        }
    }, [user])

    useEffect(() => {
        if (loading) {
            setLoader(true)
        } else {
            setLoader(false)
        }
    }, [loading])

    const handleChangeScreen = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {loader ? <Progress.Circle size={50} indeterminate={true} /> : <View style={styles.formWrapper}>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>Dołącz do społeczności</Text>
                    <Text style={[styles.descriptionText, styles.descriptionTextPurple]}>Pole Dancerek</Text>
                </View>
                <View style={styles.avatarContainer}>
                    <Image source={FemaleDanceAvatar} style={styles.avatar}></Image>
                </View>
                <View style={styles.buttonsContainer}>
                    <BaseButton disabled={loader} onPress={() => { handleChangeScreen('Login') }} placeholder="ZALOGUJ SIĘ" />
                    <BaseButton disabled={loader} onPress={() => { handleChangeScreen('Register') }} placeholder="UTWÓRZ PROFIL" />
                </View>
            </View>}
        </KeyboardAvoidingView>
    )
}

export default JoinScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
    },
    descriptionContainer: {
        textAlign: 'center',
        marginBottom: 20
    },
    descriptionText: {
        color: '#c95ea6',
        fontSize: '24px',
        fontWeight: 700
    },
    avatarContainer: {
        alignItems: 'center',
        marginBottom: 80
    },
    avatar: {
        width: 230,
        height: 250
    },
    descriptionTextPurple: {
        color: '#9247b1'
    },
    buttonsContainer: {
        alignItems: 'center'
    }
})