// // import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// // import {db} from '../config/firebase';
// // import auth from '@react-native-firebase/auth';
// // import {useEffect} from 'react';

// // interface Transaction {
// //   id: string;
// //   // imageUrl: string;
// //   // Define other properties of the transaction object here
// // }

// // const userEmail: string = auth().currentUser?.email || '';

// // // Action
// // export const fetchTransactions = createAsyncThunk<Transaction[]>(
// //   'transactions/fetchTransactions',
// //   async () => {
// //     // const res = await db
// //     //   .collection('users')
// //     //   .doc(`${userEmail}`)
// //     //   .collection('Income')
// //     //   .get();
// //     // return res.docs.map(doc => ({
// //     //   id: doc.id,
// //     // }));
// //     const res = await db
// //       .collection('users')
// //       .doc(`${userEmail}`)
// //       .collection('Income')
// //       .get();
// //     const data = res.docs.map(doc => doc.data());
// //     return data;
// //   },
// // );

// // // Create the transaction slice
// // export const transactionSlice = createSlice({
// //   name: 'transactions',
// //   initialState: {
// //     transactions: [] as Transaction[],
// //     isLoading: false,
// //     isError: false,
// //   },
// //   reducers: {},
// //   extraReducers: builder => {
// //     builder
// //       .addCase(fetchTransactions.pending, state => {
// //         state.isLoading = true;
// //         state.isError = false;
// //       })
// //       .addCase(fetchTransactions.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         state.transactions = action.payload;
// //       })
// //       .addCase(fetchTransactions.rejected, state => {
// //         state.isLoading = false;
// //         state.isError = true;
// //       });
// //   },
// // });

// // // Export actions and reducer
// // export const {} = transactionSlice.actions;
// // export default transactionSlice.reducer;

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { db } from '../config/firebase';
// import auth from '@react-native-firebase/auth';
// import { useEffect } from 'react';

// interface Transaction {
//   // id: string;
//   // imageUrl: string;
//   // Define other properties of the transaction object here
// }

// // Action
// export const fetchTransactions = createAsyncThunk<Transaction[]>(
//   'transactions/fetchTransactions',
//   async () => {
//     const userEmail: string = auth().currentUser?.email || '';
//     const res = await db
//       .collection('users')
//       .doc(`${userEmail}`)
//       .collection('Income')
//       .get();
//     const data = res.docs.map(doc => doc.data());
//     return data;
//   },

// );

// // Create the transaction slice
// export const transactionSlice = createSlice({
//   name: 'transactions',
//   initialState: {
//     transactions: [] as Transaction[],
//     isLoading: false,
//     isError: false,
//   },
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(fetchTransactions.pending, state => {
//         state.isLoading = true;
//         state.isError = false;
//       })
//       .addCase(fetchTransactions.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.transactions = action.payload;
//         console.log(action.payload)
//       })
//       .addCase(fetchTransactions.rejected, state => {
//         state.isLoading = false;
//         state.isError = true;
//       });
//   },
// });

// // Export actions and reducer
// export const {} = transactionSlice.actions;
// export default transactionSlice.reducer;




import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { db } from '../config/firebase';
import auth from '@react-native-firebase/auth';
import { useEffect } from 'react';

interface Transaction {
  // Define properties of the transaction object here
}

// Action
export const fetchTransactions = createAsyncThunk<Transaction[]>(
  'transactions/fetchTransactions',
  async () => {
    const userEmail: string = auth().currentUser?.email || '';
    const incomeRes = await db
      .collection('users')
      .doc(`${userEmail}`)
      .collection('Income')
      .get();
    const incomeData = incomeRes.docs.map(doc => doc.data());

    const expenseRes = await db
      .collection('users')
      .doc(`${userEmail}`)
      .collection('Expense')
      .get();
    const expenseData = expenseRes.docs.map(doc => doc.data());

    // Combine income and expense data
    const allTransactions = [...incomeData, ...expenseData];

    return allTransactions;
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
        console.log(action.payload);
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
