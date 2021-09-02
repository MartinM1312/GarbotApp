import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {PLANTS} from '../data/dummy-data';
import {getEnvMeasures} from '../api';

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
  }, [measuresData]);

  useEffect(() => {
    return () => {};
  }, []);

  const renderItem = itemData => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate({
            routeName: 'Data',
            params: {
              plantID: itemData.item.id,
              plantType: itemData.item.type,
            },
          });
        }}>
        <View style={styles.item}>
          <Text style={styles.title}>{itemData.item.type}</Text>
          <Text>{itemData.item.id}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <View style={{alignItems: 'center'}}>
        <View style={styles.measures}>
          <View style={styles.measureItem}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Temperatura Ambiente
            </Text>
            <Text>
              {measuresData.length != 0
                ? measuresData[measuresData.length - 1].env_temp
                : 0}
              °C
            </Text>
          </View>
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
        </View>
      </View>
      <FlatList data={PLANTS} renderItem={renderItem} />
    </View>
  );
};

HomeScreen.navigationOptions = {
  headerTitle: 'Home',
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 15,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    elevation: 6,
    borderRadius: 5,
    padding: 25,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
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
  },
  measureItem: {
    marginHorizontal: 10,
  },
});

export default HomeScreen;
