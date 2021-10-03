import React, {useRef} from 'react';
import {StyleSheet, TouchableOpacity, Animated} from 'react-native';
import {Easing} from 'react-native-reanimated';

const RefreshButton = props => {
  let rotateValue = useRef(new Animated.Value(0)).current;

  const rotate = () => {
    rotateValue.setValue(0);
    Animated.timing(rotateValue, {
      toValue: 1,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
    props.onPress();
  };

  const RotateData = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['360deg', '0deg'],
  });

  return (
    <TouchableOpacity style={styles.container} onPress={rotate}>
      <Animated.Image
        style={[styles.logo, {transform: [{rotate: RotateData}]}]}
        source={require('../assets/img/refresh.png')}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: 100,
    height: 132,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    elevation: 5,
    backgroundColor: 'white',
    margin: 8,
  },
  logo: {
    width: 60,
    height: 60,
  },
});

export default RefreshButton;
