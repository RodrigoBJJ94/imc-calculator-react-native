import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import Styles from './Styles';

export default function CalculateAndResult({ weight, height, result, setResult }) {
    const calcIMC = () => {
        if (!weight) {
            Alert.alert('Informe o peso!');
            return;
        };

        if (weight <= 0) {
            Alert.alert('Informe um peso válido!');
            return;
        };

        if (!height) {
            Alert.alert('Informe a altura!');
            return;
        };

        if (height <= 0) {
            Alert.alert('Informe uma altura válida');
            return;
        };

        const result = weight / ((height * height) / 10000);

        if (result < 18.5) {
            setResult('Seu IMC é de: ' + result.toFixed(1));
        } else if (result >= 18.5 && result < 25) {
            setResult('Seu IMC é de: ' + result.toFixed(1));
        } else if (result >= 25 && result < 30) {
            setResult('Seu IMC é de: ' + result.toFixed(1));
        } else if (result >= 30 && result < 35) {
            setResult('Seu IMC é de: ' + result.toFixed(1));
        } else if (result >= 35 && result < 40) {
            setResult('Seu IMC é de: ' + result.toFixed(1));
        } else {
            setResult('Seu IMC é de: ' + result.toFixed(1))
        };
    };

    return (
        <>
            <View style={Styles.block}>
                <TouchableOpacity style={Styles.button} onPress={() => calcIMC()}>
                    <Text style={Styles.textButton}>Calcular IMC</Text>
                </TouchableOpacity>
                <Text style={Styles.result}>{result}</Text>
            </View>
        </>
    );
};
