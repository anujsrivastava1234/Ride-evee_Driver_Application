/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import tw from 'twrnc';
import {ArrowRightIcon} from 'react-native-heroicons/outline';
import Elevations from 'react-native-elevation';
import CustomerDetails from '../RideComponents/CustomerDetails/CustomerDetails';
import PickUpDetails from '../RideComponents/PickUpDetails/PickUpDetails';
import TripInformation from '../RideComponents/TripInformation/TripInformation';

const ReachedPickUpPage = () => {
  return (
    <View style={{backgroundColor: 'whitesmoke'}}>
      <TouchableOpacity
        style={tw`bg-green-500 p-5 m-5 rounded-lg flex-row flex justify-center`}>
        <Text style={tw`text-xl text-white flex-1 ml-2`}>
          Reached Pickup Point
        </Text>
        <Text>
          <ArrowRightIcon size={20} color="white" />
        </Text>
      </TouchableOpacity>
      <View style={[tw`flex shadow-black shadow-md shadow-opacity-50`]}>
        <View
          style={[
            Elevations[6],
            tw`flex flex-col text-center  mt-1 ml-4 mr-4 bg-white rounded-lg`,
          ]}>
          <CustomerDetails />
          <PickUpDetails />
          <TripInformation />
          <View>
            <Text style={Styles.FontSize}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  InputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns items at the start and end of the row
    alignItems: 'center',
    marginBottom: 10,
  },
  FontSize: {
    fontSize: 10,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
});
export default ReachedPickUpPage;
