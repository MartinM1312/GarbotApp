import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const tempSymb = ' °C';
const humSymb = ' %';

const EnvCard = props => {
  const [slideActive, setSlideActive] = useState(0);

  const onSlide = nativeEvent => {
    setSlideActive(!slideActive);
  };

  return (
    <View style={{...styles.container, ...props.style}}>
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          onScrollEndDrag={({nativeEvent}) => onSlide(nativeEvent)}
          pagingEnabled>
          <View style={styles.dataContainer}>
            <View style={styles.topContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  {props.tempMeasure}
                  {tempSymb}
                </Text>
              </View>
              <View style={styles.imgContainer}>
                <Image
                  style={{...styles.iconStyle, ...props.tempIconStyle}}
                  source={props.tempIcon}
                />
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.mainText}>Temperatura</Text>
              <Text style={styles.secondaryText}>AMBIENTE</Text>
            </View>
          </View>
          <View style={styles.dataContainer}>
            <View style={styles.topContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>
                  {props.humMeasure}
                  {humSymb}
                </Text>
              </View>
              <View style={styles.imgContainer}>
                <Image
                  style={{...styles.iconStyle, ...props.humIconStyle}}
                  source={props.humIcon}
                />
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <Text style={styles.mainText}>Humedad</Text>
              <Text style={styles.secondaryText}>AMBIENTE</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.dotsContainer}>
        <View
          style={{
            ...styles.dot,
            ...{backgroundColor: slideActive ? 'black' : 'grey'},
          }}></View>
        <View style={styles.dot}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    width: 215,
    height: 130,
    flex: 1,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 5,
    width: '100%',
    height: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,

    marginHorizontal: 5,
  },
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
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  topContainer: {
    flexDirection: 'row',
    height: '50%',
    marginHorizontal: 11,
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
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
    width: 215,
    height: 132,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    //ios
    //shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 1,
    //android
    elevation: 4,
    //backgroundColor: 'red',
  },
});

export default EnvCard;
