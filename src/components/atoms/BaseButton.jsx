import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

class BaseButton extends React.Component {
    render() {
        return (
            <LinearGradient colors={['#FD749B', '#281AC8']} style={styles.wrapper}>
                <TouchableOpacity
                    disabled={this.props.disabled}
                    onPress={this.props.onPress}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>{this.props.placeholder}</Text>
                </TouchableOpacity>
            </LinearGradient >
        )
    }
}

export default BaseButton

const styles = StyleSheet.create({
    wrapper: {
        width: '80%',
        marginBottom: 30,
        borderRadius: 5,
    },
    button: {
        alignItems: 'center',
        margin: 15
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    }
});