import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'



import Test2 from './src/screens/Test2'
import LoginScreen from './src/screens/LoginScreen'
import DBtest from './src/screens/DBtest'
 


const App = () => {
  const [info,setInfo]=useState('')
  fetch('https://pani.bwdb.gov.bd/bwdb-pq/api/user.php')
  .then(response => response.json())
  .then(data => {
    // Handle the data received from the API
    console.log('API Response:', data);
    setInfo(data)
  })
  .catch(error => {
    // Handle errors
    console.error('API Error:', error);
  });
  return (
    <View style={{flex:1}}>
      {/* <LoginScreen/> */}
     {/* <Test2/> */}
     {/* <DBtest/> */}
     {info && info.map((info,i)=>{
      return <Text key={i}>{info.id}</Text>
     })}
    </View>
  )
}

export default App

const styles = StyleSheet.create({})