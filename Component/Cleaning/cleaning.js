import React, { useState,useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { StyleSheet, TextInput, View } from 'react-native';
import {Text } from 'react-native';
import{Button} from 'react-native';
import { Connect, useSelector } from 'react-redux';
import {App} from '../App'
import firestore from '@react-native-firebase/firestore';
import { Value } from 'react-native-reanimated';
import { parse } from 'yargs';




export function Cleaning({navigation}){
    const username=useSelector(state=>state.login.username)


  
    const [jacket,setjakcet]=useState();
    const [shirts,setshirts]=useState();
    const [Trousers,settrousers]=useState();
    const [total,settotal]=useState();
    const [jacketprice,setjakcetprice]=useState();
    const [shirtprice,setshirtsprice]=useState();
    const [Trouserprice,settrousersprice]=useState();

   const ref =firestore().collection('Users')

   const CAL=()=>{
       settrousersprice(parseInt(Trousers)*5)
       setjakcetprice(parseInt(jacket)*10)
       setshirtsprice(parseInt(shirts)*20)
       settotal(parseFloat(jacketprice)+parseFloat(shirtprice)+parseFloat(Trouserprice))
  
   }

   async function addOrder(){
       await ref.add({
           email:username.toString(),
           Trousers:parseInt(Trousers),
           jackets:parseInt(jacket),
           shirts:parseInt(shirts),
           Total_Price:total,
           type:'Cleaning'
          
       });
    
   }
   return(

    <View>
{username !== '' && <Text>{`Hello ${username}!`}</Text>}
  <Button
title="add order"
onPress={addOrder} 


/>
<Button
title="calculate total" 
onPress={CAL}
/>
<Text>Trousers:-</Text>
<TextInput style={styles.input} placeholder="Trousers amount" onChangeText={settrousers}  />
<Text>Blazers/jacket:-</Text>
<TextInput style={styles.input} placeholder="Blazers/jacket amount"  onChangeText={setjakcet} />
<Text>Shirts:-</Text>
<TextInput style={styles.input} placeholder="Shirts amount"  onChangeText={setshirts} />


<Text>total is {total} LKR</Text>

<Text>
   instructions-
</Text>
<Text>
    Single Trouser DryIron price is 5 LKR
</Text>
<Text>
Single jacket or Blazer DryIron price is 10 LKR       

</Text>
<Text>
Single shirt DryIron price is 20 LKR"
</Text>

    </View>


);
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      paddingTop: 23,
      padding: 30
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