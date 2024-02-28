import {Alert} from 'react-native';
import {db} from '../../config/firebase';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {fetchTransactions} from '../../store/transactionsSlice';
import storage from '@react-native-firebase/storage';
const useTransactionDetail = () => {
  const dispatch = useDispatch();
  // const handleDelete = (transactionType, docId) => {
  //   const user = auth().currentUser;
  //   const userEmail = user?.email;
  //   db.collection('users')
  //     .doc(`${userEmail}`)
  //     .collection(`${transactionType}`)
  //     .doc(`${docId}`)
  //     .delete()
  //     .then(() => {
  //       Alert.alert('Transaction Deleted');
  //       dispatch(fetchTransactions());
  //       console.log('Document successfully deleted!');
  //     })
  //     .catch(error => {
  //       console.error('Error removing document: ', error);
  //     });
  // };
  const handleDelete = async (transactionType, docId) => {
    try {
      const user = auth().currentUser;
      const userEmail = user?.email;

      // Fetch the transaction document
      const docSnapshot = await db
        .collection('users')
        .doc(`${userEmail}`)
        .collection(`${transactionType}`)
        .doc(`${docId}`)
        .get();

      if (!docSnapshot.exists) {
        console.error('Document does not exist');
        return;
      }

      const data = docSnapshot.data();
      
      // Check if the document contains an image URL
      const imageUrl = data.imageUrl;
      console.log('the image url', imageUrl);
      if (imageUrl) {
        // Delete the image from storage
        await storage().refFromURL(imageUrl).delete();
        console.log('Image deleted successfully');
      }

      // Delete the transaction document
      await db
        .collection('users')
        .doc(`${userEmail}`)
        .collection(`${transactionType}`)
        .doc(`${docId}`)
        .delete();

      Alert.alert('Transaction Deleted');
      dispatch(fetchTransactions());
      console.log('Document successfully deleted!');
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };
  return {
    handleDelete,
  };
};

export default useTransactionDetail;
