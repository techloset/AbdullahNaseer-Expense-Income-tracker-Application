// import {useState, useEffect} from 'react';
// import firestore from '@react-native-firebase/firestore';
// import ImagePicker from 'react-native-image-crop-picker';
// const useCreateTransaction = () => {
//   const [categories, setCategories] = useState([
//     {id: 1, name: 'Food'},
//     {id: 2, name: 'Transport'},
//     {id: 3, name: 'Others'},
//   ]);
//   const [category, setCategory] = useState('');
//   const [expenseName, setExpenseName] = useState('');
//   const [money, setMoney] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);
//   const [fileModalVisible, setFileModalVisible] = useState(false);
//   const [image, setImage] = useState(null);

//   // const handleImageThrougGallery = () => {
//   //   console.log('press image');
//   //   ImagePicker.openPicker({
//   //     width: 200,
//   //     height: 200,
//   //     cropping: true,
//   //   }).then(pickedImage => {
//   //     setImage(pickedImage);
//   //     console.log(pickedImage);
//   //     console.log(image);
//   //     setFileModalVisible(false);
//   //   });
//   // };

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
//     console.log("use effect img",image);
//   }, [image])

//   const handleImageThroughCamera = () => {
//     console.log('press image');
//     ImagePicker.openCamera({
//       width: 300,
//       height: 400,
//       cropping: true,
//     }).then(image => {
//       setImage(pickedImage);
//       // console.log(image);
//       console.log(pickedImage);
//     });
//   };

//   const selectCategory = categoryName => {
//     setCategory(categoryName);
//     setModalVisible(false);
//   };

//   const toggleFileModal = () => {
//     setFileModalVisible(!fileModalVisible);
//   };

//   const handleOutsidePress = () => {
//     setFileModalVisible(false);
//   };
//   const handleOutsideClick = () => {
//     firestore()
//       .collection('Users')
//       .add({
//         name: 'Ada Lovelace',
//         age: 30,
//       })
//       .then(() => {
//         console.log('User added!');
//       });
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

//   const handleSubmit = () => {
//     console.log("submit button");
//     firestore()
//       .collection('Expenses')
//       .add({
//         expenseName,
//         category,
//         money,
//         image,
//       })
//       .then(() => {
//         console.log('Expense added!');
//       });
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
// 8
// export default useCreateTransaction;

import {useState, useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import ImagePicker from 'react-native-image-crop-picker';
import {db} from '../../config/firebase';

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
  const [image, setImage] = useState(null);

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

  const handleSubmit = async () => {
    console.log('submit button');
    console.log(expenseName, category, money);
    // Check if any required fields are empty
    if (!expenseName || !category || !money) {
      console.error('Required fields are empty');
      return;
    }
    try {
      console.log("in the try")
      await db.collection('expense').add({
        expenseName: expenseName,
        category: category,
        money: money,
      });
      console.log('Successfully added');
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
  };
};

export default useCreateTransaction;
