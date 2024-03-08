import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import TransactionCard from './TransactionCard';
import useHome from '../screens/home/useHome';
interface HomeListProps {
  transactions: Array<any>;
  isError: boolean;
  isLoading: boolean;
}

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
          <TransactionCard key={index} {...item} />
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
