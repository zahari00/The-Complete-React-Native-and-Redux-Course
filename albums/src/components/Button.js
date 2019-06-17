import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

function Button(props) {
    const styles = StyleSheet.create({
        button: {
            flex: 1,
            alignSelf: 'stretch',


            borderWidth: 1,
            borderRadius: 5,
            borderColor: '#007aff',

        },
        buttonText: {
            fontWeight: '600',
            fontSize: 16,
            color: '#007aff',
            textAlign: 'center',
            padding: 10
        }
    })

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <Text style={styles.buttonText}>{props.children}</Text>
        </TouchableOpacity>
    )

}
export default Button;