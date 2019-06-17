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
import Login from './components/Login'
import ReduxThunk from 'redux-thunk';

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
        <View>
          <Login />
        </View>
      </Provider>
    );
  }
}

