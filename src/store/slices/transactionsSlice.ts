import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { db } from '../../config/firebase'; // Assuming firebase config is imported here
import auth from '@react-native-firebase/auth';

// Interface for a transaction object
interface Transaction {
  id: string;
  docId: string;
  category: string;
  description: string;
  money: string; // Assuming money is a string in your data structure
  transactionType: string;
  imageUrl: string;
  timestamp: string;
}

// Action to fetch transactions
export const fetchTransactions = createAsyncThunk<Transaction[]>(
  'transactions/fetchTransactions',
  async () => {
    const userEmail: string = auth().currentUser?.email || '';

    try {
      const incomeSnapshot = await db
        .collection('transactions')
        .doc(userEmail)
        .collection('Income')
        .get();

      const expenseSnapshot = await db
        .collection('transactions')
        .doc(userEmail)
        .collection('Expense')
        .get();

      // Map each document to a Transaction object with all properties
      const incomeData = incomeSnapshot.docs.map(doc => ({
        id: doc.id,
        docId: doc.id,
        category: doc.data().category,
        description: doc.data().description,
        money: doc.data().money,
        transactionType: 'Income',
        imageUrl: doc.data().imageUrl,
        timestamp: doc.data().timestamp,
      }));

      const expenseData = expenseSnapshot.docs.map(doc => ({
        id: doc.id,
        docId: doc.id,
        category: doc.data().category,
        description: doc.data().description,
        money: doc.data().money,
        transactionType: 'Expense',
        imageUrl: doc.data().imageUrl,
        timestamp: doc.data().timestamp,
      }));

      // Combine income and expense data into a single array
      const allTransactions = [...incomeData, ...expenseData];

      console.log(allTransactions);

      return allTransactions;
    } catch (error) {
      console.error('Error fetching transactions:', error);
      throw error; // Propagate the error for handling in the UI
    }
  }
);

// Slice state type
interface TransactionState {
  transactions: Transaction[];
  isLoading: boolean;
  isError: boolean;
}

export const transactionSlice = createSlice({
  name: 'transactions',
  initialState: {
    transactions: [] as Transaction[],
    isLoading: false,
    isError: false,
  } as TransactionState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTransactions.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(
        fetchTransactions.fulfilled,
        (state, action: PayloadAction<Transaction[]>) => {
          state.isLoading = false;
          state.transactions = action.payload;
        }
      )
      .addCase(fetchTransactions.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

// Export actions and reducer
export const {} = transactionSlice.actions; // Consider naming exports if needed

export default transactionSlice.reducer;
