import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {
  setUser,
  setLoading,
  setError,
  loginUser,
} from '../../../store/slices/authSlice';
import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';

const useLogin = () => {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const handleLogin = async () => {
    setLoading(true);
    try {
      await dispatch(loginUser({email, password}) as any);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      Alert.alert('Error', error.message);
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
  };
};

export default useLogin;
