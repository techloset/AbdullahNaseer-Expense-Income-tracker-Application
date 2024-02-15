import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppButton from '../../components/AppButton';
import GoogleLoginButton from '../../components/GoogleLoginButton';
import NavigationHeader from '../../components/NavigationHeader';

interface SignUpScreenProps {
  navigation: any;
}

const SignUp: React.FC<SignUpScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <NavigationHeader
        title="Sign Up"
        headerStyle={{textColor: 'black'}}
        navigation={navigation}
      />
      <View style={styles.content}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.textInput} placeholder="Name" />
          <TextInput style={styles.textInput} placeholder="Email" />
          <View style={styles.password}>
            <TextInput placeholder="Password" />
            <Image source={require('../../assets/eye.png')} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title={'Sign Up'} />
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
});
