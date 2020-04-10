import React from 'react';
import { View, Text, Image } from 'react-native';
import ActionButton from './ActionButton';
import { colors } from '../../utils';
import { welcomeAuth } from '../../assets';

const WelcomeAuth = ({ navigation }) => {

    const handleGoTo = (screen) => {
        navigation.navigate(screen)
    }


    return (
        <View style={styles.wrapper.page}>
            <Image source={welcomeAuth} style={styles.wrapper.illustation} />
            <Text style={styles.text.welcome}>
                Selamat Datang di O-JOL
            </Text>
            <ActionButton desc="Silahkan masuk, jika anda sudah memiliki akun" title="Masuk" onPress={() => handleGoTo('Login')} />
            <ActionButton desc="atau silahkan daftar jika anda belum memiliki akun" title="Daftar" onPress={() => handleGoTo('Register')} />
        </View >
    )
};

const styles = {
    wrapper: {
        page: {
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'white'
        },
        illustation: {
            width: 219,
            height: 117,
        }
    },
    text: {
        welcome: {
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.text.default,
            marginTop: 10,
            marginBottom: 76
        }
    }
}

export default WelcomeAuth;