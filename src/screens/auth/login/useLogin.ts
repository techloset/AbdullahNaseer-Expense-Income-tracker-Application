import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  setUser,
  setLoading,
  setError,
  loginUser,
  googleSignin,
} from '../../../store/slices/authSlice';
import auth from '@react-native-firebase/auth';
import {Alert, ToastAndroid} from 'react-native';

const useLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert('Error', 'All fields are required');
    }
    setLoading(true);
    try {
      await dispatch(loginUser({email, password}) as any);
      setLoading(false);
    } catch (error: any) {
      ToastAndroid.show('Login failed', ToastAndroid.SHORT);
      setError(error.message);
      Alert.alert('Error', error.message);
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
    loading,
    handleLogin,
    error,
    togglePasswordVisibility,
    isPasswordVisible,
    handleGoogleSignIn,
  };
};

export default useLogin;
