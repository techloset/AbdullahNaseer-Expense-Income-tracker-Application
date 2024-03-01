import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactions} from '../../store/transactionsSlice';
import {RootState} from '../../store/store';




const useTransactions = () => {
  const dispatch = useDispatch();
  // const [transactionsState, setTransactionsState] = useState(null);
  const [showFilter, setShowFilter] = useState<boolean>(false);

  const handleFilterModelShow = () => {
    setShowFilter(!showFilter);
    console.log('sss');
  };

  useEffect(() => {
    dispatch(fetchTransactions() as any);
  }, [dispatch]);
  const {isLoading, transactions, isError} = useSelector(
    (state: RootState) => state.transactions,
  );
  return {
    isLoading,
    transactions,
    isError,
    handleFilterModelShow,
    showFilter,
    setShowFilter,
  };
};

export default useTransactions;

// // import {useEffect, useState} from 'react';
// // import {useDispatch, useSelector} from 'react-redux';
// // import {fetchTransactions} from '../../store/transactionsSlice';
// // import {RootState} from '@reduxjs/toolkit/query';

// // const useTransactions = () => {
// //   const dispatch = useDispatch();
// //   const [transactionsState, setTransactionsState] = useState(null);

// //     useEffect(() => {
// //       const fetchData = async () => {
// //         try {
// //           const response = await dispatch(fetchTransactions())
// //           setTransactionsState(response.payload);
// //           console.log('transactionsState', transactionsState);
// //         } catch (error) {
// //           console.error('Error fetching transactions: ', error);
// //         }
// //       };
// //       fetchData();
// //     }, [dispatch]);

// //     return {
// //       transactionsState,
// //     };
// //   };

// // export default useTransactions;



// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchTransactions } from '../../store/transactionsSlice';
// import { RootState } from '../../store/store';

// interface useTransactionsProps {}

// interface TransactionItem {
//   id: string;
//   category: string;
//   description: string;
//   money: string;
//   transactionType: string;
//   imageUrl: string;
//   timestamp: string;
// }

// interface useTransactionReturn {
//   isLoading: boolean;
//   transactions: TransactionItem[];
//   isError: boolean;
//   handleFilterModelShow: () => void;
//   showFilter: boolean;
//   setShowFilter: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const useTransactions: React.FC<useTransactionsProps> = () => {
//   const dispatch = useDispatch();
//   const [showFilter, setShowFilter] = useState<boolean>(false);

//   const handleFilterModelShow = () => {
//     setShowFilter(!showFilter);
//     console.log('show/hide filter');
//   };

//   useEffect(() => {
//     dispatch(fetchTransactions());
//   }, [dispatch]);

//   const { isLoading, transactions, isError } = useSelector(
//     (state: RootState) => state.transactions
//   );

//   return {
//     isLoading,
//     transactions,
//     isError,
//     handleFilterModelShow,
//     showFilter,
//     setShowFilter,
//   }
// };

// export default useTransactions;
