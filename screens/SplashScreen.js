import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import splash from './assets/splash1.png';


const SplashScreen = ({navigation }) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 5000);

  if (!timePassed) {
    return (
      <View style={styles.splash}>
        <Image source={splash} style={styles.image} />
      </View>

    );
  }
  navigation.navigate("Login");
  return null;
};


const styles = StyleSheet.create({
  splash: {
    display: "flex",
    alignItems: "stretch",
    justifyContent: "center",

  },
  image: {
    width: 1242, height: 2436 

  }
});

export default SplashScreen;