// import React, {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from 'react-redux';
// import {fetchTransactions} from '../../store/slices/transactionsSlice';
// import {RootState} from '../../store/store';

// const useTransactions = () => {
//   const [selectedIncome, setSelectedIncome] = useState(false);
//   const [selectedExpense, setSelectedExpense] = useState(false);
//   const [selectSort, setSelectSort] = useState('');
//   const [selectedSort, setSelectedSort] = useState<string>('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [categoryModelVisible, setCategoryModalVisible] =
//     useState<boolean>(false);

//   const handleIncomeSelect = () => {
//     setSelectedIncome(!selectedIncome);
//   };
//   const handleExpenseSelect = () => {
//     setSelectedExpense(!selectedExpense);
//   };
//   const handleCategorySelect = (category: string) => {
//     setSelectedCategory(category);
//     setCategoryModalVisible(false);
//   };
//   const handleSortSelect = (sort: string) => {
//     setSelectSort(sort);
//   };

//   const dispatch = useDispatch();
//   const [showFilter, setShowFilter] = useState<boolean>(false);
//   const handleFilterModelShow = () => {
//     setShowFilter(!showFilter);
//     console.log('sss');
//   };

//   useEffect(() => {
//     dispatch(fetchTransactions() as any);
//   }, [dispatch]);
//   const {isLoading, transactions, isError} = useSelector(
//     (state: RootState) => state.transactions,
//   );
//   const [filteredTransactions, setFilteredTransactions] =
//     useState(transactions);

//   const handleResetFilters = () => {
//     setSelectedIncome(false);
//     setSelectedExpense(false);
//     setSelectedCategory('');
//   };

//   const handleFilterTransaction = () => {
//     // Filter transactions based on selected states
//     const filteredTransactions = transactions.filter(transaction => {
//       if (!selectedIncome && !selectedExpense && !selectedCategory) {
//         return true; // No filters selected, show all transactions
//       }
//       if (selectedIncome && transaction.transactionType === 'Income') {
//         return true;
//       }
//       if (selectedExpense && transaction.transactionType === 'Expense') {
//         if (!selectedCategory) {
//           return true; // If no category selected, show all expenses
//         }
//         return transaction.category === selectedCategory; // Filter expenses by category
//       }
//       if (selectedCategory && transaction.category === selectedCategory) {
//         if (!selectedIncome && !selectedExpense) {
//           return true; // Only category selected, show transactions with selected category
//         }
//         if (selectedIncome && transaction.transactionType === 'Income') {
//           return true; // Show income transactions with selected category
//         }
//       }
//       return false;
//     });

//     console.log('Filtered Transactions:', filteredTransactions);
//     // Handle filtered transactions here (e.g., update UI)
//     setFilteredTransactions(filteredTransactions);
//     setShowFilter(false);
//   };
//   return {
//     isLoading,
//     transactions,
//     isError,
//     handleFilterModelShow,
//     filteredTransactions,
//     showFilter,
//     setShowFilter,
//     selectedIncome,
//     selectedExpense,
//     selectedCategory,
//     handleIncomeSelect,
//     handleExpenseSelect,
//     handleCategorySelect,
//     setCategoryModalVisible,
//     categoryModelVisible,
//     handleResetFilters,
//     handleFilterTransaction,
//     handleSortSelect,
//   };
// };

// export default useTransactions;

import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactions} from '../../store/slices/transactionsSlice';
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
  // const handleSortSelect = (sort: string) => {
  //   setSelectSort(sort);
  // };

  const dispatch = useDispatch();
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const handleFilterModelShow = () => {
    setShowFilter(!showFilter);
    console.log('sss');
  };

  const {isLoading, transactions, isError} = useSelector(
    (state: RootState) => state.transactions,
  );
  const [filteredTransactions, setFilteredTransactions] = useState(
    transactions || [],
  );

  useEffect(() => {
    if (!transactions) {
      dispatch(fetchTransactions() as any);
    }
  }, [dispatch, transactions]);
  useEffect(() => {
    if (transactions) {
      setFilteredTransactions(transactions);
    }
  }, [transactions]);

  const handleResetFilters = () => {
    setSelectedIncome(false);
    setSelectedExpense(false);
    setSelectedCategory('');
  };
  const handleFilterTransaction = () => {
    // Filter transactions based on selected states
    const filteredTransactions = transactions.filter(transaction => {
      // If no filters selected, show all transactions
      if (!selectedIncome && !selectedExpense && !selectedCategory) {
        return true;
      }

      // If both expense and category are selected, filter expenses by category
      if (
        selectedExpense &&
        selectedCategory &&
        transaction.transactionType === 'Expense'
      ) {
        return transaction.category === selectedCategory;
      }

      // If both income and category are selected, filter income by category
      if (
        selectedIncome &&
        selectedCategory &&
        transaction.transactionType === 'Income'
      ) {
        return transaction.category === selectedCategory;
      }

      // If only category is selected, filter transactions by category regardless of type
      if (selectedCategory) {
        return transaction.category === selectedCategory;
      }

      // If only expense is selected, filter expense transactions
      if (selectedExpense && transaction.transactionType === 'Expense') {
        return true;
      }

      // If only income is selected, filter income transactions
      if (selectedIncome && transaction.transactionType === 'Income') {
        return true;
      }

      return false;
    });

    console.log('Filtered Transactions:', filteredTransactions);
    // Handle filtered transactions here (e.g., update UI)
    setFilteredTransactions(filteredTransactions);
    setShowFilter(false);
  };

  const handleSortSelect = (sort: string) => {
    setSelectedSort(sort);
    console.log('sort', sort);

    // // Sort transactions based on selected criteria
    // switch (sort) {
    //   case 'newest':
    //     setFilteredTransactions(
    //       [...filteredTransactions].sort(
    //         (a, b) =>
    //           new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
    //       ),
    //     );
    //     break;
    //   case 'oldest':
    //     setFilteredTransactions(
    //       [...filteredTransactions].sort(
    //         (a, b) =>
    //           new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime(),
    //       ),
    //     );
    //     break;
    //   case 'lowest':
    //     setFilteredTransactions(
    //       [...filteredTransactions].sort((a, b) => a.money - b.money),
    //     );
    //     break;
    //   case 'highest':
    //     setFilteredTransactions(
    //       [...filteredTransactions].sort((a, b) => b.money - a.money),
    //     );
    //     break;
    //   default:
    //     // Do nothing or handle default case
    //     break;
    // }
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
    selectedSort,
  };
};

export default useTransactions;
