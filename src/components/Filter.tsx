import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useState} from 'react';

const Filter = () => {
  const [selectedFilter, setSelectedFilter] = useState('Today');
  const handleFilterSelect = (filter:string) => {
    setSelectedFilter(filter);
  };

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
          selectedFilter === 'week' && styles.selectedButton,
        ]}
        onPress={() => handleFilterSelect('week')}>
        <Text>Week</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedFilter === 'month' && styles.selectedButton,
        ]}
        onPress={() => handleFilterSelect('month')}>
        <Text>Month</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedFilter === 'year' && styles.selectedButton,
        ]}
        onPress={() => handleFilterSelect('year')}>
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
