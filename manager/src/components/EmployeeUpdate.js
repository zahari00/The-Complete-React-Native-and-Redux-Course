import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem, Button, Spinner, Confirm } from './common';
import { changeEmployee, createEmployee, editEmployee, fireEmployee } from '../actions'
import EmployeeForm from './EmployeeForm';
import { Text as SendSMS } from 'react-native-openanything';

class CreateEmployee extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showModal: false
        }
    }
    componentWillMount() {
        const { name, phone, shift } = this.props.employee;
        this.props.changeEmployee(name, 'name')
        this.props.changeEmployee(phone, 'phone')
        this.props.changeEmployee(shift, 'shift')
    }

    componentWillUnmount() {
        this.props.changeEmployee('', 'name')
        this.props.changeEmployee('', 'phone')
        this.props.changeEmployee('', 'shift')
    }

    saveEmployee() {
        const { name, phone, shift, editEmployee } = this.props;
        editEmployee({ name, phone, shift, uid: this.props.employee.uid });


    }

    textEmployee() {
        SendSMS(this.props.phone, 'Your upcoming shift is on ' + this.props.shift)
    }

    fireEmployee() {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render() {
        const { loading, error, fireEmployee } = this.props;
        return (
            <Card>
                <EmployeeForm />

                <CardItem>
                    {loading ? <Spinner /> :
                        <View style={{ flex: 1 }}>
                            <CardItem>
                                <Button onPress={this.saveEmployee.bind(this)}>
                                    Save Changes
                                </Button>
                            </CardItem>
                            <CardItem>
                                <Button onPress={this.textEmployee.bind(this)}>
                                    Text
                                </Button>
                            </CardItem>
                            <CardItem>
                                <Button onPress={this.fireEmployee.bind(this)}>
                                    Fire
                                </Button>
                            </CardItem>
                        </View>
                    }
                    {error ? <CardItem><Text>{error}</Text></CardItem> : null}
                </CardItem>

                <Confirm
                    onAccept={() => fireEmployee(this.props.employee.uid)}
                    onDecline={this.fireEmployee.bind(this)}
                    visible={this.state.showModal}>Are you sure?</Confirm>
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

export default connect(mapStateToProps, { changeEmployee, createEmployee, editEmployee, fireEmployee })(CreateEmployee);
