import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const FilterTransactionPopup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Reset Transaction</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.headerText}>
            Filter by
        </Text>
      </View>
    </View>
  );
};

export default FilterTransactionPopup;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'gray',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    height: '60%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '600',
  },
  headerButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#EEE5FF',
    borderRadius: 16,
  },
  headerButtonText: {
    color: '#7F3DFF',
  },
});
