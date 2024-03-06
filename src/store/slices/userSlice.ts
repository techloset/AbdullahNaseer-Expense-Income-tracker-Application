// // // // import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
// // // // import firestore from '@react-native-firebase/firestore';
// // // // import auth from '@react-native-firebase/auth';
// // // // import {CounterState, UserData} from '../../types/Types';

// // // // const initialState: CounterState = {
// // // //   user: null,
// // // //   loading: false,
// // // //   error: '',
// // // // };

// // // // export const getUserData = createAsyncThunk<UserData | null>(
// // // //   'userData',
// // // //   async () => {
// // // //     try {
// // // //       const id = auth().currentUser?.uid;
// // // //       const userDoc = await firestore().collection('users').doc(id).get();
// // // //       return userDoc.data() as UserData;
// // // //     } catch (error) {
// // // //       console.error('Error fetching user data:', error);
// // // //       throw new Error('An error occurred while fetching user data');
// // // //     }
// // // //   },
// // // // );
// // // // export const listenToUserData = createAsyncThunk<UserData | null>(
// // // //   'currentUser/listenToUserData',
// // // //   async (_, {dispatch}) => {
// // // //     try {
// // // //       const id = auth().currentUser?.uid;
// // // //       const userRef = firestore().collection('users').doc(id);

// // // //       const userDoc = await userRef.get();
// // // //       const userData = userDoc.data() as UserData;

// // // //       userRef.onSnapshot(snapshot => {
// // // //         const updatedUserData = snapshot.data() as UserData;
// // // //         dispatch(userDataUpdated(updatedUserData));
// // // //       });

// // // //       return userData;
// // // //     } catch (error) {
// // // //       console.error('Error fetching user data:', error);
// // // //       throw new Error('An error occurred while fetching user data');
// // // //     }
// // // //   },
// // // // );

// // // // export const currentUserSlice = createSlice({
// // // //   name: 'currentUser',
// // // //   initialState,
// // // //   reducers: {
// // // //     userDataUpdated: (state, action: PayloadAction<UserData>) => {
// // // //       state.user = action.payload;
// // // //     },
// // // //   },
// // // //   extraReducers(builder) {
// // // //     builder
// // // //       .addCase(getUserData.pending, state => {
// // // //         state.loading = true;
// // // //         state.error = null;
// // // //       })
// // // //       .addCase(
// // // //         getUserData.fulfilled,
// // // //         (state, action: PayloadAction<UserData | null>) => {
// // // //           state.loading = false;
// // // //           state.error = null;
// // // //           state.user = action.payload;
// // // //         },
// // // //       )
// // // //       .addCase(getUserData.rejected, (state, action) => {
// // // //         state.loading = false;
// // // //         state.error = action.payload
// // // //           ? action.payload.toString()
// // // //           : 'An error occurred';
// // // //         state.user = null;
// // // //       });
// // // //   },
// // // // });
// // // // export const {userDataUpdated} = currentUserSlice.actions;
// // // // export default currentUserSlice.reducer;

// // // import {createSlice, PayloadAction} from '@reduxjs/toolkit';
// // // import auth from '@react-native-firebase/auth';

// // // // type AppDispatch = typeof import('../store').default;
// // // // auth.User
// // // interface UserState {
// // //   user: any | null;
// // //   isLoading: boolean;
// // //   error: string | null;
// // // }

// // // const initialState: UserState = {
// // //   user: null,
// // //   isLoading: false,
// // //   error: null,
// // // };

// // // export const userSlice = createSlice({
// // //   name: 'user',
// // //   initialState,
// // //   reducers: {
// // //     setUser: (state, action: PayloadAction<auth.User | null>) => {
// // //       state.user = action.payload;
// // //       state.isLoading = false;
// // //       state.error = null;
// // //     },
// // //     setLoading: (state, action: PayloadAction<boolean>) => {
// // //       state.isLoading = action.payload;
// // //       state.error = null;
// // //     },
// // //     setError: (state, action: PayloadAction<string>) => {
// // //       state.error = action.payload;
// // //       state.isLoading = false;
// // //     },
// // //   },
// // // });

// // // export const {setUser, setLoading, setError} = userSlice.actions;

// // // // Thunk to fetch user data from Firebase Auth
// // // export const fetchUserData = () => async (dispatch: AppDispatch) => {
// // //   dispatch(setLoading(true));

// // //   try {
// // //     const currentUser = auth().currentUser;
// // //     if (currentUser) {
// // //       // // No need to use Firestore
// // //       // dispatch(setUser(currentUser));
// // //       dispatch(
// // //         setUser({
// // //           displayName: currentUser.displayName,
// // //           email: currentUser.email,
// // //           uid: currentUser.uid,
// // //         }),
// // //       );
// // //       console.log('currentUser', currentUser);
// // //     } else {
// // //       // Handle the case where there is no current user
// // //       dispatch(setError('No current user found'));
// // //     }
// // //   } catch (error) {
// // //     dispatch(setError(error.message)); // Dispatch the error to update state
// // //   } finally {
// // //     dispatch(setLoading(false));
// // //   }
// // // };

// // // // action for user update

// // // export default userSlice.reducer;

// // import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
// // import auth from '@react-native-firebase/auth';
// // import {db} from '../../config/firebase'; // Import your Firebase Firestore instance
// // import { useDispatch } from 'react-redux';

// // interface UserState {
// //   user: any | null;
// //   isLoading: boolean;
// //   error: string | null;
// // }

// // const initialState: UserState = {
// //   user: null,
// //   isLoading: false,
// //   error: null,
// // };

// // export const userSlice = createSlice({
// //   name: 'user',
// //   initialState,
// //   reducers: {
// //     setUser: (state, action: PayloadAction<auth.User | null>) => {
// //       state.user = action.payload;
// //       state.isLoading = false;
// //       state.error = null;
// //     },
// //     setLoading: (state, action: PayloadAction<boolean>) => {
// //       state.isLoading = action.payload;
// //       state.error = null;
// //     },
// //     setError: (state, action: PayloadAction<string>) => {
// //       state.error = action.payload;
// //       state.isLoading = false;
// //     },
// //   },
// // });

// // export const {setUser, setLoading, setError} = userSlice.actions;

// // // Thunk to fetch user data from Firebase Auth
// // export const fetchUserData = () => async (dispatch: AppDispatch) => {
// //   dispatch(setLoading(true));

// //   try {
// //     const currentUser = auth().currentUser;
// //     if (currentUser) {
// //       dispatch(
// //         setUser({
// //           displayName: currentUser.displayName,
// //           email: currentUser.email,
// //           uid: currentUser.uid,
// //         }),
// //       );
// //     } else {
// //       dispatch(setError('No current user found'));
// //     }
// //   } catch (error) {
// //     dispatch(setError(error.message));
// //   } finally {
// //     dispatch(setLoading(false));
// //   }
// // };

// // // Thunk to update user data in Firestore
// // // export const updateUserInFirestore =
// // //   () =>
// // //   async ({displayName, email}, {dispatch}) => {
// // //     dispatch(setLoading(true));
// // //     try {
// // //       const {user} = getState().user; // Get the user data from the Redux state
// // //       const userEmail = user?.email;
// // //       if (userEmail) {
// // //         await db.collection('users').doc(userEmail).update({
// // //           displayName: displayName,
// // //           email: email,
// // //         });
// // //         console.log('User data updated in Firestore successfully');
// // //       } else {
// // //         dispatch(setError('No user email found'));
// // //       }
// // //     } catch (error) {
// // //       dispatch(setError(error.message));
// // //     } finally {
// // //       dispatch(setLoading(false));
// // //     }
// // //   };

// // // export const updateUserInFirestore = ({displayName, email}) => async (dispatch, getState) => {
// // //   dispatch(setLoading(true));
// // //   try {
// // //     const currentUser = auth().currentUser;
// // //     const userEmail = currentUser?.email;
// // //     if (userEmail) {
// // //       await db.collection('users').doc(userEmail).update({
// // //         displayName: displayName,
// // //         email: email,
// // //       });
// // //       dispatch(setUser({ displayName, email, uid: currentUser.uid }));
// // //       console.log('User data updated in Firestore successfully');

// // //     } else {
// // //       dispatch(setError('No user email found'));
// // //     }
// // //   } catch (error) {
// // //     dispatch(setError(error.message));
// // //   } finally {
// // //     dispatch(setLoading(false));
// // //   }
// // // };

// // export const updateUserInFirestore = createAsyncThunk(
// //   'user/updateUser',
// //   async (updatedUserData, {getState}) => {
// //     try {
// //       const {user} = getState().user; // Get user data from the Redux store
// //       const currentUser = auth().currentUser; // Get current user from Firebase Auth

// //       if (!currentUser) {
// //         throw new Error('No current user found'); // Handle no user scenario
// //       }

// //       const {displayName, email} = updatedUserData; // Extract update data
// //       await db.collection('users').doc(currentUser.email).update({
// //         displayName,
// //         email, // Assuming you only update these fields
// //       });
// //       console.log(
// //         'User data updated in Firestore successfully:',
// //         updatedUserData,
// //       );
// //       dispatch(setUser({ displayName, email }));
// //       return updatedUserData; // Return the updated user data
// //     } catch (error) {
// //       console.error('Error updating user data:', error);
// //       throw error; // Re-throw error for handling in the calling component
// //     }
// //   },
// // );

// // export default userSlice.reducer;




// import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// import auth from '@react-native-firebase/auth';
// import { db } from '../../config/firebase'; // Import your Firebase Firestore instance

// interface UserState {
//   user: any | null;
//   isLoading: boolean;
//   error: string | null;
// }

// const initialState: UserState = {
//   user: null,
//   isLoading: false,
//   error: null,
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<auth.User | null>) => {
//       state.user = action.payload;
//       state.isLoading = false;
//       state.error = null;
//     },
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.isLoading = action.payload;
//       state.error = null;
//     },
//     setError: (state, action: PayloadAction<string>) => {
//       state.error = action.payload;
//       state.isLoading = false;
//     },
//   },
// });

// export const { setUser, setLoading, setError } = userSlice.actions;

// // Thunk to fetch user data from Firebase Auth
// export const fetchUserData = () => async (dispatch) => {
//   dispatch(setLoading(true));

//   try {
//     const currentUser = auth().currentUser;
//     if (currentUser) {
//       dispatch(
//         setUser({
//           displayName: currentUser.displayName,
//           email: currentUser.email,
//           uid: currentUser.uid,
//         }),
//       );
//     } else {
//       dispatch(setError('No current user found'));
//     }
//   } catch (error) {
//     dispatch(setError(error.message));
//   } finally {
//     dispatch(setLoading(false));
//   }
// };

// // Thunk to update user data in Firestore
// export const updateUserInFirestore = createAsyncThunk(
//   'user/updateUser',
//   async (updatedUserData, { dispatch, getState }) => {
//     try {
//       const { user } = getState().user; // Get user data from the Redux store
//       const currentUser = auth().currentUser; // Get current user from Firebase Auth

//       if (!currentUser) {
//         throw new Error('No current user found'); // Handle no user scenario
//       }

//       const { displayName, email } = updatedUserData; // Extract update data
//       await db.collection('users').doc(currentUser.email).update({
//         displayName,
//         email, // Assuming you only update these fields
//       });
//       console.log(
//         'User data updated in Firestore successfully:',
//         updatedUserData,
//       );
//       dispatch(setUser({ displayName, email }));
//       return updatedUserData; // Return the updated user data
//     } catch (error) {
//       console.error('Error updating user data:', error);
//       throw error; // Re-throw error for handling in the calling component
//     }
//   },
// );

// export default userSlice.reducer;



import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import { db } from '../../config/firebase'; // Import your Firebase Firestore instance

interface UserState {
  user: any | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<auth.User | null>) => {
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

export const { setUser, setLoading, setError } = userSlice.actions;

// Thunk to fetch user data from Firebase Auth
export const fetchUserData = () => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    const currentUser = auth().currentUser;
    if (currentUser) {
      dispatch(
        setUser({
          displayName: currentUser.displayName,
          email: currentUser.email,
          uid: currentUser.uid,
        }),
      );
    } else {
      dispatch(setError('No current user found'));
    }
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

// Thunk to update user data in Firestore
export const updateUserInFirestore = createAsyncThunk(
  'user/updateUser',
  async (updatedUserData, { dispatch, getState }) => {
    try {
      const currentUser = auth().currentUser; // Get current user from Firebase Auth

      if (!currentUser) {
        throw new Error('No current user found'); // Handle no user scenario
      }

      const { displayName, email } = updatedUserData; // Extract update data
      await db.collection('users').doc(currentUser.uid).update({
        displayName,
        email, // Assuming you only update these fields
      });
      console.log(
        'User data updated in Firestore successfully:',
        updatedUserData,
      );
      dispatch(setUser({ displayName, email }));
      return updatedUserData; // Return the updated user data
    } catch (error) {
      console.error('Error updating user data:', error);
      throw error; // Re-throw error for handling in the calling component
    }
  },
);

export default userSlice.reducer;
