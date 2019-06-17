import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Button } from '../components';
import firebase from 'firebase';

class Logout extends React.Component {

    render() {

        return (
            <Button onPress={() => firebase.auth().signOut()}>Sign Out</Button>
        )
    }
}
export default Logout;