import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const EnvCard = props => {
  return (
    <View style={{...styles.container, ...props.style}}>
      <View style={styles.topContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.envMeasure}</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image
            style={styles.cloudImg}
            source={require('../assets/img/cloudy1.png')}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.mainText}>{props.title}</Text>
        <Text style={styles.secondaryText}>{props.subTitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainText: {
    fontSize: 15,
    fontFamily: 'OpenSans-Bold',
  },
  secondaryText: {
    fontFamily: 'OpenSans-Regular',
    color: 'grey',
    fontSize: 14,
  },
  bottomContainer: {
    width: '100%',
    paddingHorizontal: 25,
    paddingBottom: 5,
  },
  topContainer: {
    flexDirection: 'row',
    height: '50%',
    marginHorizontal: 11,
    marginTop: 5,
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cloudImg: {
    width: '70%',
    height: '50%',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 18,
  },
  container: {
    margin: 8,
    width: '45%',
    height: '45%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    //ios
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    //android
    elevation: 2,
  },
});

export default EnvCard;
