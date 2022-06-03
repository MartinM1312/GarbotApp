import React from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  View,
  Dimensions,
} from 'react-native';

const screenDimensions = Dimensions.get('screen');

const KeyboardAvoidingWrapper = props => {
  return (
    <KeyboardAvoidingView
      style={{...{flex: 1}, ...props.style}}
      keyboardVerticalOffset={50}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={{flex: 1}}>
        <ScrollView indicatorStyle="white">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{height: screenDimensions.height - 115}}>
              {props.children}
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
};

export default KeyboardAvoidingWrapper;
