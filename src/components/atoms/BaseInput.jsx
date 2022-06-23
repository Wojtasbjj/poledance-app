import React from 'react'
import { StyleSheet, View, TextInput, Image } from 'react-native'

class BaseInput extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    secureTextEntry={this.props.secureTextEntry}
                    style={styles.input}
                />
                <Image
                    source={this.props.source}
                    style={styles.icon}
                />
            </View>
        )
    }
}

export default BaseInput

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid #D1D1D1',
        borderRadius: 5,
        marginTop: 5,
        paddingVertical: 10,
    },
    input: {
        height: 30
    },
    icon: {
        width: 30,
        height: 30,
    }
});