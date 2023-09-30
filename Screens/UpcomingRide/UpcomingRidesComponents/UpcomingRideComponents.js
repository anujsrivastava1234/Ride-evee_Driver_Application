/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {TextInput} from 'react-native';
import {View, Text, StyleSheet} from 'react-native';
import {TruckIcon} from 'react-native-heroicons/outline';
import tw from 'twrnc';
import {MagnifyingGlassIcon} from 'react-native-heroicons/outline';
const UpcomingRideComponents = () => {
  const [data, setData] = useState([]);

  // const searchURL = async (text) => {
  //   const url = `http://10.0.2.2:3000/users/?q=${text}`;
  //   let result = await fetch(url);
  // }

  const getAPIData = async text => {
    const url = `http://10.0.2.2:3000/users?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    // console.warn(result);
    if (result) {
      setData(result);
    }
  };
  useEffect(() => {
    getAPIData();
  }, []);
  return (
    <View>
      <View
        style={{
          borderColor: '#60A547',
          borderWidth: 2,
          margin: 10,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <MagnifyingGlassIcon color={'gray'} />
        <TextInput
          placeholder="Enter The Customer Id"
          onChangeText={text => getAPIData(text)}
        />
      </View>
      {data
        ? data.map(item => (
            <View style={[Styles.ViewComponents]}>
              <View style={[tw`ml-4`, Styles.InnerContainer]}>
                <TruckIcon color={'gray'} />
                <View style={[tw`ml-3`]}>
                  <Text style={[Styles.VehicleName]}>{item.cabName}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Text style={[tw`m-1`, Styles.VehicleDetails]}>
                      {item.timming}
                    </Text>
                    <Text style={Styles.VehicleDetails}>4 min away</Text>
                  </View>
                </View>
              </View>
              <View style={{fontSize: 20, justifyContent: 'center'}}>
                <Text>{item.price}</Text>
                <Text>Customer ID : {item.custID}</Text>
              </View>
            </View>
          ))
        : null}
    </View>
  );
};

const Styles = StyleSheet.create({
  InnerContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  VehicleName: {
    color: '#60A547',
    fontFamily: 'Uber Move',
    fontSize: 25,
    fontStyle: 'normal',
    letterSpacing: 0.166,
  },
  ViewComponents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    borderWidth: 1,
    borderColor: '#60A547',
    borderRadius: 5,
    padding: 5,
  },
  VehicleDetails: {
    color: 'gray',
    fontFamily: 'Uber Move Text',
    fontSize: 15,
    fontStyle: 'normal',
  },
});
export default UpcomingRideComponents;
