/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';

const Line = () => {
  return <View style={Styles.Line} />;
};

const Styles = StyleSheet.create({
  Line: {
    width: 300,
    height: 1,
    borderRadius: 25,
    backgroundColor: 'lightgray',
    alignSelf: 'center',
    marginTop: 5,
  },
});
export default Line;
