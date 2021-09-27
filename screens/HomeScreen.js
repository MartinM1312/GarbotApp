import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import {PLANTS} from '../data/dummy-data';
import {getEnvMeasures} from '../api';
import EnvCard from '../components/EnvCard';
import RefreshButton from '../components/RefreshButton';
import LinearGradient from 'react-native-linear-gradient';
const HomeScreen = props => {
  const [measuresData, setMeasureData] = useState([]);

  const loadMeasures = async () => {
    try {
      const measures = await getEnvMeasures();
      setMeasureData(measures);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadMeasures();
    return () => {};
  }, []);

  const renderItem = itemData => {
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
        onPress={() => {
          props.navigation.navigate('Data', {
            plantID: itemData.item.id,
            plantType: itemData.item.type,
          });
        }}>
        <View style={styles.item}>
          <Text style={styles.title}>{itemData.item.type}</Text>
          <Text style={{fontFamily: 'OpenSans-Bold', paddingBottom: 5}}>
            {itemData.item.id}
          </Text>
        </View>
      </TouchableCmp>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <EnvCard
          envMeasure={
            measuresData.length != 0
              ? measuresData[measuresData.length - 1].env_temp
              : 0
          }
          title="Temperatura"
          subTitle="AMBIENTE"
        />
        <RefreshButton onPress={loadMeasures} />
        {/* <View style={styles.measures}>
          <View style={styles.measureItem}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Humedad Ambiente
            </Text>
            <Text>
              {' '}
              {measuresData.length != 0
                ? measuresData[measuresData.length - 1].env_hum
                : 0}
              %
            </Text>
          </View>
        </View> */}
      </View>
      <View
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FlatList
          style={{width: '100%'}}
          data={PLANTS}
          renderItem={renderItem}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export const homeScreenOptions = navData => {
  return {headerTitle: 'Home'};
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
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    elevation: 7,
    borderRadius: 20,
  },
  title: {
    //fontWeight: 'bold',
    fontSize: 20,
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

export default HomeScreen;
