import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import NavigationHeader from '../../components/NavigationHeader';

const ExpenseInputScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.navigationContainer}>
        <NavigationHeader title={'Expense'} />
      </View>
      <View style={styles.displayContainer}>
        <Text style={styles.displayContainerHeading}>How Much ?</Text>
        <Text style={styles.displayContainerCash}>$0</Text>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <TextInput style={styles.textInput} placeholder="Email" />
          <TextInput style={styles.textInput} placeholder="Name" />
        </View>
      </View>
    </View>
  );
};

export default ExpenseInputScreen;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 16,
    flex: 1,
    backgroundColor: '#FD3C4A',
  },
  displayContainer: {
    flex: 1,
    paddingTop: '25%',
    paddingHorizontal: 25,
    // backgroundColor:"#FD3C4A"
  },
  displayContainerHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FCFCFC',
  },
  displayContainerCash: {
    fontSize: 64,
    fontWeight: '600',
    color: '#FCFCFC',
  },
  inputContainer: {
    flex: 2,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius:25,
    borderTopLeftRadius:25,
  },
  navigationContainer: {
    padding: 16,
  },
  textInput: {
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    paddingHorizontal: 10,
    margin: 16,
  }
});
