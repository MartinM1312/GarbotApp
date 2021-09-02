import React, {useState, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useReducer} from 'react/cjs/react.production.min';
import SettingsOption from '../components/SettingsOption';

const SyncScreen = props => {
  const [initTitle, setInitTitle] = useState('Iniciar');
  const [initSubTitle, setSubInitTitle] = useState('Activar GarBot');
  const initHandler = useRef(false);
  return (
    <View style={styles.container}>
      <Text>Sync!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    fontSize: 30,
  },
});

export default SyncScreen;
