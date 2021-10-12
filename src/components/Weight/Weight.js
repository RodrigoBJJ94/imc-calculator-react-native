import React from 'react';
import Styles from './Styles';
import { View, TextInput } from 'react-native';
import WeightText from './WeightText';

export default function Weight(props) {
    return (
        <View style={Styles.block}>
            <WeightText />
            <TextInput
                style={Styles.textInput}
                autoFocus={true}
                keyboardType='numeric'
                onChangeText={text => props.modify(text)}
            ></TextInput>
        </View>
    );
};
