import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const styles = StyleSheet.create({
    header: {
        // fontSize: 20,
        paddingTop: 15,
        textAlign: 'center',
        paddingBottom: 15,
        backgroundColor: '#f8f8f8',
        color: '#000',
        fontSize: 20,
        elevation: 2
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10 },
        shadowOpacity: 0.2,
    }
})

const Header = (props) => {
    return <View style={styles.shadow}><Text style={styles.header}>{props.headerText}</Text></View>
}

export default Header;