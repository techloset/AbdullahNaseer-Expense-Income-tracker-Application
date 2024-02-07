import {View, Text, StyleSheet, TextInput, Image, Button} from 'react-native';
import React from 'react';
import AppButton from '../../components/AppButton';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import ForgetPassButton from '../../components/ForgetPassButton';

const SignUp = () => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.navigationBar}>
        <Text style={styles.arrowButton}>SignUp</Text>
      </View> */}
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Name" />
        <TextInput style={styles.textInput} placeholder="Email" />
        <View style={styles.password}>
          <TextInput placeholder="Password" />
          <Image source={require('../../assets/eye.png')} />
        </View>
      </View>
      <AppButton title={'sign up'} />
      <GoogleLoginButton title={'Continue with Google'} />
      <Text>
        Already have an account? <Text style={styles.spanText}>Login</Text>{' '}
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    height: '100%',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  arrowButton: {},
  inputContainer: {
    width: '90%',
    marginBottom: 20,
  },
  textInput: {
    width: '100%',
    height: 56,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
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
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  spanText: {
    color: '#7F3DFF',
  },
});
