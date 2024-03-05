import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {setUser, setLoading, setError, loginUser} from '../../../store/slices/authSlice';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

const useLogin = () => {
  // const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const handleLogin = async() => {
    setLoading(true);
    try{
      await dispatch(loginUser({email, password})as any
      )
      setLoading(false)
    }catch (error:any){
      Alert.alert('Error', error.message)
    }
  }

  // const handleLogin = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const userCredential = await auth().signInWithEmailAndPassword(
  //       email,
  //       password,
  //     );
  //     const user = {
  //       uid: userCredential.user.uid,
  //       email: userCredential.user.email,
  //       displayName: userCredential.user.displayName || null, // Handle potential null value
  //     };
  //     dispatch(setUser(user));
  //     console.log('Login successful');
  //   } catch (error) {
  //     console.error(error);
  //     dispatch(setError(error.message));
  //   } finally {
  //     setLoading(false);
  //   }
  // }, [dispatch, email, password]); // Use useCallback for memoization

  return {
    email,
    setEmail,
    password,
    setPassword,
    loading,
    handleLogin,
  };
};

export default useLogin;
