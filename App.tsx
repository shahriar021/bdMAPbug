import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Test2 from './src/screens/Test2';
import LoginScreen from './src/screens/LoginScreen';
import DBtest from './src/screens/DBtest';
import Login from './src/test/Login';
import Map from './src/test/Map';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Test2" component={Test2} /> */}

          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>

      {/* <Test2/> */}
      {/* <DBtest/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
