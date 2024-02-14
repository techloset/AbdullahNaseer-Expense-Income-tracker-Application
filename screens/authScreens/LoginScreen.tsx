import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import AppButton from '../../components/AppButton';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import NavigationHeader from '../../components/NavigationHeader';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NavigationHeader
        title="Login"
        headerStyle={{textColor: 'black'}}
        navigation={navigation}
      />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Email" />
          <View style={styles.password}>
            <TextInput placeholder="Password" />
            <Image source={require('../../assets/eye.png')} />
          </View>
        </View>
        <AppButton title={'Login'}  />
        <View style={styles.forgetContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgetPassScreen')}>
            <Text style={styles.forget}>Forget Password?</Text>
          </TouchableOpacity>
        </View>
        <Text>or</Text>
        <GoogleLoginButton title={'Continue with Google'} />
        <Text>
          Don't have an account?
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.spanText}> SignUp</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

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
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  spanText: {
    color: '#7F3DFF',
  },
  forgetContainer: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forget: {
    color: '#7F3DFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
