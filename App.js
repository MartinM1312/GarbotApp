import React from 'react';
import {MainNavigator, TabNavigator} from './navigation/ScreensNavigator';
import {enableScreens} from 'react-native-screens';
import {NavigationContainer} from '@react-navigation/native';

// enableScreens();

const App = props => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
