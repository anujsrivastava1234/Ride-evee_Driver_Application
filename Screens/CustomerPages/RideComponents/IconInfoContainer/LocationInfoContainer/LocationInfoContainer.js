/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import tw from 'twrnc';
import {PlusCircleIcon} from 'react-native-heroicons/outline';
import {Icon} from '@rneui/base';

const LocationInfoContainer = ({icons, text}) => {
  return (
    <View style={[tw`flex flex-row m-5 mb-2 `, Styles.Container]}>
      <View style={Styles.IconContainer}>
        <PlusCircleIcon style={{color: '#60A547'}} />
      </View>
      <Text style={tw`ml-5 text-xm font-medium text-green-600  items-center`}>
        {text}
      </Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  ContaineLocationInfoContainerr: {
    alignContent: 'center',
    textAlign: 'center',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    elevation: 10,
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LocationInfoContainer;
