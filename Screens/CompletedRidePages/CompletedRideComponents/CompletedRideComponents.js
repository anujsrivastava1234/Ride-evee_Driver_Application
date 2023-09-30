/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {ArrowLeftIcon, TruckIcon} from 'react-native-heroicons/outline';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const CompletedRideComponents = () => {
  const [data, setData] = useState([]);

  const getCompletedRideData = async text => {
    const url = `http://10.0.2.2:3000/CompletedRideData?q=${text}`;
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
  };

  useEffect(() => {
    getCompletedRideData();
  }, []);

  return (
    <View>
      <TextInput
        style={Styles.TextInput}
        placeholder="Enter the customer ID"
        onChangeText={text => getCompletedRideData(text)}
      />
      {data
        ? data.map(item => (
            <View
              style={{
                borderWidth: 1,
                margin: 15,
                borderColor: '#60A547',
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TruckIcon color="gray" />
                <View>
                  <View style={{flexDirection: 'column', margin: 20}}>
                    <Text>
                      {item.startingDate} {''}
                      {item.startTimming}
                    </Text>
                    <Text
                      style={{fontSize: 15, fontStyle: 'bold', color: 'black'}}>
                      {item.startingPoint}
                    </Text>
                  </View>
                  <View style={{flexDirection: 'column', margin: 20}}>
                    <Text>{item.endTimming}</Text>
                    <Text
                      style={{fontSize: 15, fontStyle: 'bold', color: 'black'}}>
                      Science Lab Bus Station
                    </Text>
                    <Text>Ride ID : {item.rideID}</Text>
                  </View>
                </View>
                <View
                  style={{
                    height: 120,
                    width: 2,
                    backgroundColor: '#60A547',
                  }}
                />
                <View>
                  <View style={{flexDirection: 'column', margin: 20}}>
                    <Text>Travel Time</Text>
                    <Text
                      style={{fontSize: 15, fontStyle: 'bold', color: 'black'}}>
                      1h 0min
                    </Text>
                  </View>
                  <View style={{flexDirection: 'column', margin: 20}}>
                    <Text>Travel Costs</Text>
                    <Text
                      style={{fontSize: 15, fontStyle: 'bold', color: 'black'}}>
                      $127.8
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          ))
        : null}
    </View>
  );
};

const Styles = StyleSheet.create({
  TextInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#60A547',
    margin: 10,
  },
});
export default CompletedRideComponents;
