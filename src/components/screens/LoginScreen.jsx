import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { StyleSheet, KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity } from 'react-native'
import firebase from '../../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import * as Progress from 'react-native-progress';
import { showMessage, hideMessage } from "react-native-flash-message";


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
                <View style={styles.inputContainer}>
                    <TextInput placeholder='email'
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput placeholder='password'
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        disabled={loader}
                        onPress={handleSignIn}
                        style={styles.button}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={loader}
                        onPress={handleSignUp}
                        style={[styles.button, styles.buttonOutLine]}>
                        <Text style={styles.buttonOutLineText}>Register</Text>
                    </TouchableOpacity>
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
    formWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    inputContainer: {
        width: '80%'
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 5
    },
    buttonContainer: {
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: '#0782F9',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center'
    },
    buttonOutLine: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#078F9',
        borderWidth: 2
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    },
    buttonOutLineText: {
        color: '#0782F9',
        fontWeight: '700',
        fontSize: 16
    }
})