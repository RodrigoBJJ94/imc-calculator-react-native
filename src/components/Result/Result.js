import React from 'react';
import Styles from './Styles';
import { Text, View } from 'react-native';

export default function Result(props) {
    return (
        <View>
            <Text style={Styles.result}>{props.result}</Text>
        </View>
    );
};
