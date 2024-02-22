import {useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
const useForgetPassword = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const forgotPassword = async () => {
    try {
      if (!email) {
        Alert.alert('Please enter your email address');
        return;
      }
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Password reset email sent!');
      navigation.goBack();
    } catch (error: any) {
      let errorMessage =
        'An error occurred while sending the password reset email. Please try again.';
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'That email address is not registered!';
      }
      Alert.alert(errorMessage);
      // console.error(error);
      Alert.alert(error);
    }
  };
  return {email, setEmail, forgotPassword};
};
export default useForgetPassword;
