import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, FlatList, SafeAreaView} from 'react-native';
import {PLANTS} from '../data/dummy-data';
import {getEnvMeasures} from '../api';
import EnvCard from '../components/EnvCard';
import RefreshButton from '../components/RefreshButton';
import PlantItem from '../components/PlantItem';
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
    return (
      <PlantItem
        onPress={() => {
          props.navigation.navigate('Data', {
            plantID: itemData.item.id,
            plantType: itemData.item.type,
          });
        }}
        type={itemData.item.type}
        id={itemData.item.id}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topCardsContainer}>
        <EnvCard
          tempMeasure={
            measuresData.length != 0
              ? measuresData[measuresData.length - 1].env_temp
              : 0
          }
          humMeasure={
            measuresData.length != 0
              ? measuresData[measuresData.length - 1].env_hum
              : 0
          }
          tempIcon={require('../assets/img/cloudy1.png')}
          humIcon={require('../assets/img/humidity.png')}
          humIconStyle={{width: 45, height: 45, marginTop: 10}}
        />
        <RefreshButton onPress={loadMeasures} />
      </View>
      <View style={styles.listHeadingContainer}>
        <Text style={styles.listHeading}>Plantas</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.listContainer}>
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
  topCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 20,
  },
  listContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    width: '80%',
    height: 0.5,
    borderColor: 'grey',
    borderWidth: 0.5,
    marginLeft: 10,
  },
  listHeading: {
    color: 'grey',
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
  listHeadingContainer: {
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
    marginVertical: 5,
  },
  item: {
    flex: 1,
    marginVertical: 15,
    marginHorizontal: 15,
    width: 150,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 7,
    backgroundColor: 'white',
    borderRadius: 20,
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

export default HomeScreen;
