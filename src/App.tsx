import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Navigation from './navigation/Navigation';

import DetailPage from './screens/transactionDetail/TransactionDetail';
import ExpenseInput from './screens/createTransaction/CreateTransaction';
import {Provider} from 'react-redux';
import {store} from './store/store';
import CreateTransaction from './screens/createTransaction/CreateTransaction';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {/* <CreateTransaction backgroundColor={'red'} /> */}
        {/* <CreateTransaction backgroundColor={'green'} /> */}
        <Navigation />
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
