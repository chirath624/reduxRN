

import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { View, Text } from 'react-native'
import{StyleSheet} from 'react-native'
import{TextInput} from 'react-native'
import{Button} from 'react-native'
import{Alert} from  'react-native'
import {useState} from "react";
import {register} from './Register';
import auth from '@react-native-firebase/auth';
import { MainHome } from './Component/MainHome';
import { useDispatch,useSelector} from 'react-redux';
import { connect } from 'react-redux';
import {App} from './App'
import {SetUsername} from './Reduxx/index'
import { Orders } from './Component/Orders';

const __isValidEmail = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

export function HomeScreen({navigation}) {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState("");
    const [isValid, setValid] = useState(true);
    const dispatch=useDispatch()
    

    const __doLogin = () => {
      if (!email) {
        setError("Email required *");
        setValid(false);
        return;
      } else if (!password && password.trim() && password.length > 6) {
        setError("Weak password, minimum 5 chars");
        setValid(false);
        return;
      } else if (!__isValidEmail(email)) {
        setError("Invalid Email");
        setValid(false);
        return;
      }
      let signInRequestData = {
        email,
        password
      };
  
      __doSingIn(email, password);

    };
   
 
    const __doSingIn = async (email, password) => {
      try {
        let response = await auth().signInWithEmailAndPassword(email, password);
        if (response && response.user) {
          Alert.alert("Success ✅", "Logged successfully");
         navigation.navigate('MainHome')
         dispatch(SetUsername(email))
        }
      } catch (e) {
        console.error(e.message);
      }
    };
  
 return (
    <View>
      
    <View style = {styles.container}>

    <TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "name"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
      />
    <TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       label={"email"}
       placeholder = "Email"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       onChangeText={text => {
          // let isValid = this.state.isValid;
          // isValid["email"] = !this.__isValidEmail(text);
        
          setValid(__isValidEmail(text));
          setEmail(text)
          
        }}
        error={isValid}
      />
    <TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       label={"password"}
       placeholder = "Password"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       onChangeText={text => setPassword(text)}
      />
      <Button
  title="Sign In"
  onPress={ __doLogin} 
/>
<Button
title="Register"
onPress={() =>navigation.navigate('register')}
/>
<Button
title="test"
onPress={() =>navigation.navigate('testOrder')}
/>


       </View>
 <View>
    <Text></Text>
 </View>

 </View>
 );
}
const styles = StyleSheet.create({
    container: {
       paddingTop: 23
    },
    input: {
       margin: 15,
       height: 40,
       borderColor: '#7a42f4',
       borderWidth: 1
    },
  
  })