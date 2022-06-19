import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

class MenuItem extends React.Component {
    render() {
        return (
            <View style={[styles.menuItem, { backgroundColor: this.props.color }]}>
                <Text>{this.props.text}</Text>
            </View>
        )
    }
}

export default MenuItem

const styles = StyleSheet.create({
    menuItem: {
        flex: 1,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
});