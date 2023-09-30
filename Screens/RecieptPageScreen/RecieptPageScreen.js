/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';
import Elevations from 'react-native-elevation';
import RideInfoComponent from '../CustomerPages/RideComponents/RideInfoComponents/RideInfoComponent';
import {Button} from '@rneui/themed';
import RidePaymentInfo from '../CustomerPages/RideComponents/RidePaymentInfo/RidePaymentInfo';
import {Bars3BottomLeftIcon} from 'react-native-heroicons/outline';
import Icon from '@ant-design/icons/lib/components/Icon';

const RecieptPageScreen = props => {
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.UpperContainer}>
        <TouchableOpacity
          style={Styles.DrawerButton}
          // onPress={props.navigation.navigate('OnBoardingScreen')}>
        >
          <Bars3BottomLeftIcon color={'white'} />
        </TouchableOpacity>
        <TouchableOpacity style={Styles.PostBooking}>
          <Text style={{color: 'white', fontSize: 16}}>+ Post Booking</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{marginBottom: 30}}>
        <View style={[tw`flex shadow-black shadow-md shadow-opacity-50`]}>
          <View
            style={[
              Elevations[6],
              tw`flex flex-col text-center  mt-5 ml-5 mr-5 mb-10 bg-white rounded-lg`,
            ]}>
            <RideInfoComponent />
          </View>
          <View
            style={[
              Elevations[6],
              tw`flex flex-col text-center  mt-1 ml-5 mr-5 mb-20 bg-white rounded-lg`,
            ]}>
            <RidePaymentInfo />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
  },
  BottomContainer: {
    // flexDirection: 'column',
    // justifyContent: 'flex-end',
    height: 400,
    width: '100%',
    backgroundColor: 'white',
  },
  PaymentText: {
    color: '#000',
    fontFamily: 'Nunito Sans',
    fontSize: 20,
  },
  PostBooking: {
    height: 50,
    width: 150,
    backgroundColor: '#60A547',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },

  DrawerButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: '#60A547',
  },
  UpperContainer: {
    margin: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexGrow: 2,
    flexShrink: 1,
  },
});
export default RecieptPageScreen;
