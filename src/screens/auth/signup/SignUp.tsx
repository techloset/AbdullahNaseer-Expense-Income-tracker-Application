import React, {useEffect} from 'react';
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
import useSignup from './useSignup'; // Import the useSignup hook
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles'; // Import the styles

const SignUp: React.FC = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleSignup,
    displayName,
    setDisplayName,
    handleGoogleSignIn,
    togglePasswordVisibility,
    isPasswordVisible,
  } = useSignup();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <NavigationHeader title="Sign Up" headerStyle={{textColor: 'black'}} />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            value={displayName}
            onChangeText={setDisplayName}
          />
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
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image
                source={
                  isPasswordVisible
                    ? require('../../../assets/eye.png')
                    : require('../../../assets/eyeClose.png')
                }
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            onPress={handleSignup}
            title={loading ? 'Signing Up...' : 'Sign Up'}
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
          <GoogleLoginButton
            onPress={handleGoogleSignIn}
            title={'Continue with Google'}
          />
          <Text style={styles.linkContainer}>
            Already have an account?
            <TouchableOpacity
              onPress={() => navigation.navigate('login' as never)}>
              <Text style={styles.spanText}>Login</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUp;
