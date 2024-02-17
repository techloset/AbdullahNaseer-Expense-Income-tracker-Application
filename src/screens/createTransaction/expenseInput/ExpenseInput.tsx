import {StyleSheet, TextInput, Text, View, TouchableOpacity, Modal, FlatList, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import React, { useState } from 'react';
import NavigationHeader from '../../../components/NavigationHeader';
import AppButton from '../../../components/AppButton';
import AttachmentInputPopUp from '../../../components/AttachmentInputPopUp';

const categories = [
  { id: 1, name: 'Food' },
  { id: 2, name: 'Transport' },
  { id: 3, name: 'Others' },
];

const ExpenseInputScreen = () => {
  const [category, setCategory] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [fileModalVisible, setFileModalVisible] = useState(false);

  const selectCategory = (categoryName:string) => {
    setCategory(categoryName);
    setModalVisible(false);
  };

  const toggleFileModal = () => {
    setFileModalVisible(!fileModalVisible);
  };

  const handleOutsidePress = () => {
    setFileModalVisible(false);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.container}>
        <View style={styles.navigationContainer}>
          <NavigationHeader title={'Expense'} />
        </View>
        <View style={styles.displayContainer}>
          <Text style={styles.displayContainerHeading}>How Much ?</Text>
          <Text style={styles.displayContainerCash}>$0</Text>
        </View>
        <View style={[styles.inputContainer, {flex: fileModalVisible ? 5 : 2}]}>
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
              onPress={toggleFileModal}
            >
              <Text>Choose File</Text>
            </TouchableOpacity>
            <Modal
              animationType="fade"
              transparent={true}
              visible={fileModalVisible}
            >
              <TouchableWithoutFeedback onPress={handleOutsidePress}>
                <View style={styles.fileModalContainer}>
                  <View style={styles.modalBackground} />
                  <View style={styles.attachmentPopup}>
                    <AttachmentInputPopUp/>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
          <View style={styles.button}>
            <AppButton title="Continue" />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ExpenseInputScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FD3C4A',
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
  fileModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  attachmentPopup: {
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
  },
});
