// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { User } from 'firebase/auth';

// interface AuthState {
//   user: User | null;
//   loading: boolean;
//   error: string | null;
// }

// const initialState: AuthState = {
//   user: null,
//   loading: false,
//   error: null,
// };

// export const login = createAsyncThunk<User, { email: string; password: string }>(
//   'auth/login',
//   async ({ email, password }) => {
//     try {
//       const userCredential = await auth().signInWithEmailAndPassword(email, password);
//       return userCredential.user;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }
// );

// export const logout = createAsyncThunk(
//   'auth/logout',
//   async () => {
//     try {
//       await auth().signOut();
//     } catch (error) {
//       console.error('Error logging out:', error);
//     }
//   }
// );

// const authSlice = createSlice({
//   name: 'auth',
//   initialState,
//   reducers: {
//     setLoading(state, action) {
//       state.loading = action.payload;
//     },
//     setError(state, action) {
//       state.error = action.payload;
//     },
//     clearError(state) {
//       state.error = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(login.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(login.fulfilled, (state, action) => {
//         state.loading = false;
//         state.user = action.payload;
//       })
//       .addCase(login.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       })
//       .addCase(logout.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(logout.fulfilled, (state) => {
//         state.user = null;
//       })
//       .addCase(logout.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { setLoading, setError, clearError, logout } = authSlice.actions;

// export default authSlice.reducer;
