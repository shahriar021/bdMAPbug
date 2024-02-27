// LoginScreen.js

import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {initDatabase, getUsersByPassword,insertLoginUsersFromAPI} from './database';

const LoginScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);
  useEffect(() => {
    initDatabase();
    // Fetch and insert users from API into loginuser table
    insertLoginUsersFromAPI();
  }, []);

const handleLogin = () => {
  getUsersByPassword(
    password,
    users => {
      if (users.length > 0) {
        // User found, proceed with login
        console.log('Login successful. User:', users[0]);
        // Navigate to another page
        navigation.navigate('Map');
      } else {
        // User not found
        console.log('Incorrect password. Please try again.');
      }
    },
    error => {
      console.error('Error getting users by password', error);
    },
  );
};



  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        {loginError && <Text style={styles.errorText}>{loginError}</Text>}
        <TouchableOpacity onPress={handleLogin}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // ... (previous styles)

  errorText: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },
  loginContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#333',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    fontSize: 16,
  },
});

export default LoginScreen;
