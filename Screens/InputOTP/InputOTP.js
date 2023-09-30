/* eslint-disable prettier/prettier */
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Image,
  TextInput,
} from 'react-native';

const InputOTP = props => {
  let textInput = useRef(null);
  const lengthInput = 6;
  const [intervalVal, setInteralVal] = useState('');
  const onChangeText = val => {};
  useEffect(() => {
    textInput.focus();
  }, []);

  return (
    <View style={Styles.container}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={50}
        behavior={'padding'}
        style={Styles.containerAvoidingView}>
        <Image source={require('../../Assets/logo.png')} />
        <Text style={Styles.textTitle}>
          {'Input your OTP code send via SMS'}
        </Text>
        <View>
          <TextInput
            ref={input => (textInput = input)}
            onChangeText={onChangeText}
            style={{width: 0, height: 0}}
            value={intervalVal}
            maxLength={lengthInput}
            returnKeyType="done"
            keyboardType="numeric"
          />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerAvoidingView: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  textTitle: {
    marginTop: 50,
    marginBottom: 50,
    fontSize: 16,
  },
});
export default InputOTP;
