import React from 'react';
import Styles from './Styles';
import { View, TextInput } from 'react-native';
import HeightText from './HeightText';

export default function Height({ setHeight }) {
    return (
        <View style={Styles.block}>
            <HeightText />
            <TextInput
                style={Styles.textInput}
                autoFocus={false}
                keyboardType='numeric'
                onChangeText={text => setHeight(text)}>
            </TextInput>
        </View>
    );
};
