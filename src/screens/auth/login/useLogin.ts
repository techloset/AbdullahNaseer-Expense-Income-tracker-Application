// import {useState, useEffect} from 'react';
// import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-google-signin/google-signin';
// import {useNavigation} from '@react-navigation/native';

// const useLogin = () => {
//   const navigation = useNavigation();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleLogin = async () => {
//     try {
//       setLoading(true);
//       setError(null);
//       const user = await auth().signInWithEmailAndPassword(email, password);
//       console.log(user);
//       console.log('login successful');
//     } catch (error) {
//       console.error(error);
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     const ClientId =
//       '410122792339-986og3kdl5im005jcjr1o4a9rnls27b4.apps.googleusercontent.com';
//     GoogleSignin.configure({
//       webClientId: ClientId,
//     });
//   }, []);

//   const handleGoogleSignup = async () => {
//     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
//     const {idToken} = await GoogleSignin.signIn();
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//     return auth().signInWithCredential(googleCredential);
//   };

//   return {
//     email,
//     setEmail,
//     password,
//     setPassword,
//     error,
//     loading,
//     handleLogin,
//     navigation,
//     handleGoogleSignup,
//   };
// };

// export default useLogin;

import {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
// import {
//   GoogleSignin,
//   statusCodes,
// } from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';

const useLogin = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError(null);
      const user = await auth().signInWithEmailAndPassword(email, password);
      console.log(user);
      console.log('Login successful');
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // const handleLogin = async (email, password) => {
  //   try {
  //     dispatch(setLoading(true));
  //     dispatch(clearError());
  //     const userCredential = await auth().signInWithEmailAndPassword(
  //       email,
  //       password,
  //     );
  //     dispatch(setUser(userCredential.user)); // Dispatch setUser action to set user in Redux store
  //     console.log('Login successful');
  //   } catch (error) {
  //     console.error(error);
  //     dispatch(setError(error.message));
  //   } finally {
  //     dispatch(setLoading(false));
  //   }
  // };

  // useEffect(() => {
  //   const configureGoogleSignIn = async () => {
  //     try {
  //       const ClientId =
  //         '410122792339-986og3kdl5im005jcjr1o4a9rnls27b4.apps.googleusercontent.com'; // Replace with your web client ID from Google Cloud Console
  //       await GoogleSignin.configure({
  //         webClientId: ClientId,
  //       });
  //     } catch (error) {
  //       console.error('Error configuring Google sign-in:', error);
  //     }
  //   };

  //   configureGoogleSignIn();
  // }, []);

  // const handleGoogleSignup = async () => {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const {idToken} = await GoogleSignin.signIn();
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  //     const userCredential = await auth().signInWithCredential(
  //       googleCredential,
  //     );
  //     console.log(userCredential.user);
  //     console.log('Google sign-in successful');
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       console.log('Google sign-in cancelled');
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       console.log('Google sign-in in progress');
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       console.log('Google Play services not available');
  //     } else {
  //       console.error('Error signing in with Google:', error);
  //       setError('Error signing in with Google');
  //     }
  //   }
  // };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    handleLogin,
    navigation,
    // handleGoogleSignup,
  };
};

export default useLogin;
