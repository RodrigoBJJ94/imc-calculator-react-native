import React from 'react';
import Styles from './Styles';
import { Text, View } from 'react-native';

export default function title() {
    return (
        <View style={Styles.blockTitle}>
            <Text style={Styles.textTitle}>Calculadora de IMC</Text>
        </View>
    );
};

