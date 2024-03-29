import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {initDatabase, getUserByPassword, insertLoginUser, getAllUsers} from '../db';

const LoginScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(null);

  // Ensure the database is initialized and the login user is inserted
  initDatabase();
  insertLoginUser();

  const handleLogin = () => {
    setLoginError(null);

    getUserByPassword(
      password,
      user => {
        if (user) {
          // User found, proceed with login
          console.log('Login successful. User:', user);
          getAllUsers(
           // users => console.log('All users:', users),
            //error => console.error('Error retrieving users', error),
          );
          // Add navigation or other logic here for successful login
          navigation.navigate('Test2');
        } else {
          // User not found
          setLoginError('Incorrect password. Please try again.');
        }
      },
      error => {
        // Handle error
        console.error('Login error:', error);
        setLoginError('An error occurred during login. Please try again.');
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
