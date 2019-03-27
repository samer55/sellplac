import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';


export default class AppNavigator extends React.Component {

  render() {

    return <MainTabNavigator/>
  }
}
