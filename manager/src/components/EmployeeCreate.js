import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardItem,  Button, Spinner } from './common';
import { changeEmployee, createEmployee } from '../actions'
import EmployeeForm from './EmployeeForm';

class CreateEmployee extends Component {
    saveEmployee() {
        const { name, phone, shift, createEmployee } = this.props;

        createEmployee({ name, phone, shift })
    }

    render() {
        const {loading, error } = this.props;
        return (
            <Card>
                <EmployeeForm />

                <CardItem>
                    {loading ? <Spinner /> :
                        <Button onPress={this.saveEmployee.bind(this)}>
                            Create
                        </Button>
                    }
                    {error ? <CardItem><Text>{error}</Text></CardItem> : null}
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

export default connect(mapStateToProps, { changeEmployee, createEmployee })(CreateEmployee);
