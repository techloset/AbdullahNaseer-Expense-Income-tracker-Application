import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../store/slices/authSlice';

const useSignup = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [displayName, setDisplayName] = useState('qwerty');
  const [userInfo, setUserInfo] = useState(null);

  // const handleSignup = async () => {
  //   try {
  //     setLoading(true); // Set loading state to true during signup process
  //     const userCredential = await auth().createUserWithEmailAndPassword(
  //       email,
  //       password,
  //     );
  //     console.log(userCredential.user);
  //     console.log('User created successfully');
  //   } catch (error) {
  //     console.error(error);
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleSignup = async () => {
    setLoading(true);
    try {
      await dispatch(registerUser({email, password, displayName}) as any);
      setLoading(false);
    } catch (error: any) {
      console.log('Error', error.message);
    }
  };



  // const goodleSignIn = async () => {
  //   // try {
  //   //   await GoogleSignin.hasPlayServices();
  //   //   const {idToken} = await GoogleSignin.signIn();
  //   //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //   //   await auth().signInWithCredential(googleCredential);
  //   //   console.log('User signed in successfully');
  //   // } catch (error) {
  //   //   console.error(error);
  //   //   setError(error.message);
  //   // }
  // };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleSignup,
  };
};

export default useSignup;
