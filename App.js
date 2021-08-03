/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {HomeScreen} from './Home';
import {register} from './Register';
import { MainHome } from './Component/MainHome';
import store from './Reduxx/store'
import { Provider } from 'react-redux';
import { Dryiron } from './Component/DryIron';
import { Orders } from './Component/Orders';
import { testOrder } from './Component/Washing/Washning';
import { Cleaning } from './Component/Cleaning/cleaning';
import { testOrderfire } from './Component/Washing/firestore';
import { washdress } from './Component/Wash/washdress';

  
const Stack = createStackNavigator();

function App ()  {
  

  return (
   <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="register" component={register} />
      <Stack.Screen name="MainHome" component={MainHome} />
      <Stack.Screen name="Dryiron" component={Dryiron} />
      <Stack.Screen name="Orders" component={ Orders } />
      <Stack.Screen name="Cleaning" component={Cleaning} />
      <Stack.Screen name="testOrder" component={ testOrder} />
      <Stack.Screen name="testOrderfire" component={testOrderfire} />
      <Stack.Screen name="washdress" component={washdress} />

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
   
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
