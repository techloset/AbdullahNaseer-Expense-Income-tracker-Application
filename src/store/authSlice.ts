import {createSlice, Dispatch, PayloadAction} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import firestore from '@react-native-firebase/firestore';
import {AuthState, SignIn, SignUp, User} from '../types/types';

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
      console.log('danger', 'Please fill your all required fields');

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
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('danger', 'This email is already in use');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('danger', 'This email is invalid');
        }
        setLoading(false);
        console.error(error);
      });
  };

export const loginUser =
  ({email, password}: SignIn) =>
  async (dispatch: Dispatch<any>) => {
    dispatch(setLoading(true));

    try {
      if (!email || !password) {
        console.log('danger', 'Please enter your email and password correctly');
      }
      await auth().signInWithEmailAndPassword(email, password);

      const currentUser = auth().currentUser;
      if (currentUser) {
        dispatch(
          setUser({
            displayName: currentUser.displayName || '',
            email: currentUser.email || '',
          }),
        );
      }
      console.log('success', 'User logged in!');
    } catch (error: any) {
      dispatch(setError(error.message));
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

// GoogleSignIn

export const googleSignin = async () => {
  await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
  await GoogleSignin.signOut();
  const {idToken} = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  const user_sign = auth().signInWithCredential(googleCredential);
  user_sign
    .then(async () => {
      const userDoc = await firestore()
        .collection('users')
        .doc(auth().currentUser?.uid)
        .get();

      if (!userDoc.exists) {
        await firestore()
          .collection('users')
          .doc(auth().currentUser?.uid)
          .set({
            displayName: auth().currentUser?.displayName,
            email: auth().currentUser?.email,
            photoUrl: auth().currentUser?.photoURL || null,
            status: 'Hi there I am using Techat',
            uid: auth().currentUser?.uid,
          });
        console.log('New user signed up successfully!');
      } else {
        console.log('User signed in successfully!');
      }
    })
    .catch(error => {
      console.log(error);
    });
};
// export const googleSignin = async () => {
//   await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
//   await GoogleSignin.signOut();
//   const {idToken} = await GoogleSignin.signIn();
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//   const user_sign = auth().signInWithCredential(googleCredential);
//   user_sign

//     .then(() => {
//       firestore()
//         .collection('users')
//         .doc(auth().currentUser?.uid)
//         .set({
//           name: '',
//           displayName: auth().currentUser?.displayName,
//           email: auth().currentUser?.email,
//           createdAt: firestore.FieldValue.serverTimestamp(),
//           userImage: auth().currentUser?.photoURL || null,
//         });
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

export default authSlice.reducer;
