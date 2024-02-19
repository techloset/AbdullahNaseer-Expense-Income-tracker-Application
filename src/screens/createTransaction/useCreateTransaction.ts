// // // import {useState, useEffect} from 'react';
// // // import firestore from '@react-native-firebase/firestore';
// // // import ImagePicker from 'react-native-image-crop-picker';
// // // const useCreateTransaction = () => {
// // //   const [categories, setCategories] = useState([
// // //     {id: 1, name: 'Food'},
// // //     {id: 2, name: 'Transport'},
// // //     {id: 3, name: 'Others'},
// // //   ]);
// // //   const [category, setCategory] = useState('');
// // //   const [expenseName, setExpenseName] = useState('');
// // //   const [money, setMoney] = useState('');
// // //   const [modalVisible, setModalVisible] = useState(false);
// // //   const [fileModalVisible, setFileModalVisible] = useState(false);
// // //   const [image, setImage] = useState(null);

// // //   // const handleImageThrougGallery = () => {
// // //   //   console.log('press image');
// // //   //   ImagePicker.openPicker({
// // //   //     width: 200,
// // //   //     height: 200,
// // //   //     cropping: true,
// // //   //   }).then(pickedImage => {
// // //   //     setImage(pickedImage);
// // //   //     console.log(pickedImage);
// // //   //     console.log(image);
// // //   //     setFileModalVisible(false);
// // //   //   });
// // //   // };

// // //   const handleImageThrougGallery = () => {
// // //     console.log('press image');
// // //     ImagePicker.openPicker({
// // //       width: 200,
// // //       height: 200,
// // //       cropping: true,
// // //     }).then(pickedImage => {
// // //       setImage(pickedImage);
// // //       console.log(pickedImage);
// // //     });
// // //   };

// // //   useEffect(() => {
// // //     console.log("use effect img",image);
// // //   }, [image])

// // //   const handleImageThroughCamera = () => {
// // //     console.log('press image');
// // //     ImagePicker.openCamera({
// // //       width: 300,
// // //       height: 400,
// // //       cropping: true,
// // //     }).then(image => {
// // //       setImage(pickedImage);
// // //       // console.log(image);
// // //       console.log(pickedImage);
// // //     });
// // //   };

// // //   const selectCategory = categoryName => {
// // //     setCategory(categoryName);
// // //     setModalVisible(false);
// // //   };

// // //   const toggleFileModal = () => {
// // //     setFileModalVisible(!fileModalVisible);
// // //   };

// // //   const handleOutsidePress = () => {
// // //     setFileModalVisible(false);
// // //   };
// // //   const handleOutsideClick = () => {
// // //     firestore()
// // //       .collection('Users')
// // //       .add({
// // //         name: 'Ada Lovelace',
// // //         age: 30,
// // //       })
// // //       .then(() => {
// // //         console.log('User added!');
// // //       });
// // //   };
// // //   const logState = () => {
// // //     console.log('pressing');
// // //     console.log({
// // //       categories,
// // //       category,
// // //       expenseName,
// // //       modalVisible,
// // //       fileModalVisible,
// // //     });
// // //   };

// // //   const handleSubmit = () => {
// // //     console.log("submit button");
// // //     firestore()
// // //       .collection('Expenses')
// // //       .add({
// // //         expenseName,
// // //         category,
// // //         money,
// // //         image,
// // //       })
// // //       .then(() => {
// // //         console.log('Expense added!');
// // //       });
// // //   };

// // //   return {
// // //     categories,
// // //     category,
// // //     expenseName,
// // //     modalVisible,
// // //     fileModalVisible,
// // //     selectCategory,
// // //     toggleFileModal,
// // //     handleOutsidePress,
// // //     setExpenseName,
// // //     setCategory,
// // //     setModalVisible,
// // //     setFileModalVisible,
// // //     money,
// // //     setMoney,
// // //     logState,
// // //     handleImageThrougGallery,
// // //     handleImageThroughCamera,
// // //     handleSubmit,
// // //   };
// // // };
// // // 8
// // // export default useCreateTransaction;

// // import {useState, useEffect} from 'react';
// // import firestore from '@react-native-firebase/firestore';
// // import storage from '@react-native-firebase/storage';
// // import ImagePicker from 'react-native-image-crop-picker';
// // import {db} from '../../config/firebase';
// // import auth from '@react-native-firebase/auth';

// // const useCreateTransaction = () => {
// //   const [categories, setCategories] = useState([
// //     {id: 1, name: 'Food'},
// //     {id: 2, name: 'Transport'},
// //     {id: 3, name: 'Others'},
// //   ]);
// //   const [category, setCategory] = useState('');
// //   const [expenseName, setExpenseName] = useState('');
// //   const [money, setMoney] = useState('');
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [fileModalVisible, setFileModalVisible] = useState(false);
// //   const [image, setImage] = useState(null);

// //   const handleImageThrougGallery = () => {
// //     console.log('press image');
// //     ImagePicker.openPicker({
// //       width: 200,
// //       height: 200,
// //       cropping: true,
// //     }).then(pickedImage => {
// //       setImage(pickedImage);
// //       console.log(pickedImage);
// //     });
// //   };

// //   useEffect(() => {
// //     console.log('use effect img', image);
// //   }, [image]);

// //   const handleImageThroughCamera = () => {
// //     console.log('press image');
// //     ImagePicker.openCamera({
// //       width: 300,
// //       height: 400,
// //       cropping: true,
// //     }).then(pickedImage => {
// //       setImage(pickedImage);
// //       console.log(pickedImage);
// //     });
// //   };

// //   const selectCategory = categoryName => {
// //     setCategory(categoryName);
// //     setModalVisible(false);
// //   };

// //   const toggleFileModal = () => {
// //     setFileModalVisible(!fileModalVisible);
// //   };

// //   const handleOutsidePress = () => {
// //     setFileModalVisible(false);
// //   };

// // const handleSubmit = async () => {
// //   console.log('submit button');
// //   console.log(expenseName, category, money);

// //   // Check if any required fields are empty
// //   if (!expenseName || !category || !money) {
// //     console.error('Required fields are empty');
// //     return;
// //   }

// //   try {
// //     console.log('in the try');

// //     // Get current user email
// //     const userEmail = auth().currentUser.email;

// //     // Generate a unique image ID
// //     const imageId = Date.now(); // You can use any method to generate a unique ID for the image

// //     // Upload the image to Firebase Storage
// //     let imageUrl = null;
// //     if (image) {
// //       const imageRef = storage().ref(`/images/${userEmail}/${imageId}_${image.path}`);
// //       await imageRef.putFile(image.path);
// //       imageUrl = await imageRef.getDownloadURL();
// //     }

// //     // Add transaction details to Firestore under the user's collection
// //     const transactionData = {
// //       expenseName: expenseName,
// //       category: category,
// //       money: money,
// //       imageUrl: imageUrl, // Add image URL to the transaction data
// //     };

// //     // Concatenate the user's email and image ID to create a unique collection name
// //     const collectionName = `${userEmail}_${imageId}`;

// //     const docRef = await db.collection('users').doc(collectionName).collection('expenses').add(transactionData);

// //     console.log('Successfully added transaction:', docRef.id);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // };


// //   const logState = () => {
// //     console.log('pressing');
// //     console.log({
// //       categories,
// //       category,
// //       expenseName,
// //       modalVisible,
// //       fileModalVisible,
// //     });
// //   };

// //   return {
// //     categories,
// //     category,
// //     expenseName,
// //     modalVisible,
// //     fileModalVisible,
// //     selectCategory,
// //     toggleFileModal,
// //     handleOutsidePress,
// //     setExpenseName,
// //     setCategory,
// //     setModalVisible,
// //     setFileModalVisible,
// //     money,
// //     setMoney,
// //     logState,
// //     handleImageThrougGallery,
// //     handleImageThroughCamera,
// //     handleSubmit,
// //   };
// // };

// // export default useCreateTransaction;



// import { useState, useEffect } from 'react';
// import firestore from '@react-native-firebase/firestore';
// import storage, { FirebaseStorageTypes } from '@react-native-firebase/storage';
// import ImagePicker, { Image as PickedImage } from 'react-native-image-crop-picker';
// import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
// import { db } from '../../config/firebase';
// import auth from '@react-native-firebase/auth';

// // Define types
// interface Category {
//   id: number;
//   name: string;
// }

// interface TransactionData {
//   expenseName: string;
//   category: string;
//   money: string;
//   imageUrl: string | null;
// }

// // Define hook
// const useCreateTransaction = () => {
//   const [categories, setCategories] = useState<Category[]>([
//     { id: 1, name: 'Food' },
//     { id: 2, name: 'Transport' },
//     { id: 3, name: 'Others' },
//   ]);
//   const [category, setCategory] = useState<string>('');
//   const [expenseName, setExpenseName] = useState<string>('');
//   const [money, setMoney] = useState<string>('');
//   const [modalVisible, setModalVisible] = useState<boolean>(false);
//   const [fileModalVisible, setFileModalVisible] = useState<boolean>(false);
//   const [image, setImage] = useState<PickedImage | null>(null);

//   const handleImageThrougGallery = () => {
//     console.log('press image');
//     ImagePicker.openPicker({
//       width: 200,
//       height: 200,
//       cropping: true,
//     }).then(pickedImage => {
//       setImage(pickedImage);
//       console.log(pickedImage);
//     });
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
//     console.log(expenseName, category, money);

//     // Check if any required fields are empty
//     if (!expenseName || !category || !money) {
//       console.error('Required fields are empty');
//       return;
//     }

//     try {
//       console.log('in the try');

//       // Get current user email
//       const userEmail: string = auth().currentUser?.email || '';

//       // Generate a unique image ID
//       const imageId: number = Date.now(); // You can use any method to generate a unique ID for the image

//       // Upload the image to Firebase Storage
//       let imageUrl: string | null = null;
//       if (image) {
//         const imageRef = storage().ref(`/images/${userEmail}/${imageId}_${image.path}`);
//         await imageRef.putFile(image.path);
//         imageUrl = await imageRef.getDownloadURL();
//       }

//       // Add transaction details to Firestore under the user's collection
//       const transactionData: TransactionData = {
//         expenseName: expenseName,
//         category: category,
//         money: money,
//         imageUrl: imageUrl, // Add image URL to the transaction data
//       };

//       // Concatenate the user's email and image ID to create a unique collection name
//       const collectionName: string = `${userEmail}_${imageId}`;

//       const docRef = await db.collection('users').doc(collectionName).collection('expenses').add(transactionData);

//       console.log('Successfully added transaction:', docRef.id);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const logState = () => {
//     console.log('pressing');
//     console.log({
//       categories,
//       category,
//       expenseName,
//       modalVisible,
//       fileModalVisible,
//     });
//   };

//   return {
//     categories,
//     category,
//     expenseName,
//     modalVisible,
//     fileModalVisible,
//     selectCategory,
//     toggleFileModal,
//     handleOutsidePress,
//     setExpenseName,
//     setCategory,
//     setModalVisible,
//     setFileModalVisible,
//     money,
//     setMoney,
//     logState,
//     handleImageThrougGallery,
//     handleImageThroughCamera,
//     handleSubmit,
//   };
// };

// export default useCreateTransaction;





// useCreateTransaction.tsx
import { useState, useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import storage, { FirebaseStorageTypes } from '@react-native-firebase/storage';
import ImagePicker, { Image as PickedImage } from 'react-native-image-crop-picker';
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { db } from '../../config/firebase';
import auth from '@react-native-firebase/auth';

// Define types
interface Category {
  id: number;
  name: string;
}

interface TransactionData {
  expenseName: string;
  category: string;
  money: string;
  imageUrl: string | null;
}

// Define hook
const useCreateTransaction = () => {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Food' },
    { id: 2, name: 'Transport' },
    { id: 3, name: 'Others' },
  ]);
  const [category, setCategory] = useState<string>('');
  const [expenseName, setExpenseName] = useState<string>('');
  const [money, setMoney] = useState<string>('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [transactionType, setTransactionType] = useState('Expense');
  const [fileModalVisible, setFileModalVisible] = useState<boolean>(false);
  const [image, setImage] = useState<PickedImage | null>(null);

  const handleImageThrougGallery = () => {
    console.log('press image');
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    }).then(pickedImage => {
      setImage(pickedImage);
      console.log(pickedImage);
    });
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
    console.log(expenseName, category, money);

    // Check if any required fields are empty
    if (!expenseName || !category || !money) {
      console.error('Required fields are empty');
      return;
    }

    try {
      console.log('in the try');

      // Get current user email
      const userEmail: string = auth().currentUser?.email || '';

      // Generate a unique image ID
      const imageId: number = Date.now(); // You can use any method to generate a unique ID for the image

      // Upload the image to Firebase Storage
      let imageUrl: string | null = null;
      if (image) {
        const imageRef = storage().ref(`/images/${userEmail}/${imageId}_${image.path}`);
        await imageRef.putFile(image.path);
        imageUrl = await imageRef.getDownloadURL();
      }

      // Add transaction details to Firestore under the user's collection
      const transactionData: TransactionData = {
        expenseName: expenseName,
        category: category,
        money: money,
        imageUrl: imageUrl, // Add image URL to the transaction data
      };

      // Concatenate the user's email and image ID to create a unique collection name
      const collectionName: string = `${userEmail}_${imageId}`;

      const docRef = await db.collection('users').doc(collectionName).collection(`${transactionType}`).add(transactionData);

      console.log('Successfully added transaction:', docRef.id);
    } catch (error) {
      console.error(error);
    }
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
    handleImageThrougGallery,
    handleImageThroughCamera,
    handleSubmit,
    transactionType, 
    setTransactionType
  };
};

export default useCreateTransaction;