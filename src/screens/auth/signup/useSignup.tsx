import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {googleSignin, registerUser} from '../../../store/slices/authSlice';
import {Alert} from 'react-native';
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
    setLoading(true);
    try {
      await dispatch(registerUser({email, password, displayName}) as any);
      setLoading(false);
      console.log('User created successfully===>', userInfo);
    } catch (error: any) {
      Alert.alert('Error', error.message);
      setError(error.message);
      console.log('Error', error.message);
    }
  };

  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '410122792339-986og3kdl5im005jcjr1o4a9rnls27b4.apps.googleusercontent.com',
  //   });
  // }, []);

  // const handleGoogleSignIn = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const {idToken} = await GoogleSignin.signIn();
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //     await auth().signInWithCredential(googleCredential);
  //     console.log('User signed in successfully');
  //   } catch (error) {
  //     console.error(error);
  //     setError(error.message);
  //   }
  // };

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
