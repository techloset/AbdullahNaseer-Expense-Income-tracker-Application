import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import AppButton from '../components/AppButton';

const ForgetPassScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Don't worry. Enter your email and we'll send you a link to reset your password.
      </Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Email" />
      </View>
      <AppButton title={'Send Email'} />
    </View>
  );
};

export default ForgetPassScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 20,
  },
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
});
