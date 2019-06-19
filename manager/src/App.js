/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

// scenes components
import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/EmployeeCreate'
import EmployeeUpdate from './components/EmployeeUpdate'

// routing
import { Scene, Router, Actions } from 'react-native-router-flux'

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAMNtQJvqqSl13LBgqucnSK-7TWZIzulsY",
      authDomain: "react-native-manager-dc3fb.firebaseapp.com",
      databaseURL: "https://react-native-manager-dc3fb.firebaseio.com",
      projectId: "react-native-manager-dc3fb",
      storageBucket: "react-native-manager-dc3fb.appspot.com",
      messagingSenderId: "185298526100",
      appId: "1:185298526100:web:f31a5683bda38746"
    };

    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router>
          <Scene key="root" hideNavBar>
            {/* auth */}
            <Scene key="auth" initial>
              <Scene key="login" component={Login} title="Login" initial />
            </Scene>
            {/* end auth */}

            {/* main */}
            <Scene key="main" >
              <Scene
                rightTitle="Add"
                onRight={() => Actions.createEmployee()}
                key="employeeList"
                component={EmployeeList}
                title="Employees"
                initial
              />
              <Scene
                key="createEmployee"
                component={CreateEmployee}
                title="Add new employee"
              />
              <Scene
                key="employeeUpdate"
                component={EmployeeUpdate}
                title="Update Employee"
              />
            </Scene>
            {/* end main */}

          </Scene>
        </Router>

      </Provider >
    );
  }
}

