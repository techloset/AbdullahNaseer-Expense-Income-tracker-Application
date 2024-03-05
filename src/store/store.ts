import { configureStore } from '@reduxjs/toolkit';
import { transactionSlice } from './slices/transactionsSlice';
import authReducer from './slices/authSlice'; // Import your authSlice reducer

export const store = configureStore({
  reducer: {
    transactions: transactionSlice.reducer,
    auth: authReducer // Add the authentication reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;





