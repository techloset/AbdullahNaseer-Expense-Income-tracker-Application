import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../../../components/AppButton';
import GoogleLoginButton from '../../../components/GoogleLoginButton';
import NavigationHeader from '../../../components/NavigationHeader';
import useLogin from './useLogin'; // Import the custom hook
import {useNavigation} from '@react-navigation/native';
import {NavigationRoute} from '../../../types/navigationType';
import {styles} from './styles'; // Import the styles

const LoginScreen = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleLogin,
    togglePasswordVisibility,
    isPasswordVisible,
    handleGoogleSignIn,
  } = useLogin();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <NavigationHeader title="Login" headerStyle={{textColor: 'black'}} />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.password}>
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />
            {/* <Image source={require('../../../assets/eye.png')} /> */}
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image
                source={
                  isPasswordVisible
                    ? require('../../../assets/eye.png')
                    : require('../../../assets/eyeClose.png')
                } // Use different icons based on password visibility state
              />
            </TouchableOpacity>
          </View>
        </View>
        <AppButton
          onPress={handleLogin}
          title={loading ? 'Logging In...' : 'Login'}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}
        <View style={styles.forgetContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassScreen' as never)}>
            <Text style={styles.forget}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <Text>or</Text>
        <GoogleLoginButton
          onPress={handleGoogleSignIn}
          title={'Continue with Google'}
        />
        <Text>
          Don't have an account?
          <TouchableOpacity
            onPress={() => navigation.navigate('signup' as never)}>
            <Text style={styles.spanText}> SignUp</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

