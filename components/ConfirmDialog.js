import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
const {width} = Dimensions.get('screen');

export default props => {
  return (
    <TouchableOpacity
      style={styles.background}
      onPress={() => props.fun1()}
      activeOpacity={1}
      disabled={!props.load}>
      <View
        style={{
          ...styles.container,
          ...props.style,
        }}>
        <View style={styles.view1}>
          <Text style={{...styles.title, ...props.titleStyle}}>
            {props.title}
          </Text>
          <Text style={{...styles.subTitle, ...props.subtitleStyle}}>
            {props.subTitle}
          </Text>
        </View>
        <View style={styles.containerButton}>
          {props.load && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.fun1()}>
              <Text style={{...styles.textButton1, ...props.Button1Style}}>
                {props.label1}
              </Text>
            </TouchableOpacity>
          )}
          {props.load && <View style={styles.hr} />}
          {props.load && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => props.fun2()}>
              <Text style={styles.textButton2}>{props.label2}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  background: {
    width: width,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '75%',
    justifyContent: 'flex-end',
    borderRadius: 13,
  },
  view1: {
    paddingHorizontal: width * 0.07,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 9 + width * 0.02,
    marginTop: width * 0.06,
  },
  subTitle: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontSize: 9 + width * 0.016,
    marginVertical: width * 0.055,
  },
  containerButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50 + width * 0.05,
  },
  button: {
    flex: 2,
    justifyContent: 'center',
    height: '100%',
  },
  textButton1: {
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    fontSize: 9 + width * 0.017,
  },
  textButton2: {
    textAlign: 'center',
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 9 + width * 0.017,
  },
  hr: {
    width: 1,
    height: '65%',
    opacity: 0.5,
  },
  activityIndicator: {
    height: width * 0.12,
    width: width * 0.12,
  },
});
