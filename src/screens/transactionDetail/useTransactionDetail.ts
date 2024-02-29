// import {Alert} from 'react-native';
// import {db} from '../../config/firebase';
// import auth from '@react-native-firebase/auth';
// import {useDispatch} from 'react-redux';
// import {useState} from 'react';
// import {fetchTransactions} from '../../store/transactionsSlice';
// import storage from '@react-native-firebase/storage';
// import {transactioninterface} from '../../types/types';

// const useTransactionDetail: React.FC<
//   transactioninterface
// > = transactionData => {
//   const dispatch = useDispatch();
//   const [editableCategory, setEditableCategory] = useState(
//     transactionData.category,
//   );
//   const [editableTransactionType, setEditableTransactionType] = useState(
//     transactionData.transactionType,
//   );
//   const [editableDescription, setEditableDescription] = useState(
//     transactionData.description,
//   );
//   const [editableMoney, setEditableMoney] = useState(transactionData.money);
//   const [typeModalVisible, setTypeModalVisible] = useState(false);
//   const [categoryModalVisible, setCategoryModalVisible] = useState(false);

//   const handleDelete = async (transactionType, docId) => {
//     try {
//       const user = auth().currentUser;
//       const userEmail = user?.email;
//       const docSnapshot = await db
//         .collection('users')
//         .doc(`${userEmail}`)
//         .collection(`${transactionType}`)
//         .doc(`${docId}`)
//         .get();
//       if (!docSnapshot.exists) {
//         console.error('Document does not exist');
//         return;
//       }
//       const data = docSnapshot.data();
//       // Check if the document contains an image URL
//       const imageUrl = data.imageUrl;
//       const imageId = data.imageId;
//       console.log('the image url', imageUrl);
//       if (imageUrl) {
//         // Delete the image from storage
//         const imagePath = `images/${userEmail}/${imageId}`;
//         console.log('the image path', imagePath);
//         // await storage().refFromURL(imageUrl).child(imagePath).delete();
//         await storage().ref().child(imagePath).delete();
//         console.log('Image deleted successfully');
//       }
//       await db
//         .collection('users')
//         .doc(`${userEmail}`)
//         .collection(`${transactionType}`)
//         .doc(`${docId}`)
//         .delete();
//       Alert.alert('Transaction Deleted');
//       dispatch(fetchTransactions());
//       console.log('Document successfully deleted!');
//     } catch (error) {
//       console.error('Error removing document: ', error);
//     }
//   };

//   const handleEdit = () => {
//     console.log('edit button');
//     console.log('transaction type', transactionData.transactionType);
//   };
//   return {
//     handleDelete,
//     handleEdit,
//   };
// };

// export default useTransactionDetail;

import {Alert} from 'react-native';
import {db} from '../../config/firebase';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {fetchTransactions} from '../../store/transactionsSlice';
import storage from '@react-native-firebase/storage';
import {TransactionInterface} from '../../types/types';

interface UseTransactionDetailProps {
  docId: string;
  category: string;
  description: string;
  money: string;
  transactionType: string;
  imageUrl: string;
  timestamp: string;
}

const useTransactionDetail: React.FC<UseTransactionDetailProps> = (
  transactionData: TransactionInterface,
) => {
  const dispatch = useDispatch();
  const [editableCategory, setEditableCategory] = useState<string>(
    transactionData.category,
  );
  const [editableTransactionType, setEditableTransactionType] =
    useState<string>(transactionData.transactionType);
  const [editableDescription, setEditableDescription] = useState<string>(
    transactionData.description,
  );
  const [editableMoney, setEditableMoney] = useState<string>(
    transactionData.money,
  );
  const [typeModalVisible, setTypeModalVisible] = useState<boolean>(false);
  const [categoryModalVisible, setCategoryModalVisible] =
    useState<boolean>(false);
  const transactionTypes: string[] = ['Expense', 'Income'];

  const handleDelete = async (transactionType: string, docId: string) => {
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

  const handleEdit = async () => {
    try {
      const user = auth().currentUser;
      const userEmail = user?.email;

      // Update the document in Firestore
      await db
        .collection('users')
        .doc(`${userEmail}`)
        .collection(`${transactionData.transactionType}`)
        .doc(`${transactionData.docId}`)
        .update({
          description: editableDescription,
          money: editableMoney,
          // If needed, update other fields as well
        });

      Alert.alert('Transaction Updated'); // Notify the user
      dispatch(fetchTransactions()); // Refresh transactions
      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return {
    handleDelete,
    handleEdit,
    editableCategory,
    setEditableCategory,
    editableTransactionType,
    setEditableTransactionType,
    editableDescription,
    setEditableDescription,
    editableMoney,
    setEditableMoney,
    typeModalVisible,
    setTypeModalVisible,
    categoryModalVisible,
    setCategoryModalVisible,
    transactionTypes,
  };
};

export default useTransactionDetail;
