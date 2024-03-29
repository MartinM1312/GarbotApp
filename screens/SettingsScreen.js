import React, {useState, useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import SettingsOption from '../components/SettingsOption';

const SettingsScreen = props => {
  const [initTitle, setInitTitle] = useState('Iniciar');
  const [initSubTitle, setSubInitTitle] = useState('Activar GarBot');
  const initHandler = useRef(false);
  return (
    <View style={styles.container}>
      <SettingsOption
        title={initTitle}
        subtitle={initSubTitle}
        onPress={() => {
          if (initHandler.current) {
            setInitTitle('Iniciar'), setSubInitTitle('Activar GarBot');
          } else {
            setInitTitle('Finalizar'), setSubInitTitle('Detener GarBot');
          }
          initHandler.current = !initHandler.current;
        }}
      />
      <SettingsOption
        title={'Sincronizar'}
        subtitle={'Conecta tu dispositivo movil con GarBot'}
        onPress={() => {
          props.navigation.navigate('Sync');
        }}
      />
      <SettingsOption
        title={'Reportar Error'}
        subtitle={'Cuéntanos si tuviste algún problema'}
        onPress={() => {
          props.navigation.navigate('Report');
        }}
      />
    </View>
  );
};
export const SettingsScreenOptions = navData => {
  return {headerTitle: 'Settings'};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 45,
    paddingBottom: 220,
  },
  titleContainer: {
    fontSize: 30,
  },
});

export default SettingsScreen;
