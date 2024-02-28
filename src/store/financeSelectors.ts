import { RootState } from '../store/store'; // Update the path based on your actual file structure

export const selectFinanceSummary = (state: RootState) => {
  const transactions = state.transactions.transactions;
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
};
