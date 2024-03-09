import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {db} from '../../config/firebase'; // Assuming firebase config is imported here
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import {ToastAndroid} from 'react-native';

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
  },
);

export const addTransaction = createAsyncThunk<Transaction, Transaction>(
  'transactions/addTransaction',
  async (transactionData, {dispatch}) => {
    try {
      const userEmail: string = auth().currentUser?.email || '';
      const collectionName: string = `${userEmail}`;
      const docRef = await db
        .collection('transactions')
        .doc(collectionName)
        .collection(transactionData.transactionType)
        .add(transactionData);

      console.log('Successfully added transaction:', docRef.id);
      // After adding the transaction, dispatch fetchTransactions to update the state
      dispatch(fetchTransactions() as any);
      return {...transactionData, id: docRef.id};
    } catch (error) {
      ToastAndroid.show('Error adding transaction', ToastAndroid.SHORT);
      console.error('Error adding transaction:', error);
      throw error;
    }
  },
);
const getUserEmail = () => auth().currentUser?.email || '';

export const editTransaction = createAsyncThunk<Transaction, Transaction>(
  'transactions/editTransaction',
  async (updatedTransactionData, {dispatch}) => {
    try {
      const userEmail = getUserEmail();
      const collectionName = `${userEmail}`;
      await db
        .collection('transactions')
        .doc(collectionName)
        .collection(updatedTransactionData.transactionType)
        .doc(updatedTransactionData.id)
        .update(updatedTransactionData);
      console.log(
        'Successfully edited transaction',
        //transactionData.docId,
        updatedTransactionData,
      );
      dispatch(fetchTransactions() as any); // Assuming fetchTransactions fetches updated data
      return updatedTransactionData;
    } catch (error) {
      ToastAndroid.show('Error editing transaction', ToastAndroid.SHORT);
      console.error('error editing=======>', error);
      throw error;
    }
  },
);

// Action to delete transaction
export const deleteTransaction = createAsyncThunk<Transaction, Transaction>(
  'transactions/deleteTransaction',
  async (transactionData, {dispatch}) => {
    try {
      const userEmail: string = auth().currentUser?.email || '';
      const collectionName: string = `${userEmail}`;

      // Get the transaction document snapshot
      const docSnapshot = await db
        .collection('transactions')
        .doc(collectionName)
        .collection(transactionData.transactionType)
        .doc(transactionData.docId)
        .get();

      // Check if the document exists
      if (!docSnapshot.exists) {
        console.error('Document does not exist');
        return;
      }
      await db
        .collection('transactions')
        .doc(collectionName)
        .collection(transactionData.transactionType)
        .doc(transactionData.docId)
        .delete();
      console.log('Successfully deleted transaction:', transactionData.docId);

      // After deleting the transaction, dispatch fetchTransactions to update the state
      dispatch(fetchTransactions() as any);

      return transactionData;
    } catch (error) {
      ToastAndroid.show('Error deleting transaction', ToastAndroid.SHORT);
      console.error('Error deleting transaction:', error);
      throw error;
    }
  },
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
        },
      )
      .addCase(fetchTransactions.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addTransaction.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions.push(action.payload);
      })
      .addCase(addTransaction.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(editTransaction.pending, state => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(editTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.transactions.push(action.payload);
      })
      .addCase(editTransaction.rejected, state => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const {} = transactionSlice.actions;

export default transactionSlice.reducer;
