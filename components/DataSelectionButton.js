import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const DataSelectionButton = props => {
  return (
    <TouchableOpacity
      style={{...styles.container, ...props.style}}
      onPress={props.onPress}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    height: 60,
    // width: 120,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    color: 'aliceblue',
  },
});

export default DataSelectionButton;
