import {View, Text, StyleSheet, TextInput, Image, Button} from 'react-native';
import React from 'react';

const SignUp = () => {
  return (
    <View>
      <View style={styles.navigationBar}>
        <Text style={styles.arrowButton}>SignUp</Text>
        <Text>SignUp</Text>
      </View>
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Name" />
        <TextInput style={styles.textInput} placeholder="Email" />
        <View style={styles.password}>
          <TextInput placeholder="Password" />
          <Image source={require('../../assets/eye.png')} />
        </View>
      </View>
      <View style={styles.SignUpButton}>
        <Button title="SignUp" />
      </View>
        
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowButton: {},
  textInput: {
    width: '95%',
    height: 56,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 5,
    marginTop: 10,
  },
  password: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:5,
    marginTop: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
  },
  SignUpButton:{
    width: '95%',
    height: 56,
    backgroundColor: '#7F3DFF',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 5,
    marginTop: 10,
  }
});
