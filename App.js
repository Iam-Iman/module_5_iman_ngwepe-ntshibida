// Importing libraries
import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar  } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SplashScreen from './screens/SplashScreen';
import AddOrderScreen from './screens/AddOrderScreen';
import RegisterScreen from './screens/RegisterScreen';

const Stack = createStackNavigator();

const globalScreenOptions = {
    headerStyle: { backgroundColor: "#761486"},
    headerTitleStyle: { color: "#fff"},
    headerTintColor: "#fff",
};
    
export default function App () {

    return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash"
      screenOptions={globalScreenOptions}>
      <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddOrder" component={AddOrderScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};


const styles = StyleSheet.create({});