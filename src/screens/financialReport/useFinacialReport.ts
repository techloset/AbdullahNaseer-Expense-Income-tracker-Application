import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

// Define types for categoryIncomes and categoryExpenses
type CategoryIncomes = {
  [category: string]: number;
};

type CategoryExpenses = {
  [category: string]: number;
};

const useFinancialReports = () => {
  const [isExpenseSelected, setIsExpenseSelected] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Select transactions from Redux store
  const transactions = useSelector(
    (state: RootState) => state.transactions.transactions,
  );

  // Calculate financial summary
  const income = transactions
    .filter(transaction => transaction.transactionType === 'Income')
    .reduce((acc, curr) => acc + parseFloat(curr.money), 0);

  const expenses = transactions
    .filter(transaction => transaction.transactionType === 'Expense')
    .reduce((acc, curr) => acc + parseFloat(curr.money), 0);

  // Calculate separate category incomes and expenses
  const categoryIncomes: CategoryIncomes = {};
  const categoryExpenses: CategoryExpenses = {};

  transactions.forEach(transaction => {
    if (transaction.transactionType === 'Income') {
      if (!categoryIncomes[transaction.category]) {
        categoryIncomes[transaction.category] = 0;
      }
      categoryIncomes[transaction.category] += parseFloat(transaction.money);
    } else {
      if (!categoryExpenses[transaction.category]) {
        categoryExpenses[transaction.category] = 0;
      }
      categoryExpenses[transaction.category] += parseFloat(transaction.money);
    }
  });

  // Calculate overall balance
  const balance = income - expenses;

  const handleToggle = () => {
    setIsExpenseSelected(!isExpenseSelected);
  };

  return {
    isExpenseSelected,
    isLoading,
    handleToggle,
    income,
    expenses,
    balance,
    categoryIncomes,
    categoryExpenses,
  };
};

export default useFinancialReports;
