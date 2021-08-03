import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity,View, Text, TextInput, ScrollView,Linking,Platform, Alert} from 'react-native';
import{StyleSheet} from 'react-native';
import firestore from  "@react-native-firebase/firestore";
import {useState} from "react";
import  {useEffect } from 'react';
import {FlatList} from 'react-native';
import {App} from '../../App'
import { connect, useSelector } from 'react-redux';
import {Picker} from '@react-native-picker/picker';
import{Button} from 'react-native';
import { fetchUsers } from '../../Reduxx';
import { useSafeArea } from 'react-native-safe-area-context';






 export function testOrder({listData,fetchUsers}){


const itemSeparatorView = () => {
  return (
    <View
      style={{
        height: 0.2,
        width: '100%',
        backgroundColor: '#808080'
      }} />
  );
};
let itemView = ({item}) => {
    
  return (
    <View
      key={item.name}
      style={{
        backgroundColor: 'white',
        padding: 20
      }}>
      <Text>Doc Id: {item.id}</Text>
      <Text>Order Type: {item.type}</Text>
      <Text>Trousers: {item.Trousers}</Text>
      <Text>Jacket/Blazers: {item.jackets}</Text>
      <Text>Shirts: {item.shirts}</Text>
      <Text>Total price: {item.Total_Price}</Text>
     
     
    </View>
  );
};

return (
  <View>
    <FlatList
      data={listData}
      ItemSeparatorComponent={itemSeparatorView}
      keyExtractor={(item, index) => index.toString()}
      renderItem={itemView}
    />
  </View>
);
   
   
}

const mapStateToProps=state=>{
  return{
      listData:state.wash
  }
}

const mapDispatchToProps=dispatch=>{
  return{
      fetchUsers:()=>dispatch(fetchUsers({userId}))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(testOrder)

