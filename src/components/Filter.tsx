import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Filter = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Week</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Month</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text>Year</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: '#FCEED4',
    borderRadius: 16,
  },
  buttonText:{
    fontSize:14,
    fontWeight:"700"
  }
});
