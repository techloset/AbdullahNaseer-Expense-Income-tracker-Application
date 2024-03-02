import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useMemo, useState} from 'react';
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
  const financeSummary = useSelector(selectFinanceSummary);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTransactions() as any);
  }, [dispatch]);
  const {isLoading, transactions, isError} = useSelector(
    (state: RootState) => state.transactions,
  );


  const [selectedFilter, setSelectedFilter] = useState<string>('Today');
  const handleFilterSelect = (filter:string) => {
    setSelectedFilter(filter);
  };

  // const filteredTransactions = transactions.filter(transaction => {
  //   const transactionTimestamp = new Date(transaction.timestamp);
  //   const today = new Date();
  //   const oneWeekAgo = new Date(today);
  //   oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  //   const oneMonthAgo = new Date(today);
  //   oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  //   const oneYearAgo = new Date(today);
  //   oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  
  //   if (selectedFilter === 'Today') {
  //     return transactionTimestamp.toDateString() === today.toDateString();
  //   } else if (selectedFilter === 'Week') {
  //     return transactionTimestamp >= oneWeekAgo;
  //   } else if (selectedFilter === 'Month') {
  //     return transactionTimestamp >= oneMonthAgo;
  //   } else if (selectedFilter === 'Year') {
  //     return transactionTimestamp >= oneYearAgo;
  //   }
  //   // If none of the filters match, return true to include the transaction
  //   return true;
  // });


  const filteredTransactions = useMemo(
    () => {
      if (!isLoading && !isError) {
        return transactions.filter(transaction => {
          const transactionTimestamp = new Date(transaction.timestamp);
          const today = new Date();
          if (selectedFilter === 'Today') {
            return transactionTimestamp.toDateString() === today.toDateString();
          } else if (selectedFilter === 'Week') {
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // Adjust for week start if needed
            return transactionTimestamp >= oneWeekAgo;
          } else if (selectedFilter === 'Month') {
            const oneMonthAgo = new Date();
            oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
            return transactionTimestamp >= oneMonthAgo;
          } else if (selectedFilter === 'Year') {
            const oneYearAgo = new Date();
            oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
            return transactionTimestamp >= oneYearAgo;
          }
  
          return true;
        });
      }
  
      // Return original transactions if loading or error
      return transactions;
    },
    [transactions, isLoading, isError, selectedFilter]
  );
  
  



  return {
    financeSummary,
    isLoading,
    isError,
    transactions: filteredTransactions,
    selectedFilter,
    handleFilterSelect,
    setSelectedFilter,

  };
};


export default useHome;
