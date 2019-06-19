import React, { Component } from 'react';
import { Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { employeesFetch } from '../actions'
import { Card, CardItem, Input, Button, Spinner } from './common';
import ListItem from './ListItem'

class EmployeeList extends Component {

  componentWillMount() {
    this.props.employeesFetch();
  }


  render() {
    return (
      <Card>
        {this.props.employees.map(item=> <ListItem key={item.uid} employee={item} />)}
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees.employees, (val, uid) => {
    return {
      ...val, uid
    }
  })
  return { employees: employees }
}

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
