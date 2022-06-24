import React from 'react'
import { StyleSheet, View, Image } from 'react-native';
import FacebookIcon from '../../assets/png/FaceBookIcon.png'
import TwitterIcon from '../../assets/png/TwitterIcon.png'
import GmailIcon from '../../assets/png/GmailIcon.png'

class SocialMediaAuth extends React.Component {
    render() {
        return (
            <View style={styles.iconsContainer}>
                <Image
                    source={FacebookIcon}
                    style={styles.icon}
                />
                <Image
                    source={TwitterIcon}
                    style={styles.icon}
                />
                <Image
                    source={GmailIcon}
                    style={styles.icon}
                />
            </View>
        )
    }
}

export default SocialMediaAuth

const styles = StyleSheet.create({
    iconsContainer: {
        flexDirection: 'row',
        marginTop: 20
    },
    icon: {
        width: 40,
        height: 40,
        marginHorizontal: 10
    }
});