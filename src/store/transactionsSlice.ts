import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import { db } from '../config/firebase';
import auth from '@react-native-firebase/auth';

// Define type for the transaction object
interface Transaction {
  id: string;
  // Define other properties of the transaction object here
}
const userEmail: string = auth().currentUser?.email || '';

//Action
export const fetchTransactions = createAsyncThunk<Transaction[]>(
  'transactions/fetchTransactions',
  async () => {
    const data = await db.collection(`todos`).get();
    return data.docs.map(doc => ({
      id: doc.id,
      // Add other properties of the transaction object if needed
    }));
  },
);

// Create the transaction slice
export const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [] as Transaction[],
    isLoading: false,
    isError: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// Export actions and reducer
export const {} = transactionSlice.actions;
export default transactionSlice.reducer;
