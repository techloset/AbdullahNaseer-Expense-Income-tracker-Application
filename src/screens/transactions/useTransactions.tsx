import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactions} from '../../store/transactionsSlice';
import {RootState} from '../../store/store';

const useTransactions = () => {
  const [selectedIncome, setSelectedIncome] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryModelVisible, setCategoryModalVisible] =
    useState<boolean>(false);

  const handleIncomeSelect = () => {
    setSelectedIncome(!selectedIncome);
  };
  const handleExpenseSelect = () => {
    setSelectedExpense(!selectedExpense);
  };
  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCategoryModalVisible(false);
  };

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

  const handleResetFilters = () => {
    setSelectedIncome(false);
    setSelectedExpense(false);
    setSelectedCategory('');
  };
  const handleFilterTransaction = () => {
    console.log('filter');

  };

  return {
    isLoading,
    transactions,
    isError,
    handleFilterModelShow,
    showFilter,
    setShowFilter,
    selectedIncome,
    selectedExpense,
    selectedCategory,
    handleIncomeSelect,
    handleExpenseSelect,
    handleCategorySelect,
    setCategoryModalVisible,
    categoryModelVisible,
    handleResetFilters,
    handleFilterTransaction,
  };
};

export default useTransactions;
