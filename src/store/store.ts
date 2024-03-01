import { configureStore } from '@reduxjs/toolkit'
import { transactionSlice } from './transactionsSlice'

export const store = configureStore({
  reducer: {
    // transactionSlice,
    transactions: transactionSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch