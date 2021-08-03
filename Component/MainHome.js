import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, View } from 'react-native';
import {Text } from 'react-native';
import{Button} from 'react-native';
import { Connect, useSelector } from 'react-redux';
import {Dryiron} from './DryIron';
import { Orders } from './Orders';
import { Washing } from './Washing/Washning';
import { Cleaning } from './Cleaning/cleaning';
import { testOrderfire } from './Washing/firestore';
import { washdress } from './Wash/washdress';




const Stack = createStackNavigator();
 function menu(){
 return(
  <NavigationContainer> 
  <Stack.Navigator>
  <Stack.Screen name="Dryiron" component={Dryiron}/>
  <Stack.Screen name="Orders" component={Orders}/>
  <Stack.Screen name="testOrderfire" component={testOrderfire}/>
  <Stack.Screen name="Cleaning" component={Cleaning}/>
  <Stack.Screen name="washdress" component={washdress}/>
  </Stack.Navigator>
</NavigationContainer>
 )
}
export function MainHome({navigation}){
    const username=useSelector(state=>state.login.username)
  return(
       
            <View style={styles.container}>
                <Text>welcome {username}</Text>
                <Text>what are your need's??</Text>
              
                <Button  style={styles.button} title= "Dry iron"
                onPress={() =>navigation.navigate('Dryiron')}/>
               
                <Button title= "Washing"
                onPress={() =>navigation.navigate('washdress')}/>
              
                <Button title= "Cleaning"
                onPress={() =>navigation.navigate('Cleaning')}/>

                 <Button title= "My Orders" 
                onPress={() =>navigation.navigate('Orders')}/>
               
            </View>
      
    )
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop:100,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  button: {
    marginTop:200,
    width: 30, 
    padding:100,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
    space: {
      width: 30, // or whatever size you need
      height: 50,
    },
    space2: {
      width: 30, // or whatever size you need
      height:  80,
    },
  })