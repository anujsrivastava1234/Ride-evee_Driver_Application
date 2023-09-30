/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import tw from 'twrnc';
import {ArrowPathIcon, PlusCircleIcon} from 'react-native-heroicons/outline';
import IconInfoContainer from '../IconInfoContainer/LocationInfoContainer/LocationInfoContainer';
import DashedLine from '../DashedLine/DashedLine';
import TravelVehicleInfoComponents from '../IconInfoContainer/TravelVehicleInfoComponents/TravelVehicleInfoComponents';
const RideInfoComponent = () => {
  return (
    <View style={Styles.Container}>
      <View style={[tw`flex flex-row `, Styles.Uppercontainer]}>
        <View style={tw`flex flex-row m-5`}>
          <ArrowPathIcon style={{color: '#60A547'}} />
          <Text style={Styles.IdText}>1234TR1876D</Text>
        </View>
        <View>
          <Text style={Styles.TripType}> - Round Trip</Text>
        </View>
      </View>
      {/* <View style={tw`flex flex-row m-5`}>
        <View style={Styles.IconContainer}>
          <PlusCircleIcon style={{color: '#60A547'}} />
        </View>
        <Text style={tw`ml-5 text-xm font-medium text-green-600  items-center`}>
          Ghaziabad, Uttar Pradesh, India
        </Text>
      </View> */}
      <IconInfoContainer
        icons={<PlusCircleIcon />}
        text={`Ghaziabad, Uttar Pradesh, India`}
      />
      <View style={tw`flex`}>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
      </View>

      <View>
        <IconInfoContainer text={`Agra, Uttar Pradesh, India`} />
      </View>
      <View>
        <IconInfoContainer text={`Lucknow, Uttar Pradesh, India`} />
      </View>
      <DashedLine />
      <TravelVehicleInfoComponents
        text={`Ertiga, Innova, Xylo, Suv Similar ( AC ) 6+1`}
      />
      <TravelVehicleInfoComponents
        text={`Ertiga, Innova, Xylo, Suv Similar ( AC ) 6+1`}
      />
      <View style={Styles.verticalLine} />
      <TravelVehicleInfoComponents
        text={`Ertiga, Innova, Xylo, Suv Similar ( AC ) 6+1`}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  Container: {
    margin: 20,
  },
  Uppercontainer: {
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
  },
  IdText: {
    color: '#0B0B0B',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 17,

    marginLeft: 10,
  },
  TripType: {
    color: '#60A547',
    textAlign: 'center',
    fontFamily: 'Lato',
    fontSize: 20,
    marginRight: 25,
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
  verticalLine: {
    width: 2,
    height: 20,
    backgroundColor: '#60A547',
    marginLeft: 40,
  },
});
export default RideInfoComponent;
