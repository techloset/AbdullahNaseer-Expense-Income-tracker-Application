import {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const useSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const ClientId =
      '410122792339-986og3kdl5im005jcjr1o4a9rnls27b4.apps.googleusercontent.com';
    GoogleSignin.configure({
      webClientId: ClientId,
    });
  }, []);
  const signInWithGoogle = async () => {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth().signInWithCredential(googleCredential);
  };


  const handleSignup = async () => {
    try {
      setLoading(true); // Set loading state to true during signup process
      const userCredential = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(userCredential.user);
      console.log('User created successfully');
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
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
    signInWithGoogle,
  };
};

export default useSignup;
