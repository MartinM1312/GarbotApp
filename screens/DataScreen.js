import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, Button, Dimensions} from 'react-native';
import DataSelectionButton from '../components/DataSelectionButton';
import HumidityDataChart from '../components/HumidityDataChart';
import LightDataChart from '../components/LightDataChart';

const DataScreen = props => {
  const {plantID} = props.route.params;
  const {plantType} = props.route.params;
  const [dataLogo, setDataLogo] = useState(
    require('../assets/img/humMeter1.png'),
  );
  const [dataTitle, setDataTitle] = useState('Humedad de Tierra');
  const [dataChart, setDataChart] = useState(
    <HumidityDataChart plantId={plantID} />,
  );

  const humButtonHandler = () => {
    setDataTitle('Humedad de Tierra');
    setDataLogo(require('../assets/img/humMeter1.png'));
    setDataChart(<HumidityDataChart plantId={plantID} />);
  };
  const lightButtonHandler = () => {
    setDataTitle('Luminosidad');
    setDataLogo(require('../assets/img/sun.png'));

    setDataChart(<LightDataChart plantId={plantID} />);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.typeTitle}>{plantType}</Text>
      <Image style={styles.logo} source={dataLogo} />
      <Text style={styles.graphicsTitle}>{dataTitle}</Text>
      <View style={styles.graphicsContainer}>{dataChart}</View>
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          width: '85%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <DataSelectionButton
          style={{backgroundColor: '#4d88d1'}}
          title={'Humedad'}
          onPress={humButtonHandler}
        />
        <DataSelectionButton
          style={{backgroundColor: '#62cd4d'}}
          title={'Luminosidad'}
          onPress={lightButtonHandler}
        />
      </View>
    </View>
  );
};

export const DataScreenOptions = props => {
  const {plantID} = props.route.params;
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
    paddingTop: 45,
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
    width: 45,
    height: 45,
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
    fontFamily: 'OpenSans-Regular',
  },
});

export default DataScreen;
