import {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
const useCreateTransaction = () => {
  const [categories, setCategories] = useState([
    {id: 1, name: 'Food'},
    {id: 2, name: 'Transport'},
    {id: 3, name: 'Others'},
  ]);
  const [category, setCategory] = useState('');
  const [expenseName, setExpenseName] = useState('');
  const [money, setMoney] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [fileModalVisible, setFileModalVisible] = useState(false);

  const selectCategory = categoryName => {
    setCategory(categoryName);
    setModalVisible(false);
  };

  const toggleFileModal = () => {
    setFileModalVisible(!fileModalVisible);
  };

  const handleOutsidePress = () => {
    setFileModalVisible(false);
  };

  const logState = () => {
    console.log('pressing');
    console.log({
      categories,
      category,
      expenseName,
      modalVisible,
      fileModalVisible,
    });
  };

  const handleSubmit = () => {
    firestore()
      .collection('Expenses')
      .add({
        name: 'Ada Lovelace',
        age: 30,
      })
      .then(() => {
        console.log('User added!');
      });
  };

  return {
    categories,
    category,
    expenseName,
    modalVisible,
    fileModalVisible,
    selectCategory,
    toggleFileModal,
    handleOutsidePress,
    setExpenseName,
    setCategory,
    setModalVisible,
    setFileModalVisible,
    money,
    setMoney,
    logState,
  };
};

export default useCreateTransaction;
