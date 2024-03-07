import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import storage, {FirebaseStorageTypes} from '@react-native-firebase/storage';
import other from '../../assets/other.png';
import food from '../../assets/food.png';
import transportation from '../../assets/transport.png';
import salary from '../../assets/salary.png';
import subscription from '../../assets/subscription.png';
import shopping from '../../assets/shopping.png';

import ImagePicker, {
  Image as PickedImage,
} from 'react-native-image-crop-picker';
import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import {db} from '../../config/firebase';
import auth from '@react-native-firebase/auth';
import {Alert, Dimensions} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  addTransaction,
  fetchTransactions,
} from '../../store/slices/transactionsSlice';
import {Category, TransactionData} from '../../types/types';

// Define hook
const useCreateTransaction = () => {
  const [categories, setCategories] = useState<Category[]>([
    {id: 1, name: 'Shopping', image: shopping},
    {id: 2, name: 'Subscription', image: subscription},
    {id: 3, name: 'Food', image: food},
    {id: 4, name: 'Salary', image: salary},
    {id: 5, name: 'Transportation', image: transportation},
  ]);
  const [category, setCategory] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [money, setMoney] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [transactionType, setTransactionType] = useState('Expense');
  const [fileModalVisible, setFileModalVisible] = useState<boolean>(false);
  const [image, setImage] = useState<PickedImage | null>(null);
  const [alert, setAlert] = useState<boolean>(false);
  const now = new Date();

  const dateString = new Date().toString();

  const dispatch = useDispatch();

  const handleImageThrougGallery = () => {
    console.log('press image');
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    }).then(pickedImage => {
      setImage(pickedImage);
      console.log(pickedImage);
      setFileModalVisible(false);
    });
  };

  const toggleCategoryModal = () => {
    console.log(' modal');
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    console.log('use effect img', image);
  }, [image]);

  const handleImageThroughCamera = () => {
    console.log('press image');
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(pickedImage => {
      setImage(pickedImage);
      console.log(pickedImage);
      setFileModalVisible(false);
    });
  };

  const selectCategory = (categoryName: string) => {
    setCategory(categoryName);
    setModalVisible(false);
  };

  const toggleFileModal = () => {
    setFileModalVisible(!fileModalVisible);
  };

  const handleOutsidePress = () => {
    setFileModalVisible(false);
  };

  const handleSubmit = async (): Promise<void> => {
    try {
      if (!description || !category || !money) {
        console.error('Required fields are empty');
        return;
      }

      setLoading(true);
      const userEmail: string = auth().currentUser?.email || '';
      let imageUrl: string | null = null;

      if (image) {
        const imageId: number = Date.now(); // Generate a unique ID for the image
        const imageRef = storage().ref(`/images/${userEmail}/${imageId}`);
        await imageRef.putFile(image.path);
        imageUrl = await imageRef.getDownloadURL();
      }
      const transactionData: TransactionData = {
        description,
        category,
        money,
        imageUrl,
        transactionType,
        timestamp: new Date().toString(),
        imageId: image ? Date.now() : null, // Set image ID if an image is uploaded
      };
      await dispatch(addTransaction(transactionData) as any);
      setDescription('');
      setCategory('');
      setMoney('');
      setImage(null);
      setTransactionType('Expense');
      setLoading(false);
      setAlert(true);
    } catch (error) {
      console.error('Error adding transaction:', error);
      setLoading(false);
    }
  };

  return {
    categories,
    category,
    description,
    modalVisible,
    fileModalVisible,
    selectCategory,
    toggleFileModal,
    handleOutsidePress,
    setDescription,
    setCategory,
    setModalVisible,
    setFileModalVisible,
    money,
    setMoney,
    handleImageThrougGallery,
    handleImageThroughCamera,
    handleSubmit,
    transactionType,
    setTransactionType,
    image,
    setImage,
    toggleCategoryModal,
    loading,
    setLoading,
    alert,
    setAlert,
  };
};

export default useCreateTransaction;
