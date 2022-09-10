import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ListItem, Avatar } from 'react-native-elements';

const CustomListItem = () => {
  return (
    <ListItem>
      <Avatar rounded source={{
        uri: "https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png",
      }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>
          Food Orders
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Do place your orders here, specify your exact order from our menu. 
          Then put your address and contact details. 
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};
  

export default CustomListItem;

const styles = StyleSheet.create({});