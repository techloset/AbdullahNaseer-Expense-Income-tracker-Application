import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import {AuthState, SignIn, SignUp, User} from '../../types/types';
import {ToastAndroid} from 'react-native';

const initialState: AuthState = {
  user: null,
  isLoading: false,
  error: null,
};

GoogleSignin.configure({
  webClientId:
    '410122792339-986og3kdl5im005jcjr1o4a9rnls27b4.apps.googleusercontent.com',
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
      state.error = null;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {setUser, setLoading, setError} = authSlice.actions;

// SignUp
export const registerUser =
  ({displayName, email, password}: SignUp) =>
  async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));
    if (!displayName || !email || !password) {
      // console.log('danger', 'Please fill your all required fields');
      ToastAndroid.show(
        'Please fill your all required fields',
        ToastAndroid.SHORT,
      );
      return;
    }
    return await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        auth().currentUser?.updateProfile({
          displayName: displayName,
        });
        firestore().collection('users').doc(auth().currentUser?.uid).set({
          displayName: displayName,
          email: email,
        });
      })
      .then(() => {
        dispatch(
          setUser({
            displayName: displayName,
            email: email,
          } as User),
        );
        setLoading(false);
        ToastAndroid.show('User registered successfully!', ToastAndroid.SHORT);
        // console.log('success', 'User registered successfully!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          // console.log('danger', 'This email is already in use');
          ToastAndroid.show('This email is already in use', ToastAndroid.SHORT);
        }
        if (error.code === 'auth/invalid-email') {
          // console.log('danger', 'This email is invalid');
          ToastAndroid.show('This email is invalid', ToastAndroid.SHORT);
        }
        if (error.code === 'auth/weak-password') {
          // console.log('danger', 'min 6 characters required for password');
          ToastAndroid.show('Password is too weak', ToastAndroid.SHORT);
        }
        setLoading(false);
        // console.error(error);
      });
  };

export const loginUser =
  ({email, password}: SignIn) =>
  async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));

    try {
      if (!email || !password) {
        // console.log('danger', 'Please enter your email and password correctly');
        ToastAndroid.show(
          'Please enter your email and password correctly',
          ToastAndroid.SHORT,
        );
      }
      await auth().signInWithEmailAndPassword(email, password);

      const currentUser = auth().currentUser;
      if (currentUser) {
        dispatch(
          setUser({
            displayName: currentUser.displayName || '',
            email: currentUser.email || '',
          } as User),
        );
      }
      // console.log('success', 'User logged in!');
      ToastAndroid.show('User logged in!', ToastAndroid.SHORT);
    } catch (error: any) {
      if (error.code === 'auth/user-not-found') {
        // console.log('danger', 'User not found');
        ToastAndroid.show('User not found', ToastAndroid.SHORT);
      }
      if (error.code === 'auth/wrong-password') {
        // console.log('danger', 'Invalid password');
        ToastAndroid.show('Invalid password', ToastAndroid.SHORT);
      }
      if (error.code === 'auth/invalid-email') {
        // console.log('danger', 'Invalid email');
        ToastAndroid.show('Invalid email', ToastAndroid.SHORT);
      }
      // console.error(error);
      ToastAndroid.show('Login failed', ToastAndroid.SHORT);
      dispatch(setError(error.message));
      // console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

// GoogleSignIn
export const googleSignin = async () => {
  try {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
    await GoogleSignin.signOut();
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    await auth().signInWithCredential(googleCredential);
    const userDoc = await firestore()
      .collection('users')
      .doc(auth()?.currentUser?.uid)
      .get();

    if (!userDoc.exists) {
      await firestore()
        .collection('users')
        .doc(auth()?.currentUser?.uid)
        .set({
          displayName: auth()?.currentUser?.displayName,
          email: auth()?.currentUser?.email,
          profileImage: auth()?.currentUser?.photoURL || null,
          uid: auth()?.currentUser?.uid,
        });
      ToastAndroid.show('New user signed up successfully!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('User signed in successfully!', ToastAndroid.SHORT);
    }
  } catch (error: any) {
    console.log('error', error);
    ToastAndroid.show('Google Signin failed', ToastAndroid.SHORT);
    if (error.code === 'auth/account-exists-with-different-credential') {
      console.log('danger', 'Account already exists with different credential');
      ToastAndroid.show(
        'Account already exists with different credential',
        ToastAndroid.SHORT,
      );
    }
    if (error.code === 'auth/invalid-credential') {
      console.log('danger', 'Invalid credential');
      ToastAndroid.show('Invalid credential', ToastAndroid.SHORT);
    }
  }
};

export default authSlice.reducer;
