import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Category from '../../components/Category';
import NavigationHeader from '../../components/NavigationHeader';
import useFinancialReports from './useFinacialReport';
import {styles} from './styles';

const FinancialReports = () => {
  const {
    isExpenseSelected,
    handleToggle,
    isLoading,
    expenses,
    income,
    balance,
    categoryIncomes,
    categoryExpenses,
  } = useFinancialReports();

  const expenseBackgroundColor = isExpenseSelected ? '#F1F1FA' : '#F1F1FA';
  const incomeBackgroundColor = isExpenseSelected ? '#F1F1FA' : '#F1F1FA';

  const imageText = isExpenseSelected ? 'Expense' : 'Income';
  const bottomContentText = isExpenseSelected ? (
    <View style={styles.BarGraphContainer}>
      {Object.keys(categoryExpenses).map(category => (
        <Category
          color=""
          key={category}
          category={category}
          amount={categoryExpenses[category]}
          image={require('../../assets/FoodLineGraph.png')} // Adjust the image as needed
          style={styles.IncomeCategory2}
          styleamount={styles.amountColor1}
          transactionType="Expense"
        />
      ))}
    </View>
  ) : (
    <View style={styles.BarGraphContainer}>
      {Object.keys(categoryIncomes).map(category => (
        <Category
          color=""
          key={category}
          category={category}
          amount={categoryIncomes[category]}
          image={require('../../assets/SalaryLineGraph.png')} // Adjust the image as needed
          style={styles.IncomeCategory2}
          styleamount={styles.amountColor1}
          transactionType="Income"
        />
      ))}
    </View>
  );

  const financialText = `${isExpenseSelected ? expenses : income}`;

  return (
    <View style={styles.MainContainer}>
      <NavigationHeader
        title="Financial Report"
        headerStyle={{textColor: 'black'}}
      />
      <ScrollView>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.filterButton}>
            <Image
              source={require('../../assets/arrow-down.png')}
              style={styles.filterImage}
            />
            <Text style={styles.filterButtonText}>Month</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.burgerIcon}>
            <Image
              source={require('../../assets/graphicon.png')}
              style={styles.filterImage2}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.financialContainer}>
          {isExpenseSelected ? (
            <Image
              source={require('../../assets/Graph-Expense.png')}
              style={styles.financialImage}
            />
          ) : (
            <Image
              source={require('../../assets/Graph-Income.png')}
              style={styles.financialImage}
            />
          )}
          <Text style={styles.financialText}>{financialText}</Text>
        </View>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleToggle}>
            <View
              style={[
                styles.headingContainer,
                {backgroundColor: expenseBackgroundColor},
              ]}>
              <Text
                style={[
                  styles.headingText,
                  isExpenseSelected && {
                    backgroundColor: '#7F3DFF',
                    color: 'white',
                  },
                ]}>
                Expense
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleToggle}>
            <View
              style={[
                styles.headingContainer,
                {backgroundColor: incomeBackgroundColor},
              ]}>
              <Text
                style={[
                  styles.headingText,
                  !isExpenseSelected && {
                    backgroundColor: '#7F3DFF',
                    color: 'white',
                  },
                ]}>
                Income
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContent}>
          <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.bottomContentButton}>
              <Image
                source={require('../../assets/arrow-down.png')}
                style={styles.bottomImage}
              />
              <Text style={styles.bottomButtonText}>Category</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttomIcon}>
              <Image
                source={require('../../assets/Button-Icon.png')}
                style={styles.categorybtn}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text>{bottomContentText}</Text>
      </ScrollView>
    </View>
  );
};

export default FinancialReports;
