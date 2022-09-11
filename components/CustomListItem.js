import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ListItem, Avatar } from 'react-native-elements';
import { db} from "../firebase";

const CustomListItem = ({ id, orderName, enterOrder }) => { 

  const [orderMessages, setOrderMessages] = useState([]);

  useEffect (() => {
    const unsubscribe = db.collection("orders").doc(id).collection("messages").orderBy("timestamp", "desc").onSnapshot(snapshot => (
      setOrderMessages(snapshot.docs.map(doc => doc.data()))
    )); 
    return unsubscribe;

  });

  return (
    <ListItem key={id} onPress={() => enterOrder(id, chatName)} bottomDivider>
      <Avatar 
      rounded 
      source={{
        uri: orderMessage?.[0]?.photoURL || 
         "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
      }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          {orderName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          {orderMessages?.[0]?.displayName}: {orderMessages?.[0]?.message}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};
  

export default CustomListItem;

const styles = StyleSheet.create({});