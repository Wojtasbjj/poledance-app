import React from 'react'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

class BaseButton extends React.Component {
    render() {
        return (
            <LinearGradient colors={['#FD749B', '#281AC8']} style={styles.button}>
                <TouchableOpacity
                    disabled={this.props.disabled}
                    onPress={this.props.onPress}>
                    <Text style={styles.buttonText}>{this.props.placeholder}</Text>
                </TouchableOpacity>
            </LinearGradient >
        )
    }
}

export default BaseButton

const styles = StyleSheet.create({
    button: {
        width: '80%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 30
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    }
});