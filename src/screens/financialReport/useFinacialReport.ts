import React from 'react';
import { useState } from 'react';

const useFinancialReports = () => {
  const [isExpenseSelected, setIsExpenseSelected] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleToggle = () => {
    setIsExpenseSelected(!isExpenseSelected);
  };







  return {
    isExpenseSelected,
    isLoading,
    handleToggle,
  };
};

export default useFinancialReports;