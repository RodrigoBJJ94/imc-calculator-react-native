import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import WeightText from './WeightText';

export default function Weight(props) {
    return (
        <View style={styles.block}>
            <WeightText />
            <TextInput
                style={styles.textInput}
                autoFocus={true}
                keyboardType='numeric'
                onChangeText={text => props.modify(text)}
            ></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    textInput: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
        borderRadius: 5,
        marginTop: 4,
    },
    block: {
        marginBottom: 10,
    }
});
