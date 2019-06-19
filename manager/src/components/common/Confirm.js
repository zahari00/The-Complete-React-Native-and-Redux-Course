import React from 'react';
import { Text, StyleSheet, View, Modal } from 'react-native';
import { CardItem } from './CardItem'
import { Button } from './Button'

function Confirm(props) {
    const styles = StyleSheet.create({
        card: {
            justifyContent: 'center',
            
        },
        textStyle: {
            flex: 1,
            fontSize: 18,
            textAlign: 'center',
            lineHeight: 40
        },
        containerStyle: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            justifyContent: 'center'
        }
    })
    return (
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={props.visible}
            style={styles.card}
        >
            <View style={styles.containerStyle}>
                <CardItem style={styles.card}>
                    <Text style={styles.textStyle}>
                        {props.children}
                    </Text>
                </CardItem>

                <CardItem>
                    <Button onPress={props.onAccept}>
                        Yes
                    </Button>
                    <Button onPress={props.onDecline}>
                        No
                    </Button>
                </CardItem>
            </View>
        </Modal>
    )

}
export { Confirm };