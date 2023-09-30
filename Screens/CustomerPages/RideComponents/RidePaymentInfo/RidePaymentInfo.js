/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ArrowPathIcon, PlusCircleIcon} from 'react-native-heroicons/outline';
import {Text} from 'react-native';
import tw from 'twrnc';
import Line from '../Line/Line';

const RidePaymentInfo = () => {
  return (
    <View>
      <View style={[tw`flex flex-row `, Styles.Uppercontainer]}>
        <View>
          <View style={[tw`flex flex-row`, Styles.InnerContainer]}>
            <ArrowPathIcon style={{color: '#60A547'}} />
            <View style={tw`ml-2`}>
              <Text style={Styles.UpperText}>Estimated Fare</Text>
              <Text style={Styles.LowerText}>634 Km, 4 day 11 Hours</Text>
            </View>
          </View>
        </View>
        <Text style={Styles.TotalPrice}>Rs. 12345</Text>
      </View>
      <View>
        <View style={Styles.UpperPriceContainer}>
          <View style={Styles.InfoBox}>
            <Text style={Styles.PriceInfoLabel}>Total Distance Covered</Text>
            <Text style={Styles.PriceInfoData}>700Km</Text>
          </View>
          <View style={Styles.InfoBox}>
            <Text style={Styles.PriceInfoLabel}>Extra km</Text>
            <Text style={Styles.PriceInfoData}>66Km</Text>
          </View>
        </View>
        <View style={Styles.LowerPriceContainer}>
          <View style={Styles.InfoBox}>
            <Text style={Styles.PriceInfoLabel}>Extra Fare @ $12/Km</Text>
            <Text style={Styles.PriceInfoData}>Rs 792</Text>
          </View>
          <View style={Styles.InfoBox}>
            <Text style={Styles.PriceInfoLabel}>
              Night Allowance @ Rs.300/day
            </Text>
            <Text style={Styles.PriceInfoData}>Rs.1200</Text>
          </View>
          <View style={Styles.InfoBox}>
            <Text style={Styles.PriceInfoLabel}>Night Driver Allowance</Text>
            <Text style={Styles.PriceInfoData}>$123</Text>
          </View>
          <View style={Styles.InfoBox}>
            <Text style={Styles.PriceInfoLabel}>Booking Fee</Text>
            <Text style={Styles.PriceInfoData}>$123</Text>
          </View>
          <View style={Styles.InfoBox}>
            <Text style={Styles.PriceInfoLabel}>Taxes @incl. .........</Text>
            <Text style={Styles.PriceInfoData}>$123</Text>
          </View>
        </View>

        <Line />
        <View style={Styles.InfoBox}>
          <Text style={Styles.TotalPriceInfoLabel}>Total</Text>
          <Text style={Styles.TotalPriceInfoData}>$1230</Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  Uppercontainer: {
    justifyContent: 'space-between',
    margin: 10,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 1,
    padding: 10,
  },
  TotalPrice: {
    color: '#585858',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 18,
  },
  InnerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  UpperText: {
    color: '#60A547',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 18,
  },
  LowerText: {
    color: 'rgba(88, 88, 88, 0.56)',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 10,
  },
  InfoBox: {
    margin: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  PriceInfoLabel: {
    color: '#585858',
    fontFamily: 'Nunito Sans',
    fontSize: 15,
  },
  TotalPriceInfoLabel: {
    color: '#585858',
    fontFamily: 'Nunito Sans',
    fontSize: 20,
  },
  TotalPriceInfoData: {
    color: '#585858',
    fontFamily: 'Nunito Sans',
    fontSize: 20,
  },
  PriceInfoData: {
    color: '#585858',
    fontFamily: 'Nunito Sans',
    fontSize: 15,
  },
  UpperPriceContainer: {
    marginBottom: 74,
  },
  LowerPriceContainer: {
    marginBottom: 10,
  },
});
export default RidePaymentInfo;
