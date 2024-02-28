import {Alert} from 'react-native';
import {db} from '../../config/firebase';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {fetchTransactions} from '../../store/transactionsSlice';
const useTransactionDetail = () => {
  const dispatch = useDispatch();
  const handleDelete = (transactionType, docId) => {
    const user = auth().currentUser;
    const userEmail = user?.email;
    // const transactionType = 'expense'; // or 'income'
    // const docId = 'your-document-id';
    db.collection('users')
      .doc(`${userEmail}`)
      .collection(`${transactionType}`)
      .doc(`${docId}`)
      .delete()
      .then(() => {
        Alert.alert('Transaction Deleted');
        dispatch(fetchTransactions());
        console.log('Document successfully deleted!');
      })
      .catch(error => {
        console.error('Error removing document: ', error);
      });
  };
  return {
    handleDelete,
  };
};

export default useTransactionDetail;
