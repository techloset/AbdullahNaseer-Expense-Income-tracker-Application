import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {filterProps} from '../types/types';

const Filter: React.FC<filterProps> = ({
  selectedFilter,
  setSelectedFilter,
  handleFilterSelect,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedFilter === 'Today' && styles.selectedButton,
        ]}
        onPress={() => handleFilterSelect('Today')}>
        <Text>Today</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedFilter === 'Week' && styles.selectedButton,
        ]}
        onPress={() => handleFilterSelect('Week')}>
        <Text>Week</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedFilter === 'Month' && styles.selectedButton,
        ]}
        onPress={() => handleFilterSelect('Month')}>
        <Text>Month</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedFilter === 'Year' && styles.selectedButton,
        ]}
        onPress={() => handleFilterSelect('Year')}>
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
    // backgroundColor: '#FCEED4',
    borderRadius: 16,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
  },
  selectedButton: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    backgroundColor: '#FCEED4',
    borderRadius: 16,
  },
});
