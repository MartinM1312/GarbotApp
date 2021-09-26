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

const ReportScreen = props => {
  const [enteredProblem, setEnteredProblem] = useState('');
  const [enteredName, setEnteredName] = useState('');

  const inputProblemHandler = enteredProblem => {
    setEnteredProblem(enteredProblem);
  };
  const inputNameHandler = enteredName => {
    setEnteredName(enteredName);
  };

  const confirmSend = async () => {
    await Linking.openURL(
      'mailto:support@garbot.com.ec?subject= Problem from: ' +
        enteredName +
        '&body=' +
        enteredProblem,
    );
    setAlertIsVisible(false);
  };

  const sendAlert = () =>
    Alert.alert('Atención', 'GarBot enviará tu reporte utilizando tu correo', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Aceptar', onPress: confirmSend},
    ]);
  const incompleteAlert = () =>
    Alert.alert(
      'Información Incompleta',
      'Por favor completa todos los campos',
      [
        {
          text: 'Aceptar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          ¿Cuál es tu nombre?
        </Text>
        <TextInput
          placeholder=""
          onChangeText={inputNameHandler}
          value={enteredName}
          keyboardType={'default'}
          style={styles.nameInput}
        />
        <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 25}}>
          Cuéntanos brevemente tu problema
        </Text>
        <TextInput
          placeholder=""
          onChangeText={inputProblemHandler}
          value={enteredProblem}
          textAlignVertical={'top'}
          multiline={true}
          keyboardType={'default'}
          style={styles.problemInput}
        />
        <Button
          style={styles.submitButton}
          title={'Enviar'}
          onPress={
            enteredName == '' || enteredProblem == ''
              ? incompleteAlert
              : sendAlert
          }
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

ReportScreen.navigationOptions = {
  headerTitle: 'Reportar',
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

export default ReportScreen;
