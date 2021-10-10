import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function ButtonCalc(props) {
  return (
    <View style={styles.block}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.click()}
      >
        <Text style={styles.textButton}>Calcular IMC</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    marginBottom: 15
  },
  button: {
    backgroundColor: 'rgb(81, 2, 100)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    marginTop: 4,
    borderRadius: 3,
  },
  textButton: {
    fontSize: 15,
    textTransform: 'uppercase',
    color: 'white',
  }
});
