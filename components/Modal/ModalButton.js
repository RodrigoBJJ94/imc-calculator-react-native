import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function ModalButton(props) {
    return (
        <View>
            <TouchableOpacity
                style={styles.touch}
                onPress={() => props.setVisible(false)}
            ><Text style={styles.touchText}>COMEÇAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    touch: {
        backgroundColor: 'rgb(81, 2, 100)',
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchText: {
        color: 'white',
        fontSize: 18
    }
});
