import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Input, Button, Spinner } from './common';
import { changeEmployee, createEmployee } from '../actions'

class EmployeeForm extends Component {

    render() {
        const { changeEmployee, name, phone, shift } = this.props;
        return (
            <Card>
                <CardItem>
                    <Input label="Name:" onChange={changeEmployee} value={name} name="name" placeholder="Sarah" />
                </CardItem>
                <CardItem>
                    <Input label="Phone:" onChange={changeEmployee} value={phone} name="phone" placeholder="555-555-5555" />
                </CardItem>

                <CardItem style={{ padding: 13 }}>
                    <Text style={{ fontSize: 18, paddingLeft: 13 }}>
                        Shift
                        </Text>

                    <View style={{ flex: 2, paddingLeft: 75 }}>
                        <Picker
                            style={{ flex: 1, height: 40 }}
                            selectedValue={shift}
                            onValueChange={(value) => changeEmployee(value, 'shift')}>
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />
                        </Picker>
                    </View>
                </CardItem>

            </Card >
        );
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.employees.name,
        phone: state.employees.phone,
        shift: state.employees.shift,
        error: state.employees.error,
        loading: state.employees.loading,
    }
}

export default connect(mapStateToProps, { changeEmployee, createEmployee })(EmployeeForm);
