import {View, Text, StyleSheet} from 'react-native';
import React, { useEffect } from 'react';
import Navigation from './navigation/Navigation';
import {Provider} from 'react-redux';
import {store} from './store/store';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <View style={styles.container}>
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
