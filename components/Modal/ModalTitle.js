import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function ModalTitle() {
    return (
        <Text style={styles.titleModal}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
    titleModal: {
        fontSize: 30,
        textAlign: 'center',
        marginTop: 60,
        marginBottom: 30,
    }
});
