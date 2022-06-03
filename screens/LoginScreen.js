import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LoginButton from '../components/Button';
import PasswordRecovery from '../components/TouchableText';
import {colors} from '../constants/colors';
import {fonts} from '../constants/fonts';

const LoginScreen = props => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback
        style={{flex: 1}}
        onPress={() => Keyboard.dismiss()}>
        <View style={styles.loginContainer}>
          <View style={{alignItems: 'center'}}>
            <Image
              style={styles.logoContainer}
              source={require('../assets/img/leafs2.png')}
            />
            <Text style={styles.logoTittle}>GarBot</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.credentialsContainer}>
              <Text style={styles.inputTitle}>User</Text>
              <TextInput style={styles.input} />
              <Text style={styles.inputTitle}>Password</Text>
              <TextInput style={styles.input} />
            </View>
            <View style={styles.buttonsContainer}>
              <LoginButton
                title={'Login'}
                style={styles.loginButton}
                onPress={() => console.log('Login')}
              />
              <PasswordRecovery
                title={'Forgot Password?'}
                onPress={() => console.log('Recover Password')}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export const LoginScreenOptions = navData => {
  return {headerTitle: 'Login'};
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    width: 250,
    height: 150,
    marginTop: 100,
  },
  inputTitle: {
    fontSize: 15,
    color: colors.primaryColor,
    fontFamily: fonts.bold,
  },
  credentialsContainer: {
    width: '100%',
    padding: 30,
  },
  input: {
    marginTop: 10,
    marginBottom: 20,
    height: 35,
    borderRadius: 10,
    fontFamily: fonts.regular,
    fontSize: 15,
    //ios
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.3,
    backgroundColor: 'white',
    //android
    elevation: 7,
  },
  loginButton: {
    backgroundColor: colors.primaryColor,
    width: '90%',
  },
  logoTittle: {
    fontFamily: fonts.bold,
    fontSize: 20,
    color: colors.primaryColor,
  },
  content: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
  },
  buttonsContainer: {
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
});

export default LoginScreen;
