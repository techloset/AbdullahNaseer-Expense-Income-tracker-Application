// import {useState, useEffect} from 'react';
// import firestore from '@react-native-firebase/firestore';
// import storage, {FirebaseStorageTypes} from '@react-native-firebase/storage';
// import other from '../../assets/other.png';
// import food from '../../assets/food.png';
// import transportation from '../../assets/transport.png';
// import salary from '../../assets/salary.png';
// import subscription from '../../assets/subscription.png';
// import shopping from '../../assets/shopping.png';

// import ImagePicker, {
//   Image as PickedImage,
// } from 'react-native-image-crop-picker';
// import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
// import {db} from '../../config/firebase';
// import auth from '@react-native-firebase/auth';
// import {Alert, Dimensions} from 'react-native';
// import {useDispatch} from 'react-redux';
// import {fetchTransactions} from '../../store/transactionsSlice';

// // Define types
// interface Category {
//   id: number;
//   name: string;
//   image: any;
// }
// interface TransactionData {
//   description: string;
//   category: string;
//   money: string;
//   imageUrl: string | null;
//   transactionType: string;
//   timestamp: string;
//   imageId: any;
// }

// // Define hook
// const useCreateTransaction = () => {
//   const [categories, setCategories] = useState<Category[]>([
//     {id: 1, name: 'Shopping', image: shopping},
//     {id: 2, name: 'Subscription', image: subscription},
//     {id: 3, name: 'Food', image: food},
//     {id: 4, name: 'Salary', image: salary},
//     {id: 5, name: 'Transportation', image: transportation},
//   ]);
//   const [category, setCategory] = useState<string>('');
//   const [description, setDescription] = useState<string>('');
//   const [money, setMoney] = useState<string>('');
//   const [modalVisible, setModalVisible] = useState<boolean>(false);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [transactionType, setTransactionType] = useState('Expense');
//   const [fileModalVisible, setFileModalVisible] = useState<boolean>(false);
//   const [image, setImage] = useState<PickedImage | null>(null);
//   const now = new Date();
//   const timeString = now.toLocaleTimeString('en-US', {
//     hour: 'numeric',
//     minute: '2-digit',
//     hour12: true,
//   });

//   const dispatch = useDispatch();

//   const handleImageThrougGallery = () => {
//     console.log('press image');
//     ImagePicker.openPicker({
//       width: 200,
//       height: 200,
//       cropping: true,
//     }).then(pickedImage => {
//       setImage(pickedImage);
//       console.log(pickedImage);
//       setFileModalVisible(false);
//     });
//   };

//   const toggleCategoryModal = () => {
//     console.log(' modal');
//     setModalVisible(!modalVisible);
//   };

//   useEffect(() => {
//     console.log('use effect img', image);
//   }, [image]);

//   const handleImageThroughCamera = () => {
//     console.log('press image');
//     ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true,
//     }).then(pickedImage => {
//       setImage(pickedImage);
//       console.log(pickedImage);
//       setFileModalVisible(false);
//     });
//   };

//   const selectCategory = (categoryName: string) => {
//     setCategory(categoryName);
//     setModalVisible(false);
//   };

//   const toggleFileModal = () => {
//     setFileModalVisible(!fileModalVisible);
//   };

//   const handleOutsidePress = () => {
//     setFileModalVisible(false);
//   };

//   const handleSubmit = async () => {
//     console.log('submit button');
//     console.log(description, category, money);
//     if (!description || !category || !money) {
//       console.error('Required fields are empty');
//       return;
//     }
//     try {
//       console.log('in the try');
//       setLoading(true);
//       const userEmail: string = auth().currentUser?.email || '';
//       const imageId: number = Date.now(); // You can use any method to generate a unique ID for the image
//       // Upload the image to Firebase Storage
//       let imageUrl: string | null = null;
//       if (image) {
//         const imageRef = storage().ref(
//           `/images/${userEmail}/${imageId}`,
//         );
//         await imageRef.putFile(image.path);
//         imageUrl = await imageRef.getDownloadURL();
//       }
//       const transactionData: TransactionData = {
//         description: description,
//         category: category,
//         money: money,
//         imageUrl: imageUrl,
//         transactionType: transactionType,
//         timestamp: timeString,
//          imageId: imageId,
//       };

//       // Concatenate the user's email and image ID to create a unique collection name
//       const collectionName: string = `${userEmail}`;

//       const docRef = await db
//         .collection('users')
//         .doc(collectionName)
//         .collection(`${transactionType}`)
//         .add(transactionData);

//       console.log('Successfully added transaction:', docRef.id);
//       setDescription('');
//       setCategory('');
//       setMoney('');
//       setImage(null);
//       setLoading(false);
//       Alert.alert('Transaction added successfully');
//       dispatch(fetchTransactions());
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return {
//     categories,
//     category,
//     description,
//     modalVisible,
//     fileModalVisible,
//     selectCategory,
//     toggleFileModal,
//     handleOutsidePress,
//     setDescription,
//     setCategory,
//     setModalVisible,
//     setFileModalVisible,
//     money,
//     setMoney,
//     handleImageThrougGallery,
//     handleImageThroughCamera,
//     handleSubmit,
//     transactionType,
//     setTransactionType,
//     image,
//     setImage,
//     toggleCategoryModal,
//     loading,
//     setLoading,
//   };
// };

// export default useCreateTransaction;

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
import {fetchTransactions} from '../../store/transactionsSlice';

// Define types
interface Category {
  id: number;
  name: string;
  image: any;
}
interface TransactionData {
  description: string;
  category: string;
  money: string;
  imageUrl: string | null;
  transactionType: string;
  timestamp: string;
  imageId: any;
}

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
  const dateString = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
  const timestamp = `${dateString} ${timeString}`;
  console.log(timestamp);

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

  const handleSubmit = async () => {
    console.log('submit button');
    console.log(description, category, money);
    if (!description || !category || !money) {
      console.error('Required fields are empty');
      return;
    }
    try {
      console.log('in the try');
      setLoading(true);
      const userEmail: string = auth().currentUser?.email || '';
      const imageId: number = Date.now(); // You can use any method to generate a unique ID for the image
      // Upload the image to Firebase Storage
      let imageUrl: string | null = null;
      if (image) {
        const imageRef = storage().ref(`/images/${userEmail}/${imageId}`);
        await imageRef.putFile(image.path);
        imageUrl = await imageRef.getDownloadURL();
      }
      const transactionData: TransactionData = {
        description: description,
        category: category,
        money: money,
        imageUrl: imageUrl,
        transactionType: transactionType,
        timestamp: timestamp, // Using `timeString` as the timestamp
        imageId: imageId,
      };

      // Concatenate the user's email and image ID to create a unique collection name
      const collectionName: string = `${userEmail}`;

      const docRef = await db
        .collection('users')
        .doc(collectionName)
        .collection(`${transactionType}`)
        .add(transactionData);

      console.log('Successfully added transaction:', docRef.id);
      setDescription('');
      setCategory('');
      setMoney('');
      setImage(null);
      setLoading(false);
      setAlert(true);
      // Alert.alert('Transaction added successfully');
      dispatch(fetchTransactions() as any);
    } catch (error) {
      console.error(error);
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
