import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactions} from '../../store/transactionsSlice';
import {RootState} from '../../store/store';

interface useTransactionsProps {}

interface useTransactionReturn {
  isLoading: boolean;
  transactions: any;
  isError: boolean;
}

const useTransactions: React.FC<useTransactionsProps> = () => {
  const dispatch = useDispatch();
  const [transactionsState, setTransactionsState] = useState(null);
  const [showFilter, setShowFilter] = useState(false);

  const handleFilterModelShow = () => {
    setShowFilter(!showFilter);
    console.log("sss")
  };

  useEffect(() => {
    dispatch(fetchTransactions());
  }, []);
  const {isLoading, transactions, isError} = useSelector(
    (state: RootState) => state.transactions,
  );
  // console.log('transactions from hook', transactions);
  // setTransactionsState(transactions)
  useEffect(() => {
    if (transactions) {
      setTransactionsState(transactions);
      console.log('transactionsState', transactionsState);
    }
  }, [transactions]);

  return {
    isLoading,
    transactions,
    isError,
    setTransactionsState,
    transactionsState,
    handleFilterModelShow,
    showFilter,
    setShowFilter
  };
};

export default useTransactions;

// import {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchTransactions} from '../../store/transactionsSlice';
// import {RootState} from '@reduxjs/toolkit/query';

// const useTransactions = () => {
//   const dispatch = useDispatch();
//   const [transactionsState, setTransactionsState] = useState(null);

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//           const response = await dispatch(fetchTransactions())
//           setTransactionsState(response.payload);
//           console.log('transactionsState', transactionsState);
//         } catch (error) {
//           console.error('Error fetching transactions: ', error);
//         }
//       };
//       fetchData();
//     }, [dispatch]);

//     return {
//       transactionsState,
//     };
//   };

// export default useTransactions;
