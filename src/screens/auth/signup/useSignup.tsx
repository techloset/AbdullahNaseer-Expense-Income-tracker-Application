import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {googleSignin, registerUser} from '../../../store/slices/authSlice';
import {Alert, ToastAndroid} from 'react-native';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';

const useSignup = () => {
  const dispatch = useDispatch();
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const [userInfo, setUserInfo] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const handleSignup = async () => {
    if (!email || !password || !displayName) {
      return Alert.alert('Error', 'All fields are required');
    }
    setLoading(true);
    try {
      await dispatch(registerUser({email, password, displayName}) as any);
      setLoading(false);
    } catch (error: any) {
      Alert.alert('Error', error.message);
      setError(error.message);
      setLoading(false);
      // console.log('Error', error.message);
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await dispatch(googleSignin as any);
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleSignup,
    displayName,
    setDisplayName,
    handleGoogleSignIn,
    togglePasswordVisibility,
    isPasswordVisible,
  };
};

export default useSignup;




