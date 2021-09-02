import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity
      style={{...styles.button, ...props.style}}
      onPress={props.onPress}>
      <Text style={{...styles.title, ...props.titleStyle}}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  title: {
    fontSize: 16,
    color: 'white',
  },
});

export default Button;
