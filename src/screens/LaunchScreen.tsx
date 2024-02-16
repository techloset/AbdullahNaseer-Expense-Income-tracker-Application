import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const LaunchScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>montra</Text>
    </View>
  );
}

export default LaunchScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7F3DFF',
  },
  text: {
    fontSize: 56,
    fontWeight: 'bold',
    color: 'white',
  },
});         
 