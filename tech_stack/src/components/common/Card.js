import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function Card(props) {
    const styles = StyleSheet.create({
        card: {
            borderWidth: 1,
            borderRadius: 3,
            borderColor: '#ddd',
            shadowColor: '#000',
            borderBottomWidth: 0,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 5,
            marginBottom: 5

        },
    })
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    )

}
export { Card };