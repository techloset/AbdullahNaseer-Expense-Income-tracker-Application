import {Alert} from 'react-native';
import {db} from '../../config/firebase';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {fetchTransactions} from '../../store/transactionsSlice';
import storage from '@react-native-firebase/storage';
const useTransactionDetail = () => {
  const dispatch = useDispatch();
  const handleDelete = async (transactionType, docId) => {
    try {
      const user = auth().currentUser;
      const userEmail = user?.email;
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
      const imageId = data.imageId;
      console.log('the image url', imageUrl);
      if (imageUrl) {
        // Delete the image from storage
        const imagePath = `images/${userEmail}/${imageId}`;
        console.log('the image path', imagePath);
        // await storage().refFromURL(imageUrl).child(imagePath).delete();
        await storage().ref().child(imagePath).delete();
        console.log('Image deleted successfully');
      }
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
  const handleEdit = () => {
    console.log('edit button');
  };
  return {
    handleDelete,
    handleEdit,
  };
};

export default useTransactionDetail;
