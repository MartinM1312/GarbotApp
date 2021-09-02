import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const SettingsOption = props => {
  return (
    <TouchableOpacity
      style={{...styles.button, ...props.style}}
      onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.subtext}>{props.subtitle}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    margin: 20,
    height: 60,
  },
  text: {
    color: 'black',
    fontSize: 18,
    marginHorizontal: 8,
    fontWeight: '700',
  },
  subtext: {
    color: 'grey',
    fontSize: 15,
    marginHorizontal: 8,
    marginVertical: 5,
  },
});

export default SettingsOption;
