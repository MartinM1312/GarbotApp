import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const SettingsScreen = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleContainer}>Settings Screen!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleContainer: {
    fontSize: 30,
  },
});

export default SettingsScreen;
