import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

class BottomButton extends React.Component {
    render() {
        return (
            <LinearGradient colors={['#FD749B', '#281AC8']} style={styles.registerCta}>
                <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
                    <Text style={styles.textWhite}>{this.props.text}</Text>
                </TouchableOpacity>
            </LinearGradient>
        )
    }
}

export default BottomButton

const styles = StyleSheet.create({
    registerCta: {
        width: '100%',
        marginTop: 10
    },
    button: {
        width: '100%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        marginTop: 30
    },
    textWhite: {
        color: 'white'
    },
});