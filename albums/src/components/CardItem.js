import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

function CardItem(props) {
    const styles = StyleSheet.create({
        card: {
            backgroundColor: '#fff',
            padding: 5,
            borderBottomWidth: 1,
            justifyContent: 'flex-start',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative',
            
        },
    })
    return (
        <View style={styles.card}>
            {props.children}
        </View>
    )

}
export default CardItem;