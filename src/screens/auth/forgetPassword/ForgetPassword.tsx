import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import AppButton from '../../../components/AppButton';
import NavigationHeader from '../../../components/NavigationHeader';
import useForgetPassword from './useForgetPassword';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';

const ForgetPassScreen: React.FC = () => {
  const navigation = useNavigation();
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

