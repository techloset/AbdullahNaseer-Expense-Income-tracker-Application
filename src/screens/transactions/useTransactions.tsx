import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactions} from '../../store/transactionsSlice';
import {RootState} from '../../store/store';

const useTransactions = () => {
  const [selectedIncome, setSelectedIncome] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(false);
  const [selectSort, setSelectSort] = useState('');
  const [selectedSort, setSelectedSort] = useState<string>('');
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
  const handleSortSelect = (sort: string) => {
    setSelectSort(sort);
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
  const [filteredTransactions, setFilteredTransactions] =
    useState(transactions);

  const handleResetFilters = () => {
    setSelectedIncome(false);
    setSelectedExpense(false);
    setSelectedCategory('');
  };

  const handleFilterTransaction = () => {
    // Filter transactions based on selected states
    const filteredTransactions = transactions.filter(transaction => {
      if (!selectedIncome && !selectedExpense && !selectedCategory) {
        return true; // No filters selected, show all transactions
      }
      if (selectedIncome && transaction.transactionType === 'Income') {
        return true;
      }
      if (selectedExpense && transaction.transactionType === 'Expense') {
        if (!selectedCategory) {
          return true; // If no category selected, show all expenses
        }
        return transaction.category === selectedCategory; // Filter expenses by category
      }
      if (selectedCategory && transaction.category === selectedCategory) {
        if (!selectedIncome && !selectedExpense) {
          return true; // Only category selected, show transactions with selected category
        }
        if (selectedIncome && transaction.transactionType === 'Income') {
          return true; // Show income transactions with selected category
        }
      }
      return false;
    });

    console.log('Filtered Transactions:', filteredTransactions);
    // Handle filtered transactions here (e.g., update UI)
    setFilteredTransactions(filteredTransactions);
    setShowFilter(false);
  };
  return {
    isLoading,
    transactions,
    isError,
    handleFilterModelShow,
    filteredTransactions,
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
    handleSortSelect,
  };
};

export default useTransactions;
