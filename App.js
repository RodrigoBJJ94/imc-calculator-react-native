import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
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
      alert('Informe o peso!');
      return;
    };

    if (weight <= 0) {
      alert('Informe um peso válido!');
      return;
    };

    if (!height) {
      alert('Informe a altura!');
      return;
    };

    if (height <= 0) {
      alert('Informe uma altura válida');
      return;
    };

    const result = weight / (height * height)

    if (result < 18.5) {
      setResult('Você está abaixo do peso,\n seu IMC é de: ' + result.toFixed(1));
    } else if (result >= 18.5 && result < 25) {
      setResult('Você está no peso ideal,\n seu IMC é de: ' + result.toFixed(1));
    } else if (result >= 25 && result < 30) {
      setResult('Você está com sobrepeso,\n seu IMC é de: ' + result.toFixed(1));
    } else if (result >= 30 && result < 35) {
      setResult('Você está com obesidade,\n seu IMC é de: ' + result.toFixed(1));
    } else if (result >= 35 && result < 40) {
      setResult('Você está com obesidade severa,\n seu IMC é de: ' + result.toFixed(1));
    } else {
      setResult('Você está com obesidade mórbida,\n seu IMC é de: ' + result.toFixed(1))
    };
  };

  return (
    <>
      <Modal />
      <StatusBarMain />
      <Title />
      <View style={styles.body}>
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

const styles = StyleSheet.create({
  body: {
    padding: 10,
  }
});
