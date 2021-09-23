import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default props => {
    return (
        <View style={styles.block}>
            <Text>Informe sua altura:</Text>
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
