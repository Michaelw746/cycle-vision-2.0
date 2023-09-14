// LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Home'); // Navigate to your main app screen after successful login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

export default LoginScreen;
