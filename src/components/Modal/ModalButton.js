import React from 'react';
import Styles from './Styles';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ModalButton({ setVisible }) {
    return (
        <View>
            <TouchableOpacity
                style={Styles.touch}
                onPress={() => setVisible(false)}>
                <Text style={Styles.touchText}>COMEÇAR</Text>
            </TouchableOpacity>
        </View>
    );
};
