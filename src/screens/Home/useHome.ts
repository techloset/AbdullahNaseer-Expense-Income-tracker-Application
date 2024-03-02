import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';
import {fetchTransactions} from '../../store/transactionsSlice';
const selectTransactions = (state: RootState) =>
  state.transactions.transactions;

export const selectFinanceSummary = createSelector(
  [selectTransactions],
  transactions => {
    const income = transactions
      .filter(transaction => transaction.transactionType === 'Income')
      .reduce((acc, curr) => acc + parseFloat(curr.money), 0);

    const expenses = transactions
      .filter(transaction => transaction.transactionType === 'Expense')
      .reduce((acc, curr) => acc + parseFloat(curr.money), 0);

    const balance = income - expenses;

    return {
      income,
      expenses,
      balance,
    };
  },
);

const useHome = () => {
  // Use the memoized selector inside the hook
  const financeSummary = useSelector(selectFinanceSummary);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions() as any);
  }, [dispatch]);
  const {isLoading, transactions, isError} = useSelector(
    (state: RootState) => state.transactions,
  );

  return {
    financeSummary,
    isLoading, 
    isError,
    transactions
  };
};

export default useHome;
