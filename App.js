import React from 'react';
import {TabNavigator} from './navigation/ScreensNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['Reanimated 2']);

const App = props => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
