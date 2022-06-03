import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';

const TouchableText = props => {
  return (
    <View style={{...styles.container, ...props.style}}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: fonts.regular,
    color: colors.primaryColor,
    textDecorationLine: 'underline',
  },
});

export default TouchableText;
