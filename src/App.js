import React, { useState } from 'react';
import Modal from './components/Modal/Modal';
import StatusBarMain from './components/StatusBar/StatusBarMain';
import Title from './components/Title/Title';
import Weight from './components/Weight/Weight';
import Height from './components/Height/Height';
import CalculateAndResult from './components/CalculateAndResult/CalculateAndResult';
import Table from './components/Table/Table';

export default function calImc() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [result, setResult] = useState('');

  return (
    <>
      <Modal />
      <StatusBarMain />
      <Title />
      <Weight setWeight={setWeight} />
      <Height setHeight={setHeight} />
      <CalculateAndResult weight={weight} height={height} result={result} setResult={setResult} />
      <Table />
    </>
  );
};
