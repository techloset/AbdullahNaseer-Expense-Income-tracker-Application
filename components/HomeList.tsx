import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TransactionCard from './TransactionCard';

const HomeList = () => {
  return (
    <View style={styles.container}>
    <TransactionCard/>
    </View>
  );
};

export default HomeList;

const styles = StyleSheet.create({
  container: {
    margin:16,
  },
});
