import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Main from './src/main';

class chef_app extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('chef_app', () => chef_app);
