import React from 'react';
import {StyleSheet} from 'react-native';
import {createStore, combineReducers} from 'redux';
import MainNavigator from './navigation/ScreensNavigator';
import {enableScreens} from 'react-native-screens';
import {Provider} from 'react-redux';

enableScreens();

const App = props => {
  return <MainNavigator />;
};

export default App;
