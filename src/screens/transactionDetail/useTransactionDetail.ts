import {Alert} from 'react-native';
import {db} from '../../config/firebase';
import auth from '@react-native-firebase/auth';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {fetchTransactions} from '../../store/transactionsSlice';
import storage from '@react-native-firebase/storage';
import {TransactionInterface} from '../../types/types';

interface TransactionDetailHook {
  handleDelete: (transactionType: string, docId: string) => Promise<void>;
  handleEdit: () => Promise<void>;
  editableCategory: string;
  setEditableCategory: React.Dispatch<React.SetStateAction<string>>;
  editableTransactionType: string;
  setEditableTransactionType: React.Dispatch<React.SetStateAction<string>>;
  editableDescription: string;
  setEditableDescription: React.Dispatch<React.SetStateAction<string>>;
  editableMoney: string;
  setEditableMoney: React.Dispatch<React.SetStateAction<string>>;
  typeModalVisible: boolean;
  setTypeModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  categoryModalVisible: boolean;
  setCategoryModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  transactionTypes: string[];
  // handleCancelDelete: ()=><void>;
}

const useTransactionDetail = (
  transactionData: TransactionInterface,
): TransactionDetailHook => {
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
  const [confirmAlert, setConfirmAlert] = useState<boolean>(false);

  const handleDelete = async (
    
    transactionType: string,
    docId: string,
  ): Promise<void> => {
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
      const imageUrl = data?.imageUrl;
      const imageId = data?.imageId;
      if (imageUrl) {
        const imagePath = `images/${userEmail}/${imageId}`;
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
      dispatch(fetchTransactions() as any);
      console.log('Document successfully deleted!');
      setConfirmAlert(false)
    } catch (error) {
      console.error('Error removing document: ', error);
    }
  };

  const handleEdit = async (): Promise<void> => {
    try {
      const user = auth().currentUser;
      const userEmail = user?.email;
      await db
        .collection('users')
        .doc(`${userEmail}`)
        .collection(`${transactionData.transactionType}`)
        .doc(`${transactionData.docId}`)
        .update({
          description: editableDescription,
          money: editableMoney,
        });
      Alert.alert('Transaction Updated');
      dispatch(fetchTransactions() as any);
      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  };
  const handleCancelDelete = () => {
    setConfirmAlert(false);
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
    handleCancelDelete,
    confirmAlert,
    setConfirmAlert

  };
};

export default useTransactionDetail;
