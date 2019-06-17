import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

const Input = (props) => {
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            height: 40,
            flex: 1
        },
        input: {
            color: '#000',
            paddingRight: 5,
            fontSize: 18,
            lineHeight: 23,
            flex: 2,
        },
        label: {
            flex: 1,
            paddingLeft: 20,
            fontSize: 18
        }
    })
    return (
        <View style={styles.container}>
            {props.label
                ? <Text style={styles.label}>
                    {props.label}
                </Text>
                : null
            }
            <TextInput secureTextEntry={props.isSecure} placeholder={props.placeholder} autoCorrect={false} style={styles.input} value={props.value} onChangeText={props.onChange} />
        </View>
    );
}

export { Input };