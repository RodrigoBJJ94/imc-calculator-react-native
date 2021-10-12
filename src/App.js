import React, { useState } from 'react';
import Styles from './Styles';
import { Alert, View } from 'react-native';
import Modal from './components/Modal/Modal';
import StatusBarMain from './components/StatusBar/StatusBarMain';
import Title from './components/Title/Title';
import Weight from './components/Weight/Weight';
import Height from './components/Height/Height';
import ButtonCalc from './components/ButtonCalc/ButtonCalc';
import Result from './components/Result/Result';
import Table from './components/Table/Table';
import Banner from './components/Banner/Banner';

export default function calImc() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState('');

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
      <Modal />
      <StatusBarMain />
      <Title />
      <View style={Styles.body}>
        <Weight modify={setWeight} />
        <Height modify={setHeight} />
        <ButtonCalc click={calcIMC} />
        <Result result={result} />
        <Table />
        <Banner />
      </View>
    </>
  );
};
