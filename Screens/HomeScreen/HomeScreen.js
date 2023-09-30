/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import tw from 'twrnc';

const HomeScreen = props => {
  const [isSelected, setIsSelected] = useState(false);

  const selectedButton = props => {
    setIsSelected(!isSelected);
  };
  return (
    <View style={Styles.container}>
      <View style={Styles.innerContainer}>
        <Image source={require('../../Assets/logo.png')} />
        <Text style={Styles.welcomeText}>Welcome User!!!</Text>
        <Text style={Styles.subHeadingText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </Text>
        <TouchableOpacity
          underlayColor="transparent"
          onPress={() => props.navigation.navigate('InitateRidePage')}
          style={[Styles.TouchOpacity, isSelected && Styles.buttonPressed]}>
          <Text style={Styles.OpacityText}>Today Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.TouchOpacity}
          onPress={() => props.navigation.navigate('UpcomingPage')}>
          <Text style={Styles.OpacityText}>Upcoming Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={Styles.TouchOpacity}
          onPress={() => props.navigation.navigate('CompletedRide')}>
          <Text style={Styles.OpacityText}>Completed Ride</Text>
        </TouchableOpacity>

        <View
          style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text>Facing any issue ? </Text>
          <TouchableOpacity>
            <Text style={{color: '#60A547'}}>Send Report</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  innerContainer: {
    marginTop: 70,
    alignItems: 'center',
  },
  welcomeText: {
    color: '#585858',
    textAlign: 'center',
    fontFamily: 'Nunito-Sans',
    fontSize: 28,
    fontStyle: 'normal',
    marginTop: 20,
  },
  subHeadingText: {
    marginLeft: 33,
    marginRight: 33,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  TouchOpacity: {
    width: 273,
    height: 121,
    flexShrink: 0,
    borderRadius: 6,

    margin: 25,
    backgroundColor: '#60A547',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  OpacityText: {
    color: '#FFF',
    fontFamily: 'Roboto',
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    backgroundColor: '#60A547',
  },
});
export default HomeScreen;
