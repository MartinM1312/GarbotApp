import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen, {homeScreenOptions} from '../screens/HomeScreen';
import DataScreen, {DataScreenOptions} from '../screens/DataScreen';
import LoginScreen, {LoginScreenOptions} from '../screens/LoginScreen';
import SettingsScreen, {SettingsScreenOptions} from '../screens/SettingsScreen';
import SyncScreen from '../screens/SyncScreen';
import ReportScreen from '../screens/ReportScreen';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: 'white',
    elevation: 0,
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
  },
  headerTintColor: '#3d88c1',
  headerTitleAlign: 'center',
  headerShown: true,
  headerTransparent: true,
};

const AuthStackNavigator = createStackNavigator({Login: LoginScreen});

export const AuthNavigator = () => {
  return (
    <MainStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
      <MainStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={LoginScreenOptions}
      />
      <MainStackNavigator.Screen
        name="Data"
        component={DataScreen}
        options={DataScreenOptions}
      />
    </MainStackNavigator.Navigator>
  );
};
