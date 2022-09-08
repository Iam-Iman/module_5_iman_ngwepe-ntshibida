import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import CustomListItem from '..components/CustomListItem';
import { Avatar } from 'react-native-elements';
import iman from '.assets/iman.jpeg';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';

const HomeScreen = ({navigation}) => {

  const [orders, setOrders] = useState([]),

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Ohh Dah",
      headerStyle: { backgroundColor: "#ffffff" },
      headerTitleStyle: { color: "#761486" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity activeOpacity={0.5}>
            <Avatar rounded source={iman}/>
          </TouchableOpacity>
        </View>

      ),
      headerRight: () => (
        <View style={{
          flexDirection: 'row',
          justifyContent: "space-between",
          width: 80,
          marginRight: 20,
        }}>
          <TouchableOpacity activeOpacity={0.5}>
            <AntDesign name='camerao' size={24} color='black' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.naviagate("AddOrder") } activeOpacity={0.5}>
            <SimpleLineIcons name='pencil' size={24} color='black' />
          </TouchableOpacity>
        </View>
      ),
    });

  }, [navigation])


  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
