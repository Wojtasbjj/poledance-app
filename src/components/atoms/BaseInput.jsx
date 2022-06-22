import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'

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
            </View>
        )
    }
}

export default BaseInput

const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    input: {
        border: '1px solid #D1D1D1',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 5,
        marginTop: 5
    },
});