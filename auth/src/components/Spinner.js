import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

function Spinner(props) {
    const styles = StyleSheet.create({
        card: {
            alignItems: 'center',
            justifyContent: 'center', 
            flex: 1
        },
    })
    return (
        <View style={styles.card}>
            <ActivityIndicator size={props.size || 'large'} />
        </View>
    )

}
export { Spinner };