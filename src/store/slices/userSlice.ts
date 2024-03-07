import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';
import {db} from '../../config/firebase'; // Import your Firebase Firestore instance

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

export const {setUser, setLoading, setError} = userSlice.actions;

// Thunk to fetch user data from Firebase Auth
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

export const fetchUserData = () => async dispatch => {
  dispatch(setLoading(true));

  try {
    const currentUser = auth().currentUser;
    if (currentUser) {
      // Fetch additional user data from Firestore
      const userDoc = await db.collection('users').doc(currentUser.uid).get();
      if (userDoc.exists) {
        const userData = userDoc.data();
        dispatch(
          setUser({
            displayName: userData.displayName,
            email: userData.email,
            uid: currentUser.uid,
          }),
        );
      } else {
        dispatch(setError('User data not found in Firestore'));
      }
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
  async (updatedUserData, {dispatch, getState}) => {
    try {
      const currentUser = auth().currentUser; // Get current user from Firebase Auth

      if (!currentUser) {
        throw new Error('No current user found'); // Handle no user scenario
      }

      const {displayName, email} = updatedUserData; // Extract update data
      await db.collection('users').doc(currentUser.uid).update({
        displayName,
        email, // Assuming you only update these fields
      });
      console.log(
        'User data updated in Firestore successfully:',
        updatedUserData,
      );
      dispatch(setUser({displayName, email}));
      return updatedUserData; // Return the updated user data
    } catch (error) {
      console.error('Error updating user data:', error);
      throw error; // Re-throw error for handling in the calling component
    }
  },
);

export default userSlice.reducer;
