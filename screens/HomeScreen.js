import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import CustomListItem from '..components/CustomListItem';
import { Avatar } from 'react-native-elements';
import iman from '.assets/iman.jpeg';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {

  const signOutUser = () => {

  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "OhhDah",
      headerStyle: { backgroundColor: "#fff"},
      headerTitleStyle: {color: "#000"},
      headerTintColor: "#000",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity activeOpacity={0.5}>
          <Avatar rounded source={{}} />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => (
        <View style={{
          flexDirection:"row",
          justifyContent: "space-between",
          width: 80,
          marginRight: 20,
        }}>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name="camerao" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("AddOrder")} activeOpacity={0.5}>
            <SimpleLineIcons name="pencil" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return(
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>

  );
};

 
export default HomeScreen;

const styles = StyleSheet.create({});
