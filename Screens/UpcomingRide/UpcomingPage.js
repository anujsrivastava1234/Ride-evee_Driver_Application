/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {ArrowLongLeftIcon} from 'react-native-heroicons/outline';
import ELevations from 'react-native-elevation';
import tw from 'twrnc';
import UpcomingRideComponents from './UpcomingRidesComponents/UpcomingRideComponents';

const UpcomingPage = props => {
  return (
    <View style={Styles.container}>
      <View>
        <TouchableOpacity
          style={Styles.TouchOpacity}
          onPress={() => props.navigation.navigate('HomeScreen')}>
          <ArrowLongLeftIcon color={'white'} />
          <Text style={Styles.TouchableText}>Back Button</Text>
        </TouchableOpacity>
      </View>
      <View style={[tw`flex shadow-black shadow-md shadow-opacity-50`]}>
        <View
          style={[
            ELevations[4],
            tw`flex flex-col text-center  mt-5 ml-5 mr-5 mb-20 bg-white rounded-lg`,
          ]}>
          <UpcomingRideComponents />
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TouchOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 370,
    height: 70,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#60A547',
    justifyContent: 'space-between',
    padding: 20,
  },
  TouchableText: {
    color: '#FFF',
    fontFamily: 'Lato',
    fontSize: 18,
  },
});
export default UpcomingPage;
