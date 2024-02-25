import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { initDatabase, insertUser, getUsers } from '../db';

const DBtest = () => {
  useEffect(() => {
    // Initialize the database
    initDatabase();

    // Insert a user
    insertUser('John Doe', 'john@example.com');

    // Query users
    getUsers(
      users => {
        console.log('Users:', users);
        // Update state or perform other actions with the users data
      },
      error => {
        console.error('Error getting users:', error);
      }
    );
  }, []);

  const [data,setData]=useState()

  useEffect(  ()=>{
        
        

  })

  const getData=async()=>{
    const info =await fetch("https://pani.bwdb.gov.bd/bwdb-pq/api/user.php")
    const json = await info.json();
        console.log(json)
  }

  return (
    <View>
      <Text>SQLite Example</Text>
    </View>
  );
};

export default DBtest;
