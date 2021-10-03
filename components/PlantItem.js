import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableNativeFeedback,
  Image,
} from 'react-native';

const PlantItem = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <TouchableCmp
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}
      onPress={props.onPress}>
      <View style={styles.item}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../assets/img/leaf.png')}
          />
          <Text style={styles.title}>{props.type}</Text>
        </View>
        <Text style={{fontFamily: 'OpenSans-Regular', paddingBottom: 5}}>
          ID: {props.id}
        </Text>
      </View>
    </TouchableCmp>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 45,
    paddingBottom: 220,
    backgroundColor: 'white',
  },
  item: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 15,
    width: 150,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',

    // shadowColor: 'black',
    // shadowOffset: {width: 0, height: 2},
    // shadowOpacity: 0.3,
    elevation: 5,
    backgroundColor: 'white',
    borderRadius: 20,
    shadowRadius: 20,
  },
  title: {
    //fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    padding: 8,
  },
  measures: {
    flexDirection: 'row',
    width: '95%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    paddingBottom: 5,
    backgroundColor: '#6dcff6',
    borderRadius: 8,
    zIndex: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 6,
  },
  measureItem: {
    marginHorizontal: 10,
  },
});

export default PlantItem;
