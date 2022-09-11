// Libraries
import React, { useEffect, useState } from "react";
import { KeyboardAvoidingView, StyleSheet, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Button, Input } from "react-native-elements";
import logo from "./assets/logo.png";
import { BorderHorizontalOutlined } from "@ant-design/icons";
import { auth } from "../firebase";
 
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");BorderHorizontalOutlined
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      // to check on console if User did log in
      console.log(authUser);
      if(authUser) {
        navigation.replace("Home");
      }
    });
    return unsubscribe;
  }, [])

  const signIn = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error));
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image style={styles.image} source={logo} />
        <View style={styles.inputContainer}>
          <Input placeholder="Email" placeholderTextColor="#708090" autoFocus type="email" value={email} onChangeText={(text) => setEmail(text)}/>
          <Input 
            placeholder="Password" 
            placeholderTextColor="#708090"
            secureTextEntry type="password" 
            value={password}
            onChangeText={(text) => setPassword(text)}  
            onSubmitEditing={signIn}      
          />
        </View>

        <Button onPress={signIn} containerStyle={styles.loginButton} type="outline" title="Login" />
        <Button onPress={() => navigation.naviagate("Register")} containerStyle={styles.registerButton} type="outline" title="Register" />
        <View style={{ height: 100 }} />
  </KeyboardAvoidingView>

  );
};


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
  },
});

export default LoginScreen;
    





