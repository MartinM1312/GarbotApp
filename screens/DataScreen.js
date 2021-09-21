import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Button, Dimensions} from 'react-native';
import DataSelectionButton from '../components/DataSelectionButton';
import HumidityDataChart from '../components/HumidityDataChart';
import LightDataChart from '../components/LightDataChart';

const DataScreen = props => {
  const plantID = props.navigation.getParam('plantID');
  const plantType = props.navigation.getParam('plantType');

  const [dataOption, setDataOption] = useState('0');
  let dataView;
  let dataChart;
  if (dataOption == '0') {
    dataView = <Text style={styles.graphicsTitle}>Humedad de Tierra</Text>;
    dataChart = <HumidityDataChart plantId={plantID} />;
  } else {
    dataView = <Text style={styles.graphicsTitle}>Luminosidad</Text>;
    dataChart = <LightDataChart plantId={plantID} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.typeTitle}>{plantType}</Text>
      <Image
        style={styles.logo}
        source={require('../assets/img/garbotLogo.png')}
      />
      {dataView}
      <View style={styles.graphicsContainer}>{dataChart}</View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          width: '85%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <DataSelectionButton
          style={{backgroundColor: '#4d88d1'}}
          title={'Humedad'}
          onPress={() => {
            setDataOption(0);
          }}
        />
        <DataSelectionButton
          style={{backgroundColor: '#62cd4d'}}
          title={'Luminosidad'}
          onPress={() => {
            setDataOption(1);
          }}
        />
      </View>
    </View>
  );
};

DataScreen.navigationOptions = navigationData => {
  const plantID = navigationData.navigation.getParam('plantID');
  return {
    headerTitle: plantID,
  };
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white',
  },
  titleContainer: {
    fontSize: 28,
    marginTop: 15,
    marginBottom: 10,
  },
  typeTitle: {
    fontSize: 20,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  header: {
    flex: 1,
    alignItems: 'flex-start',
    marginHorizontal: '30%',
  },
  logo: {
    marginVertical: 10,
  },
  graphicsContainer: {
    width: '100%',
    height: '40%',
    // borderColor: 'black',
    // borderWidth: 2,
    // borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  graphicsTitle: {
    fontSize: 18,
    marginBottom: 5,
  },
});

export default DataScreen;
