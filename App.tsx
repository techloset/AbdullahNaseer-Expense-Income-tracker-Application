import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Navigation from './navigation/Navigation';
import Home from './screens/HomeScreens/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
