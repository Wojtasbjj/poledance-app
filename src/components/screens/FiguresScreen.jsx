import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Figures SCREEN</Text>
                <Button onPress={() => { this.props.navigation.navigate('Home') }} title={"BACK!"}></Button>
            </View>
        )
    }
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});