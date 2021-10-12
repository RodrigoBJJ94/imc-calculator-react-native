import React from 'react';
import Styles from './Styles';
import { Text, View, TouchableOpacity } from 'react-native';

export default function ButtonCalc(props) {
  return (
    <View style={Styles.block}>
      <TouchableOpacity
        style={Styles.button}
        onPress={() => props.click()}
      ><Text style={Styles.textButton}>Calcular IMC</Text>
      </TouchableOpacity>
    </View>
  );
};
