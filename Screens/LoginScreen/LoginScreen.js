/* eslint-disable prettier/prettier */
import React, {useState, useRef, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = props => {
  let textInput = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState();
  const [focusInput, setFocusInput] = useState();
  const onChangePhone = number => {
    setPhoneNumber(number);
  };
  const onPressContinue = () => {
    if (phoneNumber) {
      props.navigation.navigate('HomeScreen');
    }
  };

  const onChangeFocus = () => {
    setFocusInput(true);
  };

  const onChangeBlur = () => {
    setFocusInput(false);
  };

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
          {'Please Enter your mobile Phone Number'}
        </Text>
        <View style={Styles.containerInput}>
          <View style={Styles.openDialogView}>
            <Text>{'+91 | '}</Text>
          </View>
          <TextInput
            ref={input => (textInput = input)}
            style={Styles.phoneInputText}
            placeholder="1123456789"
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={onChangePhone}
            secureTextEntry={false}
            onFocus={onChangeFocus}
            onBlur={onChangeBlur}
          />
        </View>

        <View style={Styles.viewBottom}>
          <TouchableOpacity onPress={onPressContinue}>
            <View
              style={[
                Styles.btnContinue,
                {
                  backgroundColor: phoneNumber ? '#60A547' : 'gray',
                },
              ]}>
              <Text style={Styles.textContinue}>Submit</Text>
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    marginTop: 38,
    fontSize: 18,
    color: '#000',
    fontStyle: 'bold',
  },
  textInput: {
    marginTop: 10,
    borderRadius: 5,
    width: 350,
  },
  containerAvoidingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    marginTop: 50,
  },
  textTitle: {
    marginBottom: 20,
    marginTop: 40,
    fontSize: 16,
  },
  containerInput: {
    marginHorizontal: 40,
    flexDirection: 'row',
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: 'white',
    alignItems: 'center',
    borderBottomColor: 1.5,
  },
  openDialogView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  phoneInputText: {
    marginLeft: 5,
    flex: 1,
    height: 50,
  },
  viewBottom: {
    justifyContent: 'center',
    marginBottom: 50,
    marginTop: 25,
    alignItems: 'center',
  },
  btnContinue: {
    width: 350,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#60A547',
  },
  textContinue: {
    color: '#ffffff',
    alignItems: 'center',
  },
});
export default LoginScreen;
