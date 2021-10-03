import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen, {homeScreenOptions} from '../screens/HomeScreen';
import DataScreen, {DataScreenOptions} from '../screens/DataScreen';
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

const tabBarOptions = {
  activeTintColor: '#3d88c1',
  showLabel: false,
  style: {
    position: 'absolute',
    zIndex: 0,
    bottom: 10,
    left: 10,
    right: 10,
    width: '95%',
    backgroundColor: 'white',
    borderRadius: 15,
    borderColor: 'grey',
    height: 70,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 7,
    borderTopWidth: 0,
  },
};

const MainStackNavigator = createStackNavigator();
const SettingsStackNavigator = createStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();
export const MainNavigator = () => {
  return (
    <MainStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
      <MainStackNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={homeScreenOptions}
      />
      <MainStackNavigator.Screen
        name="Data"
        component={DataScreen}
        options={DataScreenOptions}
      />
    </MainStackNavigator.Navigator>
  );
};

export const SettingsNavigator = () => {
  return (
    <SettingsStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
      <SettingsStackNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={SettingsScreenOptions}
      />
      <SettingsStackNavigator.Screen name="Report" component={ReportScreen} />
      <SettingsStackNavigator.Screen name="Sync" component={SyncScreen} />
    </SettingsStackNavigator.Navigator>
  );
};

export const TabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator tabBarOptions={tabBarOptions}>
      <BottomTabNavigator.Screen
        name="Home"
        component={MainNavigator}
        options={{
          tabBarIcon: props => (
            <Ionicons name="leaf" size={25} color={props.color} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Settings"
        component={SettingsNavigator}
        options={{
          tabBarIcon: props => (
            <Ionicons name="cog" size={28} color={props.color} />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};
