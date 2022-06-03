import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {fonts} from '../constants/fonts';

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
    //ios
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    //android
    elevation: 7,
    borderRadius: 20,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontFamily: fonts.bold,
  },
});

export default Button;
