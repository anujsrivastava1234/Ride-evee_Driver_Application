/* eslint-disable prettier/prettier */
import React from 'react';
import {ArrowLeftIcon, TruckIcon} from 'react-native-heroicons/outline';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
} from 'react-native';
import ELevations from 'react-native-elevation';

import tw from 'twrnc';
import CompletedRideComponents from './CompletedRideComponents/CompletedRideComponents';
const CompletedRideScreen = props => {
  return (
    <SafeAreaView style={{margin: 5}}>
      <TouchableOpacity
        style={Styles.TouchableOpacity}
        onPress={() => props.navigation.navigate('HomeScreen')}>
        <ArrowLeftIcon color="white" />
      </TouchableOpacity>
      <View style={[tw`flex shadow-black shadow-md shadow-opacity-50`]}>
        <View
          style={[
            ELevations[4],
            tw`flex flex-col text-center  mt-5 ml-2 mr-2 mb-20 bg-white rounded-lg`,
          ]}>
          <ScrollView style={{marginBottom: 30}}>
            <CompletedRideComponents />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  TouchableOpacity: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#60A547',
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#60A547',
  },
});
export default CompletedRideScreen;
