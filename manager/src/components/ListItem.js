import React, { Component } from 'react';
import { Picker, Text, View, TouchableOpacity } from 'react-native';
import { Card, CardItem, Input, Button, Spinner } from './common';
import { Actions } from 'react-native-router-flux';

class ListItem extends Component {
    onPress() {
        Actions.employeeUpdate({ employee: this.props.employee });
    }

    render() {
        const { employee } = this.props;
        return (
            <TouchableOpacity onPress={this.onPress.bind(this)}>
                <CardItem>
                    <Text style={{ fontSize: 18, paddingLeft: 15 }}>{employee.name}</Text>
                </CardItem >
            </TouchableOpacity>
        );
    }
}


export default ListItem;
