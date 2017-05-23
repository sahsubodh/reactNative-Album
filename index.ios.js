//index.ios.js  - iOS

import React from 'react';
import {
  AppRegistry, 
  Text,
  View
} from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>

);

//render

AppRegistry.registerComponent('albums', () => App);

