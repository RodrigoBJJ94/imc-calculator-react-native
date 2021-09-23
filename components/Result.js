import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default props => {
    return (
        <View>
            <Text style={styles.result}>{props.result}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    result: {
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 14,
    },
})