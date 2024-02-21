// import {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchTransactions} from '../../store/transactionsSlice';
// import {RootState} from '../../store/store';

// const useTransactions = () => {
//   const dispatch = useDispatch();
//   const [transactionsState,setTransactionsState] = useState(null)

//   useEffect(() => {
//     dispatch(fetchTransactions());
//   }, []);
//   const {isLoading, transactions, isError} = useSelector(
//     (state: RootState) => state.transactions,
//   );
//   console.log('transactions from hook', transactions);
//   // setTransactionsState(transactions)

//   return{
//     // isLoading,
//     // transactions,
//     // isError,
//     // setTransactionsState,
//     transactionsState
//   }
// };

// export default useTransactions;

import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {fetchTransactions} from '../../store/transactionsSlice';

const useTransactions = () => {
  const dispatch = useDispatch();
  const [transactionsState, setTransactionsState] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await dispatch(fetchTransactions());
        setTransactionsState(response.payload); // Assuming fetchTransactions returns the transactions
        console.log('transactionsState', transactionsState);
      } catch (error) {
        console.error('Error fetching transactions: ', error);
      }
    };

    fetchData();
  }, [dispatch]);

  return {
    transactionsState,
  };
};

export default useTransactions;
