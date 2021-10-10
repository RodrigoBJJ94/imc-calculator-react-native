import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function title() {
    return (
        <View style={styles.blockTitle}>
            <Text style={styles.textTitle}>Calculadora de IMC</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    blockTitle: {
        marginBottom: 1,
        backgroundColor: 'rgba(105, 9, 176, 1)',
        height: 46,
    },
    textTitle: {
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        color: 'white',
        padding: 6,
    },
});
