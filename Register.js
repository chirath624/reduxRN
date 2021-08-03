import React, { Component } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View,Text} from 'react-native'
import{StyleSheet} from 'react-native'
import{TextInput} from 'react-native'
import{Button} from 'react-native'
import{Alert} from  'react-native'
import {useState} from "react";
import {ImageBackground} from 'react-native'
import auth from '@react-native-firebase/auth';


const __filterError = error => {
  let message = "";
  let index = error.indexOf("]");
  message = error.substr(index + 1, error.length - 1);

  return message;
};
const __isValidEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};


export function register({navigation}) {
  const [name,setname]=useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");
  const [isValid, setValid] = useState(true);


  function onresume(){

  
    async function addUser(){
        await ref.add({
          
            email:email,
            name:name,
           
        });
        setname('');
        setEmail('');
  
    }
  
  }
  const __doSignUp = () => {
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

    __doCreateUser(email, password);
  };

  const __doCreateUser = async (email, password) => {
    try {
      let response = await auth().createUserWithEmailAndPassword(email, password);
      if (response && response.user) {
        onresume();
        Alert.alert("Success ✅", "Account created successfully");
      }
    } catch (e) {
      console.error(e.message);
    }
  };

  return(
  <View>
     <View>
     <TextInput style = {styles.input}
       underlineColorAndroid = "transparent"
       placeholder = "name"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
      />
       <TextInput style = {styles.input}
       label={"email"}
       underlineColorAndroid = "transparent"
       placeholder = "Email"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       onChangeText={text => {
        setError
        setEmail(text)
      }}
      />
       <TextInput style = {styles.input}
       label={"password"}
       secureTextEntry
       underlineColorAndroid = "transparent"
       placeholder = "password"
       placeholderTextColor = "#9a73ef"
       autoCapitalize = "none"
       error={isValid}
        onChangeText={text => setPassword(text)}
       
      />
        {error ? (
        <View style={styles.errorLabelContainerStyle}>
          <Text style={styles.errorTextStyle}>{error}</Text>
        </View>
      ) : null}
        <Button
  title="Register"
  onPress={__doSignUp}
/>    
       <Text></Text> 
  </View>

  </View>
  
  )
  
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
