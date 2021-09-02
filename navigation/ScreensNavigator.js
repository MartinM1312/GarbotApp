import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import DataScreen from '../screens/DataScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SyncScreen from '../screens/SyncScreen';
import ReportScreen from '../screens/ReportScreen';

const MainNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Data: DataScreen,
  },
  {
    headerMode: 'float',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3d88c1',
      },
      headerTintColor: 'white',
      headerTitleAlign: 'center',
    },
  },
);

const settingsNavigator = createStackNavigator(
  {
    Settings: SettingsScreen,
    Report: ReportScreen,
    Sync: SyncScreen,
  },
  {
    headerMode: 'float',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3d88c1',
      },
      headerTintColor: 'white',
      headerTitleAlign: 'center',
    },
  },
);

const TabNavigator = createBottomTabNavigator(
  {
    MainScreen: {
      screen: MainNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name="leaf" size={25} color={tabInfo.tintColor} />;
        },
      },
    },
    Settings: {
      screen: settingsNavigator,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name="cog" size={28} color={tabInfo.tintColor} />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#3d88c1',
      showLabel: false,
    },
  },
);

export default createAppContainer(TabNavigator);
