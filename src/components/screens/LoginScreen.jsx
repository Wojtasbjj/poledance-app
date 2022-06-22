import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity } from 'react-native'
import firebase from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import * as Progress from 'react-native-progress';
import { showMessage } from "react-native-flash-message";
import BaseInput from '../atoms/BaseInput'
import BaseButton from '../atoms/BaseButton'


const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, loading, error] = useAuthState(firebase.auth())
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

    const handleSignUp = () => {
        setLoader(true)
        firebase.auth().createUserWithEmailAndPassword(email, password)
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

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {loader ? <Progress.Circle size={50} indeterminate={true} /> : <View style={styles.formWrapper}>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>Dołącz do społeczności</Text>
                    <Text style={[styles.descriptionText, styles.descriptionTextPurple]}>Pole Dancerek</Text>
                </View>
                <View style={styles.inputContainer}>
                    <BaseInput value={email} onChangeText={text => setEmail(text)} placeholder="E-mail" />
                    <BaseInput value={password} onChangeText={text => setPassword(text)} placeholder="Hasło" secureTextEntry={true} />
                </View>
                <View style={styles.buttonContainer}>
                    <BaseButton disabled={loader} onPress={handleSignIn} placeholder="ZALOGUJ SIĘ" />
                    <BaseButton disabled={loader} onPress={handleSignUp} placeholder="UTWÓRZ PROFIL" />
                </View>
            </View>}
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

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
    descriptionTextPurple: {
        color: '#9247b1'
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
})