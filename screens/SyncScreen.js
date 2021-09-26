import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Linking,
} from 'react-native';
import Button from '../components/Button';

const SyncScreen = props => {
  const [enteredCode, setEnteredCode] = useState('');

  const inputProblemHandler = enteredProblem => {
    setEnteredProblem(enteredProblem);
  };
  const inputCodeHandler = enteredCode => {
    setEnteredCode(enteredCode);
  };

  const confirmSend = async () => {
    await Linking.openURL(
      'mailto:support@garbot.com.ec?subject= Problem from: ' +
        enteredCode +
        '&body=' +
        enteredProblem,
    );
    setAlertIsVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Ingresa el Codigo de tu GarBot
        </Text>
        <TextInput
          placeholder=""
          onChangeText={inputCodeHandler}
          value={enteredCode}
          keyboardType={'default'}
          style={styles.nameInput}
        />

        <Button style={styles.submitButton} title={'Sincronizar'} />
      </View>
    </TouchableWithoutFeedback>
  );
};
SyncScreen.navigationOptions = {
  headerTitle: 'Sincronizar',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  problemInput: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'lightblue',
    width: '90%',
    height: 130,
    marginVertical: 5,
    fontSize: 16,
  },
  nameInput: {
    borderWidth: 3,
    borderRadius: 10,
    borderColor: 'lightblue',
    width: '90%',
    height: 40,
    marginBottom: 10,
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: 'yellowgreen',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    elevation: 6,
  },
});

export default SyncScreen;
