import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const DataSelectionButton = props => {
  return (
    <View style={styles.button}>
      <TouchableOpacity
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'aliceblue',
          borderRadius: 15,
        }}
        onPress={props.onPress}>
        <View style={{...styles.buble, ...props.style}}></View>
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center', justifyContent: 'center'},
  text: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    height: 60,
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    //ios
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    //android
    elevation: 6,
    borderRadius: 5,
  },
  buble: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'blue',
    margin: 3,
  },
});

export default DataSelectionButton;
