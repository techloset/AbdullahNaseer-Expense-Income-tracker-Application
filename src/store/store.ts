// import {configureStore} from '@reduxjs/toolkit';
// import {transactionSlice} from './transactionsSlice';

// export const store = configureStore({
//   reducer: {
    
//     transactions: transactionSlice.reducer,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;



import { configureStore } from '@reduxjs/toolkit';
import { transactionSlice } from './transactionsSlice';
import authReducer from './authSlice'; // Import your authSlice reducer

export const store = configureStore({
  reducer: {
    transactions: transactionSlice.reducer,
    auth: authReducer // Add the authentication reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;







// import { configureStore } from '@reduxjs/toolkit';
// import { createThunkMiddleware } from '@reduxjs/toolkit';
// import transactionSlice from './transactionsSlice';
// import authReducer from './authSlice';

// const thunkMiddleware = createThunkMiddleware();

// export const store = configureStore({
//   reducer: {
//     transactions: transactionSlice.reducer,
//     auth: authReducer,
//   },
//   middleware: [thunkMiddleware],
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
