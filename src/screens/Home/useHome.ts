import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useMemo, useState} from 'react';
import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store/store';
import {fetchTransactions} from '../../store/slices/transactionsSlice';
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
  const handleFilterSelect = (filter: string) => {
    setSelectedFilter(filter);
  };
  // const filteredTransactions = useMemo(() => {
  //   if (!isLoading && !isError) {
  //     return transactions.filter(transaction => {
  //       const transactionTimestamp = new Date(transaction.timestamp);
  //       const today = new Date();
  //       console.log('today', today);
  //       if (selectedFilter === 'Today') {
  //         return transactionTimestamp.toDateString() === today.toDateString();
  //       } else if (selectedFilter === 'Week') {
  //         const oneWeekAgo = new Date();
  //         console.log('oneWeekAgo', oneWeekAgo);
  //         oneWeekAgo.setDate(oneWeekAgo.getDate() - 7); // Adjust for week start if needed
  //         return transactionTimestamp >= oneWeekAgo;
  //       } else if (selectedFilter === 'Month') {
  //         const oneMonthAgo = new Date();
  //         console.log('oneMonthAgo', oneMonthAgo);
  //         oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  //         return transactionTimestamp >= oneMonthAgo;
  //       } else if (selectedFilter === 'Year') {
  //         const oneYearAgo = new Date();
  //         oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  //         console.log('oneYearAgo', oneYearAgo);
  //         return transactionTimestamp >= oneYearAgo;
  //       }
  //       return true;
  //     });
  //   }
  //   return transactions;
  // }, [transactions, isLoading, isError, selectedFilter]);


  // const filteredTransactions = useMemo(() => {
  //   if (!isLoading && !isError) {
  //     const filtered = transactions.filter(transaction => {
  //       const transactionTimestamp = new Date(transaction.timestamp);
  //       const today = new Date();
  
  //       if (selectedFilter === 'Today') {
  //         return transactionTimestamp.toDateString() === today.toDateString();
  //       } else if (selectedFilter === 'Week') {
  //         const oneWeekAgo = new Date();
  //         oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  //         return transactionTimestamp >= oneWeekAgo;
  //       } else if (selectedFilter === 'Month') {
  //         const oneMonthAgo = new Date();
  //         oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  //         return transactionTimestamp >= oneMonthAgo;
  //       } else if (selectedFilter === 'Year') {
  //         const oneYearAgo = new Date();
  //         oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  //         return transactionTimestamp >= oneYearAgo;
  //       }
  
  //       return true;
  //     });
  
  //     // Console log selected filter and filtered transactions
  //     console.log('Selected Filter:', selectedFilter);
  //     console.log('Filtered Transactions:', filtered);
  
  //     return filtered;
  //   }
  //   return transactions;
  // }, [transactions, isLoading, isError, selectedFilter]);
  
  const filteredTransactions = useMemo(() => {
    if (!isLoading && !isError) {
      const filtered = transactions.filter(transaction => {
        const transactionTimestamp = new Date(transaction.timestamp);
  
        if (selectedFilter === 'Today') {
          const today = new Date();
          // Compare only date (day, month, and year)
          return (
            transactionTimestamp.getDate() === today.getDate() &&
            transactionTimestamp.getMonth() === today.getMonth() &&
            transactionTimestamp.getFullYear() === today.getFullYear()
          );
        } else if (selectedFilter === 'Week') {
          const oneWeekAgo = new Date();
          oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
          // Compare if the transaction timestamp is after one week ago
          return transactionTimestamp >= oneWeekAgo;
        } else if (selectedFilter === 'Month') {
          const oneMonthAgo = new Date();
          oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
          // Compare if the transaction timestamp is after one month ago
          return transactionTimestamp >= oneMonthAgo;
        } else if (selectedFilter === 'Year') {
          const oneYearAgo = new Date();
          oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
          // Compare if the transaction timestamp is after one year ago
          return transactionTimestamp >= oneYearAgo;
        }
        return true;
      });
  
      // Console log selected filter and filtered transactions
      console.log('Selected Filter:', selectedFilter);
      console.log('Filtered Transactions:', filtered);
  
      return filtered;
    }
    return transactions;
  }, [transactions, isLoading, isError, selectedFilter]);
  
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
