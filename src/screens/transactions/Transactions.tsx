import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import TransactionCard from '../../components/TransactionCard';
import MenuBar from '../../components/MenuBar';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTransactions} from '../../store/transactionsSlice';
import {RootState} from '../../store/store';
import useTransaction from './useTransactions';

const Transaction = () => {
  // Dummy data for FlatList
  const data = [
    {id: '1', key: '1'},
    {id: '2', key: '2'},
    {id: '3', key: '3'},
    {id: '4', key: '4'},
    {id: '5', key: '5'},
    {id: '6', key: '6'},
    {id: '7', key: '7'},
    {id: '8', key: '8'},
    {id: '9', key: '9'},
  ];

  // const transactions = useTransaction();
  const { transactionsState } = useTransaction();
  // console.log(transactionsState)

  const renderItem = ({item}) => <TransactionCard key={item.id} id ={item.id} />;
 


  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchTransactions());
  // }, []);
  // const {isLoading, transactions, isError} = useSelector(
  //   (state: RootState) => state.transactions,
  // );
  // console.log('transactions', transactions);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('../../assets/dropdown.png')} />
          <Text>Month</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.burgerIcon}>
          <Image source={require('../../assets/burgerIcon.png')} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.alertContainer}>
        <Text>See your financial report</Text>
        <Image source={require('../../assets/arrowright.png')} />
      </TouchableOpacity>
      <View>
        <Text style={styles.headingText}>Today</Text>
      </View>
      {/* <FlatList style={styles.flatList} data={data} renderItem={renderItem} /> */}
      <FlatList style={styles.flatList} data={transactionsState} renderItem={renderItem} />
      <MenuBar />
      
    </View>
  );
};

export default Transaction;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  filterButton: {
    height: 40,
    width: 96,
    borderRadius: 20,
    borderColor: 'whitesmoke',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  burgerIcon: {
    height: 40,
    width: 40,
    borderRadius: 15,
    borderColor: 'whitesmoke',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  alertContainer: {
    height: 54,
    backgroundColor: '#EEE5FF',
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 16,
    flexDirection: 'row',
    paddingHorizontal: 16,
    width: '100%',
    alignSelf: 'center',
  },
  headingText: {
    fontSize: 18,
    fontWeight: '600',
  },
  flatList: {},
});
