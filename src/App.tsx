import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Navigation from './navigation/Navigation';
import Home from './screens/Home/Home';
import Testing from './screens/Testing/Testing';
import DetailPage from './screens/createTransaction/DetailPage/DetailPage';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
      {/* <Testing/> */}
      {/* <DetailPage/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
