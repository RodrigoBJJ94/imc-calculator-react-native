import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import HeightText from './HeightText';

export default function Height(props) {
    return (
        <View style={styles.block}>
            <HeightText />
            <TextInput
                style={styles.textInput}
                autoFocus={false}
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
    },
    block: {
        marginBottom: 10
    }
});
