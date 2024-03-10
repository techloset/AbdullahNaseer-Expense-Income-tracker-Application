import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  Modal,
} from 'react-native';
import React from 'react';
import TransactionCard from '../../components/TransactionCard';
import MenuBar from '../../components/MenuBar';
import useTransactions from './useTransactions';
import FilterTransactionPopup from '../../components/FilterTransactionPopup';
import {TransactionInterface} from '../../types/types';
import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

const Transaction: React.FC = () => {
  const navigation = useNavigation();
  const {
    transactions,
    isLoading,
    isError,
    handleFilterModelShow,
    showFilter,
    setShowFilter,
    selectedIncome,
    selectedExpense,
    selectedCategory,
    handleExpenseSelect,
    handleIncomeSelect,
    handleCategorySelect,
    setCategoryModalVisible,
    categoryModelVisible,
    handleResetFilters,
    handleFilterTransaction,
    filteredTransactions,
    handleSortSelect,
    selectedSort,
  } = useTransactions();

  const renderItem = ({item}: {item: TransactionInterface}) => (
    <TransactionCard
      key={item.id}
      id={item.id}
      category={item.category}
      description={item.description}
      money={item.money}
      transactionType={item.transactionType}
      imageUrl={item.imageUrl}
      timeStamp={item.timestamp}
      imageId={item.imageId}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('../../assets/dropdown.png')} />
          <Text style={styles.filterButtonText}>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleFilterModelShow}
          style={styles.burgerIcon}>
          <Image source={require('../../assets/burgerIcon.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('FinancialReport' as never);
        }}
        style={styles.alertContainer}>
        <Text style={styles.alertContainerText}>See your financial report</Text>
        <Image source={require('../../assets/arrowright.png')} />
      </TouchableOpacity>
      <View>
        <Text style={styles.headingText}>Today</Text>
      </View>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error fetching transactions</Text>
      ) : (
        <FlatList
          style={styles.flatList}
          data={filteredTransactions as any}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
      {showFilter && (
        <Modal
          style={styles.modelContainer}
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={() => setShowFilter(false)}>
          <View style={styles.modelBackground}>
            <FilterTransactionPopup
              selectedIncome={selectedIncome}
              selectedExpense={selectedExpense}
              selectedCategory={selectedCategory}
              handleExpenseSelect={handleExpenseSelect}
              handleIncomeSelect={handleIncomeSelect}
              handleCategorySelect={handleCategorySelect}
              setCategoryModalVisible={setCategoryModalVisible}
              categoryModelVisible={categoryModelVisible}
              handleResetFilters={handleResetFilters}
              handleFilterTransaction={handleFilterTransaction}
              handleSortSelect={handleSortSelect}
              selectedSort={selectedSort}
            />
          </View>
        </Modal>
      )}
    </View>
  );
};

export default Transaction;
