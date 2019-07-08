/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, AppRegistry} from 'react-native';
import AppNavigator from "./app/router";
import { connect, Provider } from 'react-redux';
import store from "./app/reduxStore";


type Props = {};
export default class MyApp extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
        <Provider store={store}>
           <AppNavigator />
        </Provider>
    );
  }
}

