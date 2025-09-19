import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.replace('Home');
    } catch (error) {
      Alert.alert('Login Failed', error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email:</Text>
      <TextInput onChangeText={setEmail} value={email} style={{ borderWidth: 1, marginBottom: 10 }} />
      <Text>Password:</Text>
      <TextInput onChangeText={setPassword} value={password} secureTextEntry style={{ borderWidth: 1, marginBottom: 10 }} />
      <Button title="Login" onPress={login} />
    </View>
  );
}
