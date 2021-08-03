import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import { TouchableOpacity,View, Text, TextInput, ScrollView,Linking,Platform} from 'react-native';
import{StyleSheet} from 'react-native';
import firestore from  "@react-native-firebase/firestore";
import {useState} from "react";
import  {useEffect } from 'react';
import {FlatList} from 'react-native';
import {App} from '../App'
import { Connect, useSelector } from 'react-redux';



export const Orders= ({userId}) => {
    const username=useSelector(state=>state.login.username)
    let [listData, setListData] = useState([]);
    useEffect(() => {
      firestore()
        .collection('Users')
        .where('email','==',username.toString())
        .get()
        .then((querySnapshot) => {
        
          let temp = [];
          console.log('Total users: ', querySnapshot.size);
          querySnapshot.forEach((documentSnapshot) => {
            console.log('user Id: ', documentSnapshot.id);
            let userDetails = {};
            // Document fields
            userDetails = documentSnapshot.data();
            // All the document related data
            userDetails['id'] = documentSnapshot.id;
            temp.push(userDetails);
            setListData(temp);
          });
        });
    }, []);
  
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
  };
  
