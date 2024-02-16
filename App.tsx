import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Navigation from './src/navigation/Navigation';
import Home from './src/screens/HomeScreens/Home';
import Testing from './src/screens/Testing/Testing';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
      {/* <Testing/> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
