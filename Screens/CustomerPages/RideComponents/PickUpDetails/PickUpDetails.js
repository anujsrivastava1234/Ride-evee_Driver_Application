/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import tw from 'twrnc';
import {StyleSheet} from 'react-native';
import Line from '../Line/Line';

const PickUpDetails = () => {
  return (
    <View
      style={tw`border-2 border-solid rounded-lg border-gray-300 m-1 ml-4 mr-4`}>
      <Text style={Styles.InputHeading}>Pick Up Details</Text>
      <Line />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 70,
          marginRight: 50,
        }}>
        <View style={Styles.InputContainer}>
          <Text style={Styles.InputLabel}>Date and Time</Text>
          <Text style={Styles.InputValue}>16-Aug-2023 09:30 PM</Text>
        </View>
        <View style={Styles.InputContainer}>
          <Text style={Styles.InputLabel}>Address</Text>
          <Text style={Styles.InputValue}>qwerty</Text>
        </View>
        <View style={Styles.InputContainer}>
          <Text style={Styles.InputLabel}>Arrival Details</Text>
          <Text style={Styles.InputValue}>######</Text>
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
    marginBottom: 5,
  },
  InputLabel: {
    flex: 1, // This will make the label take up as much space as possible
    color: '#585858',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'left', // Align the text to the left
  },
  InputValue: {
    // This will make the value take up more space
    flex: 1,
    color: '#585858',
    fontSize: 14,
    fontStyle: 'normal',
    textAlign: 'left', // Align the text to the left
    alignItems: 'center',
  },
  InputHeading: {
    textAlign: 'center', // Center-align the heading
    color: '#585858',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: 'normal',
  },
});
export default PickUpDetails;
