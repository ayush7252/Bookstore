import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
  } from 'react-native';
  import React, { useState } from 'react';
  
  const Login = ({navigation}:any) => {
    const dummyCredentials = {
      email: 'admin@example.com',
      password: 'password123'
    };
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    const handleLogin = () => {
      setError('');
      if (!email || !password) {
        setError('Please fill in all fields');
        return;
      }
  
      setLoading(true);
      
      setTimeout(() => {
        if (email === dummyCredentials.email && password === dummyCredentials.password) {
          Alert.alert('Success', 'Logged in successfully!');
          navigation.navigate('Home')
        } else {
          setError('Invalid email or password');
        }
        setLoading(false);
      }, 1500);
    };
  
    return (
      <KeyboardAvoidingView
        style={styles.container}
      >
        <View style={styles.card}>
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Please sign in to continue</Text>
  
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
  
          <View style={styles.formGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              placeholderTextColor="#999"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
  
          <View style={styles.formGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#999"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
  
          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>Sign In</Text>
            )}
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.forgotButton}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
  
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  };
  
  export default Login;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#f0f2f5',
      padding: 20,
    },
    card: {
      backgroundColor: 'white',
      borderRadius: 15,
      padding: 25,
      shadowColor: '#000',
      elevation: 5,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#A03037',
      marginBottom: 8,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
      textAlign: 'center',
      marginBottom: 30,
      lineHeight:18
    },
    formGroup: {
      marginBottom: 20,
    },
    label: {
      fontSize: 14,
      color: '#444',
      marginBottom: 8,
      fontWeight: '500',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      padding: 12,
      fontSize: 16,
      color: '#333',
    },
    loginButton: {
      backgroundColor: '#A03037',
      borderRadius: 8,
      padding: 16,
      alignItems: 'center',
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    errorText: {
      color: 'red',
      textAlign: 'center',
      marginBottom: 15,
    },
    forgotButton: {
      alignSelf: 'center',
      marginTop: 20,
    },
    forgotText: {
      color: '#A03037',
      fontWeight: '500',
      lineHeight:18
    },
    signupContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 25,
    },
    signupText: {
      color: '#666',
      lineHeight:18
    },
    signupLink: {
      color: '#A03037',
      fontWeight: '500',
      lineHeight:18
    },
  });