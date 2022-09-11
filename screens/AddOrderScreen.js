import { StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { Button, Input } from 'react-native-elements';


const AddOrderScreen = ({ navigation }) => {

  const [ input, setInput ] = useState("");
  
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Order",
      headerBackTitle: "Orders",
    });
  }, [navigation]);

  const createOrder = async () => {
    await db.collection('orders').add({
      orderName: input
    }).then(() => {
      navigation.goBack()
    }).catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <Input 
        placeholder='Enter an order name'
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createOrder}
        leftIcon={
          <Icon name="food" type="antdesign" size={24} color="#761486" />
        }
      />
      <Button onPress={createOrder} title="Make an order"/>    
    </View>
  );
};

export default AddOrderScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 30,
    height: "100%",

  },
});