import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, View, Image, Text } from 'react-native'
import firebase from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { showMessage } from "react-native-flash-message";
import BaseInput from '../atoms/BaseInput'
import BaseButton from '../atoms/BaseButton'
import EmailIcon from '../../assets/png/EmailIcon.png'
import PasswordIcon from '../../assets/png/PasswordIcon.png'
import FemaleAvatarRegister from '../../assets/png/FemaleAvatarRegister.png'
import UserIcon from '../../assets/png/UserIcon.png'
import BottomButton from '../atoms/BottomButton'
import SocialMediaAuth from '../molecules/SocialMediaAuth'


const RegisterScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePassword, setRePassword] = useState('')
    const [displayName, setDisplayName] = useState('')
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

    const handleSignUp = () => {
        setLoader(true)
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(result => {
                return result.user.updateProfile({
                    displayName: displayName
                })
            })
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
            <Image source={FemaleAvatarRegister} style={styles.avatar}></Image>
            <View style={styles.formWrapper}>
                <View style={styles.inputContainer}>
                    <BaseInput value={displayName} onChangeText={text => setDisplayName(text)} source={UserIcon} placeholder="Twoje imię" />
                    <BaseInput value={email} onChangeText={text => setEmail(text)} source={EmailIcon} placeholder="E-mail" />
                    <BaseInput value={password} onChangeText={text => setPassword(text)} source={PasswordIcon} placeholder="Hasło" secureTextEntry={true} />
                    <BaseInput value={rePassword} onChangeText={text => setRePassword(text)} source={PasswordIcon} placeholder="Potwierdź hasło" secureTextEntry={true} />
                </View>
                <View style={styles.buttonContainer}>
                    <BaseButton disabled={loader} onPress={() => handleSignUp("Login")} placeholder="ZAŁÓŻ PROFIL" />
                </View>
            </View>
            <Text style={styles.text}>Lub</Text>
            <Text style={styles.text}>Zarejestruj się za pomocą: </Text>
            <SocialMediaAuth />
            <BottomButton text="Masz już konto? Zaloguj się" onPress={() => handleChangeScreen('Login')}></BottomButton>
        </KeyboardAvoidingView>
    )
}

export default RegisterScreen

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
        marginTop: 10
    },
})