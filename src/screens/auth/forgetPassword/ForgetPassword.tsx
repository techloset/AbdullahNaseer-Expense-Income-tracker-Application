import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import AppButton from '../../../components/AppButton';
import NavigationHeader from '../../../components/NavigationHeader';
import useForgetPassword from './useForgetPassword';

interface ForgetPassScreenProps {
  navigation: any;
}

const ForgetPassScreen: React.FC<ForgetPassScreenProps> = ({navigation}) => {
  const {email, setEmail, forgotPassword} = useForgetPassword();
  return (
    <View style={styles.container}>
      <NavigationHeader
        title="Forget Password"
        headerStyle={{textColor: 'black'}}
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Don't worry. Enter your email and we'll send you a link to reset your
          password.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={setEmail}
            style={styles.textInput}
            placeholder="Email"
          />
        </View>
        <AppButton onPress={forgotPassword} title={'Send Email'} />
      </View>
    </View>
  );
};

export default ForgetPassScreen;

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    marginBottom: 20,
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
});
