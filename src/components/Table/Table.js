import React from 'react';
import Styles from './Styles';
import { View, Image } from 'react-native';

export default function Table() {
    return (
        <View style={Styles.block}>
            <Image style={Styles.imageImc} source={require('../../assets/img/imc.png')} />
        </View>
    );
};
