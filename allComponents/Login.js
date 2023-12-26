import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { Image, View, TextInput, Button } from 'react-native';

function Login() {
  const { login } = useAuth();
  const [username, setUsername] = useState('Admin');
  const [password, setPassword] = useState('123');

  const handleLogin = () => {
    if (username && password) {
      login();
      // Navigate logic will be different in React Native, here's an example of how you might handle navigation:
      // For example, using react-navigation library
      // navigation.navigate('MarketPulse', { username });
    } else {
      alert('Please enter your username and password.');
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={{ uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp' }}
          style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
        />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        <TextInput
          style={{ marginBottom: 20, borderWidth: 1, borderColor: '#000', padding: 10 }}
          placeholder="Enter your username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          style={{ marginBottom: 20, borderWidth: 1, borderColor: '#000', padding: 10 }}
          placeholder="Enter password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
    </View>
  );
}

export default Login;
