/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';

// components 
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header headerText={'Albums'} />

        <ScrollView>
          <AlbumList />
        </ScrollView>
        
      </View>
    );
  }
}
