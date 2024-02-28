// import {FlatList, StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import TransactionCard from './TransactionCard';

// const HomeList = () => {
//   return (
//     <View style={styles.container}>
//     <TransactionCard/>
//     <TransactionCard/>
//     <TransactionCard/>
//     <TransactionCard/>
//     <TransactionCard/>
//     <TransactionCard/>
//     </View>
//   );
// };

// export default HomeList;

// const styles = StyleSheet.create({
//   container: {
//     margin:16,
//   },
// });

// // import {FlatList, StyleSheet, View} from 'react-native';
// // import React from 'react';
// // import TransactionCard from './TransactionCard';

// // const HomeList = () => {
// //   // Dummy data for FlatList
// //   const data = [
// //     {id: '1', key: '1'},
// //     {id: '2', key: '2'},
// //     {id: '3', key: '3'},
// //     {id: '4', key: '4'},
// //     {id: '5', key: '5'},
// //     {id: '6', key: '6'},
// //     {id: '7', key: '7'},
// //     {id: '8', key: '8'},
// //     {id: '9', key: '9'},
// //   ];

// //   const renderItem = ({item}) => <TransactionCard key={item.id} />;

// //   return (
// //     <View style={styles.container}>
// //       <FlatList style={styles.flatList} data={data} renderItem={renderItem} />
// //     </View>
// //   );
// // };

// // export default HomeList;

// // const styles = StyleSheet.create({
// //   container: {
// //     margin: 16,
// //   },
// //   flatList: {
// //     height: 300,
// //   },
// // });

import React from 'react';
import {StyleSheet, View} from 'react-native';
import TransactionCard from './TransactionCard';
import useHome from '../screens/home/useHome';

const HomeList = () => {
  const {isLoading, isError, transactions} = useHome();
  return (
    <View style={styles.container}>
      {transactions.map((item, index) => (
        <TransactionCard key={index} {...item} />
      ))}
    </View>
  );
};

export default HomeList;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});
