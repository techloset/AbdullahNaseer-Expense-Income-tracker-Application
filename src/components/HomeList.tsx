import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TransactionCard from './TransactionCard';
import useHome from '../screens/home/useHome';
import {HomeListProps} from '../types/types';

const HomeList: React.FC<HomeListProps> = ({
  transactions,
  isError,
  isLoading,
}) => {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : isError ? (
        <Text>Error occurred. Please try again later.</Text>
      ) : (
        transactions.map((item, index) => (
          <TransactionCard key={item.id} {...item} />
        ))
      )}
    </View>
  );
};

export default HomeList;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});
