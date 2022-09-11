import { Keyboard, Platform, StyleSheet, Text, View } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Avatar } from "react-native-elements";
import { AntDesign, FontAwesome, Ionicons } from "@expo/vector-icons";
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView } from 'react-native';
import { ScrollView, TextInput } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import * as firebase from "firebase";
import { db, auth } from "../firebase";


const OrderScreen = ({ navigation, route }) => {
  
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Order",
      headerBackTitleVisible: false,
      headerTitleAlign: "left",
      headerTitle: () => (
        <View style={{
          flexDirection: "row",
          alignItems: "center",
        }}>
          <Avatar 
          rounded 
          source={{
             uri: messages[0]?.data.photoURL,
            
          }} />
          <Text
            style={{ color: "#fff", marginLeft: 10, fontWeight: "700" }}>
            {route.params.orderName}
          </Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
        style={{ marginLeft: 10}}
        onPress={navigation.goBack}>
          <AntDesign name='arrowleft' size={24} color="#fff" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View 
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 80,
            marginRight: 20,
          }} >
          <TouchableOpacity >
            <FontAwesome name='video-camera' size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name='call' size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      ),
    });  
  }, [navigation, messages]);

  const sendMessage = () => {
    Keyboard.dismiss();

    db.collection ("orders").doc(route.params.id).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL,
    })

    setInput("");
  };

  useLayoutEffect(() => {
    const unsubscribe = db
    .collection("orders").
    doc(route.params.id)
    .collection("messages")
    .orderBy("timestamp", "desc")
    .onSnapshot(snapshot => setMessages
      (snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),


    }))))
    
    return unsubscribe;

  }, [route])

  return (
    <SafeAreaView 
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}>
      <StatusBar style="light" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView contentContainerStyle= {{ paddingTop: 15 }}>
              {messages.map(({id, data}) => 
                data.email === auth.currentUser.email ? (
                  <View key={id} style={styles.reciever}>
                    <Avatar 
                      position="absolute"
                      rounded
                      //for web 
                      containerStyle={{
                        position: 'absolute',
                        bottom: -15,
                        right: -5

                      }}
                      bottom={-15}
                      right={-5} 
                      size={30}
                      source={{
                        uri: data.photoURL,
                      }}
                    />
                    <Text style={styles.recieverText}>
                      {data.message}
                    </Text>
                  </View>

                ) : (
                  <View key={id} style={styles.sender}>
                      <Avatar
                        position="absolute"
                        bottom={-15}
                        left={-5}
                        rounded
                        size={30}
                        source={{
                          uri: data.photoURL,
                        }} />
                      <Text style={styles.senderText}> {data.message} </Text>
                      <Text style={styles.senderName}> {displayName } </Text>
                  </View>
                )
              )}
            </ScrollView>
            <View style={styles.footer}>
              <TextInput 
                value={input} 
                onChangeText={text => setInput(text)} 
                onSubmitEditing={sendMessage}
                placeholder='Order Message' 
                style={styles.textInput}
                />
              <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                <Ionicons name="send" size={24} color="#761486" />
              </TouchableOpacity>   
            </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};


export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  reciever: {
    padding: 15,
    backgroundColor: "#e8bcf0",
    alignSelf: "flex-end",
    borderRadius: 20,
    margin: 15,
    maxWidth: "80%",
    position: "relative",
  },
  sender: {
    padding: 15,
    backgroundColor: "#e8b",
    alignSelf: "flex-start",
    borderRadius: 20,
    marginRight: 15,
    marginBottom: 20,
    maxWidth: "80%",
    position: "relative",

  },
  senderText: {
    fontWeight: "500",
    color: "#fff",
    marginLeft: 10,
    marginBottom: 15,

  },
  recieverText: {
    fontWeight: "500",
    color: "#fff",
    marginLeft: 10,
    marginBottom: 15,

  },
  senderName: {
    left: 10,
    paddingRight: 10,
    fontSize: 10,
    color: "#fff",

  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,

  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    backgroundColor: "#e8bcf0",
    padding: 10,
    color: "grey",
    borderRadius: 30,

  },
});