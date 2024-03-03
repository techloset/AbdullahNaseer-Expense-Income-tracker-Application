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
    GoogleSignin.configure({
      webClientId:
        '410122792339-986og3kdl5im005jcjr1o4a9rnls27b4.apps.googleusercontent.com',
    });
  }, []);

  const signInWithGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const usrInfo = await GoogleSignin.signIn();
      setUserInfo({usrInfo});
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
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
