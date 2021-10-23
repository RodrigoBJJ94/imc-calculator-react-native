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
            setResult('Você está abaixo do peso, seu IMC é de: ' + result.toFixed(1));
        } else if (result >= 18.5 && result < 25) {
            setResult('Você está no peso ideal, seu IMC é de: ' + result.toFixed(1));
        } else if (result >= 25 && result < 30) {
            setResult('Você está com sobrepeso, seu IMC é de: ' + result.toFixed(1));
        } else if (result >= 30 && result < 35) {
            setResult('Você está com obesidade, seu IMC é de: ' + result.toFixed(1));
        } else if (result >= 35 && result < 40) {
            setResult('Você está com obesidade severa, seu IMC é de: ' + result.toFixed(1));
        } else {
            setResult('Você está com obesidade mórbida, seu IMC é de: ' + result.toFixed(1))
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
