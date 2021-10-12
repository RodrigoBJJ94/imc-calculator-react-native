import React from 'react';
import Styles from './Styles';
import { View, Text, TouchableOpacity } from 'react-native';

export default function ModalButton(props) {
    return (
        <View>
            <TouchableOpacity
                style={Styles.touch}
                onPress={() => props.setVisible(false)}
            ><Text style={Styles.touchText}>COMEÇAR</Text>
            </TouchableOpacity>
        </View>
    );
};
