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
import useSignup from './useSignup'; // Import the useSignup hook

interface SignUpScreenProps {
  navigation: any;
}

const SignUp: React.FC<SignUpScreenProps> = ({navigation}) => {
  const {
    // name,
    // setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleSignup,
    displayName,
    setDisplayName,
  } = useSignup();
  return (
    <View style={styles.container}>
      <NavigationHeader
        title="Sign Up"
        headerStyle={{textColor: 'black'}}
        // navigation={navigation}
      />
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
            />
            <Image source={require('../../../assets/eye.png')} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton
            onPress={handleSignup}
            title={loading ? 'Signing Up...' : 'Sign Up'}
          />
          {error && <Text style={styles.errorText}>{error}</Text>}
          <GoogleLoginButton title={'Continue with Google'} />
          <Text>
            Already have an account?
            <TouchableOpacity onPress={() => navigation.navigate('login')}>
              <Text style={styles.spanText}>Login</Text>
            </TouchableOpacity>
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text>HomeScreens</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  password: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  spanText: {
    color: '#7F3DFF',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});
