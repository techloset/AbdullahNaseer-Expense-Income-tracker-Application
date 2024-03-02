import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactions} from '../../store/transactionsSlice';
import {RootState} from '../../store/store';




const useTransactions = () => {
  const dispatch = useDispatch();
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

