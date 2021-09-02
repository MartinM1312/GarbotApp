import React from 'react';
import {StyleSheet} from 'react-native';

import MainNavigator from './navigation/ScreensNavigator';
import {enableScreens} from 'react-native-screens';

enableScreens();

const App = props => {
  return <MainNavigator />;
};

const styles = StyleSheet.create({});

export default App;
