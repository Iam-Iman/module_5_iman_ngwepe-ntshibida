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


  return (
    <View style={styles.container}>
      <Input 
        placeholder='Enter an order name'
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon name="message" type="antdesign" size={24} color="black" />
        }
      />
      <Button title="Make an order"/>
      
        
    </View>
  );
};

export default AddOrderScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",

  },

});