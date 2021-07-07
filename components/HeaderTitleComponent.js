import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HeaderTitle = props => {
  return (
    <View style={{...styles.container, ...props.style}}>
      <Text style={styles.text}>{props.headerTitle}</Text>
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
});

export default HeaderTitle;
