// import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
// import firestore from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
// import {CounterState, UserData} from '../../types/Types';

// const initialState: CounterState = {
//   user: null,
//   loading: false,
//   error: '',
// };

// export const getUserData = createAsyncThunk<UserData | null>(
//   'userData',
//   async () => {
//     try {
//       const id = auth().currentUser?.uid;
//       const userDoc = await firestore().collection('users').doc(id).get();
//       return userDoc.data() as UserData;
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       throw new Error('An error occurred while fetching user data');
//     }
//   },
// );
// export const listenToUserData = createAsyncThunk<UserData | null>(
//   'currentUser/listenToUserData',
//   async (_, {dispatch}) => {
//     try {
//       const id = auth().currentUser?.uid;
//       const userRef = firestore().collection('users').doc(id);

//       const userDoc = await userRef.get();
//       const userData = userDoc.data() as UserData;

//       userRef.onSnapshot(snapshot => {
//         const updatedUserData = snapshot.data() as UserData;
//         dispatch(userDataUpdated(updatedUserData));
//       });

//       return userData;
//     } catch (error) {
//       console.error('Error fetching user data:', error);
//       throw new Error('An error occurred while fetching user data');
//     }
//   },
// );

// export const currentUserSlice = createSlice({
//   name: 'currentUser',
//   initialState,
//   reducers: {
//     userDataUpdated: (state, action: PayloadAction<UserData>) => {
//       state.user = action.payload;
//     },
//   },
//   extraReducers(builder) {
//     builder
//       .addCase(getUserData.pending, state => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(
//         getUserData.fulfilled,
//         (state, action: PayloadAction<UserData | null>) => {
//           state.loading = false;
//           state.error = null;
//           state.user = action.payload;
//         },
//       )
//       .addCase(getUserData.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload
//           ? action.payload.toString()
//           : 'An error occurred';
//         state.user = null;
//       });
//   },
// });
// export const {userDataUpdated} = currentUserSlice.actions;
// export default currentUserSlice.reducer;


import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

// type AppDispatch = typeof import('../store').default;
// auth.User
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
export const fetchUserData = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));

  try {
    const currentUser = auth().currentUser;
    if (currentUser) {
      // // No need to use Firestore
      // dispatch(setUser(currentUser));
      dispatch(setUser({
        displayName: currentUser.displayName,
        email: currentUser.email,
        uid: currentUser.uid,
      }));
      console.log('currentUser', currentUser);
    } else {
      // Handle the case where there is no current user
      dispatch(setError('No current user found'));
    }
  } catch (error) {
    dispatch(setError(error.message)); // Dispatch the error to update state
  } finally {
    dispatch(setLoading(false));
  }
};

export default userSlice.reducer;
