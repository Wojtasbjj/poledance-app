import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, Text, View, Image } from 'react-native'
import firebase from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { showMessage } from "react-native-flash-message";
import BaseInput from '../atoms/BaseInput'
import BaseButton from '../atoms/BaseButton'
import EmailIcon from '../../assets/png/EmailIcon.png'
import PasswordIcon from '../../assets/png/PasswordIcon.png'
import FemaleAvatar from '../../assets/png/FemaleAvatar.png'
import BottomButton from '../atoms/BottomButton'
import SocialMediaAuth from '../molecules/SocialMediaAuth'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, loading, error] = useAuthState(firebase.auth())
    const [loader, setLoader] = useState(false)

    const navigation = useNavigation()

    useEffect(() => {
        if (loading) {
            setLoader(true)
        } else {
            setLoader(false)
        }
    }, [loading])

    const handleSignIn = () => {
        setLoader(true)
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                setLoader(false)
                setEmail('')
                setPassword('')
            })
            .catch(error => {
                setLoader(false)
                showMessage({
                    message: error.code,
                    description: error.message,
                    type: "danger",
                    duration: 5000
                });
            })
    }

    const handleChangeScreen = (screen) => {
        navigation.navigate(screen)
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Image source={FemaleAvatar} style={styles.avatar}></Image>
            <View style={styles.formWrapper}>
                <View style={styles.inputContainer}>
                    <BaseInput value={email} onChangeText={text => setEmail(text)} source={EmailIcon} placeholder="E-mail" />
                    <BaseInput value={password} onChangeText={text => setPassword(text)} source={PasswordIcon} placeholder="Hasło" secureTextEntry={true} />
                </View>
                <Text style={styles.text}>Nie pamiętasz hasła?</Text>
                <View style={styles.buttonContainer}>
                    <BaseButton disabled={loader} onPress={handleSignIn} placeholder="ZALOGUJ" />
                </View>
            </View>
            <Text style={styles.text}>Zaloguj się przez portal społecznościowy:</Text>
            <SocialMediaAuth />
            <BottomButton onPress={() => handleChangeScreen('Register')} text={'Nie jesteś zarejestrowany? Utwórz konto'}></BottomButton>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'relative'
    },
    avatar: {
        width: 150,
        height: 150,
        marginBottom: 40
    },
    formWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    inputContainer: {
        width: '80%'
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    text: {
        marginTop: 30
    }
})