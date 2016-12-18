import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main from './src/main';

class eventexpert extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('eventexpert', () => eventexpert);
