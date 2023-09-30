/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OnBoardingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const navigatToLogin = setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 1000);
    return () => clearTimeout(navigatToLogin);
  }, [navigation]);
  return (
    <View style={Styles.container}>
      <Image source={require('../../Assets/logo.png')} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default OnBoardingScreen;
