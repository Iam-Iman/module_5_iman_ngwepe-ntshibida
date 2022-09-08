// Libraries
import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input, Image } from "react-native-elements";
import { KeyboardAvoidingView } from "react-native";
import logo from "./assets/logo.png";
 
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.image} source={logo} />
        <View style={styles.inputContainer}>
          <Input placeholder="Email" placeholderTextColor="#708090"autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)}/>
          <Input 
            placeholder="Password" 
            placeholderTextColor="#708090"
            secureTextEntry type="password" 
            value={password}
            onChangeText={(text) => setPassword(text)}
            onSubmitEditing={signIn}
          
          />

        </View>

        <Button onPress={() => navigation.navigate("Home")} containerStyle={styles.loginButton} type="outline" title="Login" />
        <Button onPress={() => navigation.navigate("Register")} containerStyle={styles.registerButton} type="outline" title="Register" />
        <View style={{ height: 100 }} />

    </KeyboardAvoidingView>

  );
};
    
export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  registerButton: {
    width: 200,
    marginTop: 10,
    backgroundColor: "#761486",
  
  },
  loginButton:{
    width: 200,
    marginTop: 10,
    backgroundColor: "#e8bcf0",
  },

  image: {
    height: 300,
    width: 400, 
  }
});

    





