import React from 'react';
import {MainNavigator, TabNavigator} from './navigation/ScreensNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {LogBox} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';

import humDataReducer from './store/reducers/humDataReducer';
import lightDataReducer from './store/reducers/lightDataReducer';

const rootReducer = combineReducers({
  humData: humDataReducer,
  lightData: lightDataReducer,
});

const store = createStore(rootReducer);

LogBox.ignoreLogs(['Reanimated 2']);

const App = props => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <TabNavigator /> */}
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
