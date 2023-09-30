import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

//Starting -> Pages Login , OTP , HomeScreen . onBoarding
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import OnBoardingScreen from './Screens/OnBoardingScreen/OnBoardingScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import InputOTP from './Screens/InputOTP/InputOTP';
import RecieptPageScreen from './Screens/RecieptPageScreen/RecieptPageScreen';

//Today Ride  ->  Pages Component Import
import ReachedPickUpPage from './Screens/CustomerPages/ReachedPickUpPage/ReachedPickUpPage';
import CustBoardedPage from './Screens/CustomerPages/CustomerBoardedPage/CustBoardedPage';
import EndRidePage from './Screens/CustomerPages/EndRidePage/EndRidePage';
import InitatePickupPage from './Screens/CustomerPages/InitiatePickUpPage/InitatePickupPage';

//Upcoming Ride -> Pages Component Import
import UpcomingPage from './Screens/UpcomingRide/UpcomingPage';
import CompletedRideScreen from './Screens/CompletedRidePages/CompletedRideScreen';

//Navigators
const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

function InitateRidePage() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="InitatePickupPage" component={InitatePickupPage} />
      <Tab.Screen name="ReachedPickUpPage" component={ReachedPickUpPage} />
      <Tab.Screen name="CustBoardedPage" component={CustBoardedPage} />
      <Tab.Screen name="EndRidePage" component={EndRidePage} />
    </Tab.Navigator>
  );
}
  
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoardingScreen">
        <Stack.Screen
          name="OnBoardingScreen"
          component={OnBoardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="InputOTP" component={InputOTP} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InitateRidePage"
          component={InitateRidePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RecieptPageScreen"
          component={RecieptPageScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="UpcomingPage"
          component={UpcomingPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CompletedRide"
          component={CompletedRideScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
