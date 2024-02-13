// import {StyleSheet, Text, TextInput, View} from 'react-native';
// import React from 'react';
// import NavigationHeader from '../../components/NavigationHeader';
// import AppButton from '../../components/AppButton';

// const ExpenseInputScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.navigationContainer}>
//         <NavigationHeader title={'Expense'} />
//       </View>
//       <View style={styles.displayContainer}>
//         <Text style={styles.displayContainerHeading}>How Much ?</Text>
//         <Text style={styles.displayContainerCash}>$0</Text>
//       </View>
//       <View style={styles.inputContainer}>
//         <View>
//           <TextInput style={styles.textInput} placeholder="category" />
//           <TextInput style={styles.textInput} placeholder="Name" />
//           <TextInput style={styles.textInput} placeholder="Name" />
//         </View>
//         <View style={styles.button}>
//           <AppButton title="Continue" />
//         </View>
//       </View>
//     </View>
//   );
// };

// export default ExpenseInputScreen;

// const styles = StyleSheet.create({
//   container: {
//     // paddingTop: 16,
//     flex: 1,
//     backgroundColor: '#FD3C4A',
//   },
//   displayContainer: {
//     flex: 1,
//     paddingTop: '25%',
//     paddingHorizontal: 25,
//     // backgroundColor:"#FD3C4A"
//   },
//   displayContainerHeading: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FCFCFC',
//   },
//   displayContainerCash: {
//     fontSize: 64,
//     fontWeight: '600',
//     color: '#FCFCFC',
//   },
//   inputContainer: {
//     flex: 2,
//     backgroundColor: '#FFFFFF',
//     borderTopRightRadius: 25,
//     borderTopLeftRadius: 25,
//   },
//   navigationContainer: {
//     padding: 16,
//   },
//   textInput: {
//     height: 56,
//     backgroundColor: 'white',
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: 'whitesmoke',
//     paddingHorizontal: 10,
//     margin: 16,
//   },
//   button: {
//     margin: 16,
//   },
// });



import {StyleSheet, TextInput, Text, View, TouchableOpacity, Modal, FlatList} from 'react-native';
import React, { useState } from 'react';
import NavigationHeader from '../../components/NavigationHeader';
import AppButton from '../../components/AppButton';

const categories = [
  { id: 1, name: 'Food' },
  { id: 2, name: 'Transport' },
  { id: 3, name: 'Others' },
];

const IncomeInputScreen = () => {
  const [category, setCategory] = useState('');
  const [expenseName, setExpenseName] = useState('');

  const [modalVisible, setModalVisible] = useState(false);

  const selectCategory = (categoryName) => {
    setCategory(categoryName);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.navigationContainer}>
        <NavigationHeader title={'Income'} />
      </View>
      <View style={styles.displayContainer}>
        <Text style={styles.displayContainerHeading}>How Much ?</Text>
        <Text style={styles.displayContainerCash}>$0</Text>
      </View>
      <View style={styles.inputContainer}>
        <View>
          <TouchableOpacity
            style={styles.textInput}
            onPress={() => setModalVisible(true)}
          >
            <Text>{category || 'Select Category'}</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View style={styles.modalContainer}>
              <FlatList
                data={categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.categoryItem}
                    onPress={() => selectCategory(item.name)}
                  >
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </Modal>
          <TextInput
            style={styles.textInput}
            placeholder="Expense Name"
            value={expenseName}
            onChangeText={text => setExpenseName(text)}
          />
          <TouchableOpacity
            style={styles.fileInput}
            onPress={() => {
              // Logic to handle file selection
            }}>
            <Text>Choose File</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <AppButton title="Continue" />
        </View>
      </View>
    </View>
  );
};

export default IncomeInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00A86B',
  },
  displayContainer: {
    flex: 1,
    paddingTop: '25%',
    paddingHorizontal: 25,
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
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  fileInput: {
    height: 56,
    backgroundColor: '#DDDDDD',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  button: {
    margin: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  categoryItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
});
