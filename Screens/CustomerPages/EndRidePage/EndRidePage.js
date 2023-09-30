/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import tw from 'twrnc';
const EndRidePage = props => {
  return (
    <View>
      <View style={[tw`flex flex-row `, Styles.ButtonView]}>
        <TouchableOpacity
          style={tw`bg-green-500 p-5 mt-2 rounded-lg flex-row flex justify-center w-40`}>
          <Text style={tw`text-xl text-white flex-1 ml-2`}>Pause Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-green-500 p-5  mt-2 rounded-lg flex-row flex justify-center w-40`}
          onPress={() => props.navigation.navigate('RecieptPageScreen')}>
          <Text style={tw`text-xl text-white flex-1 ml-2`}>End Ride</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  ButtonView: {
    justifyContent: 'space-around',
  },
});
export default EndRidePage;
