import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';

interface GoogleLoginButtonProps {
  title: string;
  onPress: () => void;
}

const GoogleLoginButton: React.FC<GoogleLoginButtonProps> = ({title,onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={require('../assets/googleIcon.png')} />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GoogleLoginButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F5FCFF',
    width: '100%',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderColor: 'whitesmoke',
    borderWidth: 0.5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    padding: 2, 
  },
});
