import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export default function Table() {
    return (
        <View style={styles.block}>
            <Image
                style={styles.imageImc}
                source={require('../../assets/img/imc.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        marginBottom: 15
    },
    imageImc: {
        width: '100%',
        resizeMode: 'contain',
        marginTop: -48,
    }
});
