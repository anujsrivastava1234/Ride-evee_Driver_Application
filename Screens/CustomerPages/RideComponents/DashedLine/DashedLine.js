/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';

const DashedLine = () => {
  return <View style={Styles.DashedLine} />;
};

const Styles = StyleSheet.create({
  DashedLine: {
    marginTop: 10,
    width: 360,
    height: 2,
    borderRadius: 2,
    backgroundColor: 'lightgray',
    alignSelf: 'center',
    borderStyle: 'dashed',
  },
});
export default DashedLine;
