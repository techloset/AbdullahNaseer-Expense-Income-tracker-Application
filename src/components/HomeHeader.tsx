import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const HomeHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headingText}>Recent Transaction See All</Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: '#EEE5FF',
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#7F3DFF',
  },
  headingText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black'
  },
});
