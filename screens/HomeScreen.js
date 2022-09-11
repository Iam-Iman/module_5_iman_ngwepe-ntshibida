import { StyleSheet, Text, View, ScrollView} from 'react-native';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import CustomListItem from '..components/CustomListItem';
import { Avatar } from 'react-native-elements';
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons';
import { auth, db } from "../firebase";


const HomeScreen = ({navigation}) => {

  const [orders, setOrders] = useState([]);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });

  };

  useEffect(() => {
    const unsubscribe = db.collection("orders").onSnaphhot(snapshot => (
      setOrders(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    ))
    return unsubscribe;
  }, [])
  

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "OhhDah",
      headerStyle: { backgroundColor: "#fff"},
      headerTitleStyle: {color: "#000"},
      headerTintColor: "#000",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
          <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
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


const enterOrder = (id, orderName) => {
  navigation.navigate("Order", {
    id, 
    orderName,
  });
};

  return(
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {orders.map(({id, data: { orderName }}) => (
          <CustomListItem 
          key={id} 
          id={id} 
          orderName={orderName}
          enterOrder={enterOrder} />

        ))}
      </ScrollView>
    </SafeAreaView>

  );
};

 
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
