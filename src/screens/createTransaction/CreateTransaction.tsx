// // import React from 'react';
// // import {
// //   StyleSheet,
// //   TextInput,
// //   Text,
// //   View,
// //   TouchableOpacity,
// //   Modal,
// //   FlatList,
// //   TouchableWithoutFeedback,
// // } from 'react-native';
// // import AppButton from '../../components/AppButton';
// // import AttachmentInputPopUp from '../../components/AttachmentInputPopUp';
// // import useTransactionForm from './useCreateTransaction';
// // import NavigationHeader from '../../components/NavigationHeader';

// // interface CreateTransactionProps {
// //   navigation?: any;
// //   backgroundColor?: string;
// // }

// // const CreateTransaction: React.FC<CreateTransactionProps> = ({
// //   navigation,
// //   backgroundColor,
// // }) => {
// //   const {
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
// //     logState,
// //     money,
// //     setMoney,
// //     handleImageThrougGallery,
// //     handleImageThroughCamera,
// //     handleSubmit
// //   } = useTransactionForm();

// //   return (
// //     <TouchableWithoutFeedback onPress={handleOutsidePress}>
// //       <View style={[styles.container, {backgroundColor}]}>
// //           <NavigationHeader title={"Expense"}/>
// //         <View style={styles.displayContainer}>
// //           <Text style={styles.displayContainerHeading}>How Much?</Text>
// //           {/* <Text style={styles.displayContainerCash}>$0</Text> */}
// //           <TextInput
// //             style={[styles.displayContainerCash, styles.inputStyle]}
// //             placeholder="$0"
// //             value={money}
// //             onChangeText={text => setMoney(text)}
// //           />
// //         </View>
// //         <View style={[styles.inputContainer, {flex: fileModalVisible ? 5 : 2}]}>
// //           <View>
// //             <TouchableOpacity
// //               style={styles.textInput}
// //               onPress={() => setModalVisible(true)}>
// //               <Text>{category || 'Select Category'}</Text>
// //             </TouchableOpacity>
// //             <Modal
// //               animationType="slide"
// //               transparent={true}
// //               visible={modalVisible}>
// //               <View style={styles.modalContainer}>
// //                 <FlatList
// //                   data={categories}
// //                   keyExtractor={item => item.id.toString()}
// //                   renderItem={({item}) => (
// //                     <TouchableOpacity
// //                       style={styles.categoryItem}
// //                       onPress={() => selectCategory(item.name)}>
// //                       <Text>{item.name}</Text>
// //                     </TouchableOpacity>
// //                   )}
// //                 />
// //               </View>
// //             </Modal>
// //             <TextInput
// //               style={styles.textInput}
// //               placeholder="Expense Name"
// //               value={expenseName}
// //               onChangeText={text => setExpenseName(text)}
// //             />
// //             <TouchableOpacity
// //               style={styles.fileInput}
// //               onPress={toggleFileModal}>
// //               <Text>Choose File</Text>
// //             </TouchableOpacity>
// //             <Modal
// //               animationType="fade"
// //               transparent={true}
// //               visible={fileModalVisible}>
// //               <TouchableWithoutFeedback onPress={handleOutsidePress}>
// //                 <View style={styles.fileModalContainer}>
// //                   <View style={styles.modalBackground} />
// //                   <View style={styles.attachmentPopup}>
// //                     <AttachmentInputPopUp
// //                       handleImageThrougGallery={handleImageThrougGallery}
// //                       handleImageThroughCamera={handleImageThroughCamera}
// //                     />
// //                   </View>
// //                 </View>
// //               </TouchableWithoutFeedback>
// //             </Modal>
// //           </View>
// //           <View style={styles.continueButton}>
// //             <AppButton title="Continue" onPress={handleSubmit} />
// //           </View>
// //         </View>
// //       </View>
// //     </TouchableWithoutFeedback>
// //   );
// // };

// // export default CreateTransaction;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   continueButton: {
// //     margin: 16,
// //   },
// //   inputStyle: {
// //     borderWidth: 0, // Remove border from input
// //     backgroundColor: 'transparent', // Make background transparent
// //     color: '#FCFCFC', // Text color
// //     fontSize: 64, // Font size
// //     fontWeight: '600', // Font weight
// //   },
// //   displayContainer: {
// //     flex: 1,
// //     paddingTop: '25%',
// //     paddingHorizontal: 25,
// //   },
// //   displayContainerHeading: {
// //     fontSize: 18,
// //     fontWeight: '600',
// //     color: '#FCFCFC',
// //   },
// //   displayContainerCash: {
// //     fontSize: 64,
// //     fontWeight: '600',
// //     color: '#FCFCFC',
// //   },
// //   inputContainer: {
// //     backgroundColor: '#FFFFFF',
// //     borderTopRightRadius: 25,
// //     borderTopLeftRadius: 25,
// //   },
// //   navigationContainer: {
// //     padding: 16,
// //   },
// //   textInput: {
// //     height: 56,
// //     backgroundColor: 'white',
// //     borderRadius: 16,
// //     borderWidth: 1,
// //     borderColor: 'whitesmoke',
// //     paddingHorizontal: 10,
// //     margin: 16,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   fileInput: {
// //     height: 56,
// //     backgroundColor: '#DDDDDD',
// //     borderRadius: 16,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     margin: 16,
// //   },
// //   button: {
// //     margin: 16,
// //   },
// //   modalContainer: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   categoryItem: {
// //     padding: 20,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#CCCCCC',
// //   },
// //   fileModalContainer: {
// //     flex: 1,
// //     justifyContent: 'flex-end',
// //   },
// //   modalBackground: {
// //     position: 'absolute',
// //     top: 0,
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   attachmentPopup: {
// //     backgroundColor: 'white',
// //     borderTopRightRadius: 25,
// //     borderTopLeftRadius: 25,
// //     padding: 20,
// //   },
// // });

// import React, {useState} from 'react';
// import {
//   StyleSheet,
//   TextInput,
//   Text,
//   View,
//   TouchableOpacity,
//   Modal,
//   FlatList,
//   TouchableWithoutFeedback,
// } from 'react-native';
// import AppButton from '../../components/AppButton';
// import AttachmentInputPopUp from '../../components/AttachmentInputPopUp';
// import useTransactionForm from './useCreateTransaction';
// import NavigationHeader from '../../components/NavigationHeader';

// interface CreateTransactionProps {
//   navigation?: any;
//   backgroundColor?: string;
// }

// const CreateTransaction: React.FC<CreateTransactionProps> = ({
//   navigation,
//   backgroundColor,
// }) => {
//   const [transactionType, setTransactionType] = useState('Expense'); // Default to Expense
//   const {
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
//     logState,
//     money,
//     setMoney,
//     handleImageThrougGallery,
//     handleImageThroughCamera,
//     handleSubmit,
//   } = useTransactionForm();

//   return (
//     <TouchableWithoutFeedback onPress={handleOutsidePress}>
//       <View
//         style={[
//           styles.container,
//           {backgroundColor: transactionType === 'Expense' ? 'red' : 'green'},
//         ]}>
//         <NavigationHeader title={transactionType} />
//         {/* Add buttons to toggle between Expense and Income */}
//         <View style={styles.toggleButtonsContainer}>
//           <TouchableOpacity
//             style={[
//               styles.toggleButton,
//               transactionType === 'Expense' && styles.activeButton,
//             ]}
//             onPress={() => setTransactionType('Expense')}>
//             <Text style={styles.toggleButtonText}>Expense</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={[
//               styles.toggleButton,
//               transactionType === 'Income' && styles.activeButton,
//             ]}
//             onPress={() => setTransactionType('Income')}>
//             <Text style={styles.toggleButtonText}>Income</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.displayContainer}>
//           <Text style={styles.displayContainerHeading}>How Much?</Text>
//           <TextInput
//             style={[styles.displayContainerCash, styles.inputStyle]}
//             placeholder="$0"
//             value={money}
//             onChangeText={text => setMoney(text)}
//           />
//         </View>
//         <View style={[styles.inputContainer, {flex: fileModalVisible ? 5 : 2}]}>
//           <View>
//             <TouchableOpacity
//               style={styles.textInput}
//               onPress={() => setModalVisible(true)}>
//               <Text>{category || 'Select Category'}</Text>
//             </TouchableOpacity>
//             <Modal
//               animationType="slide"
//               transparent={true}
//               visible={modalVisible}>
//               <View style={styles.modalContainer}>
//                 <FlatList
//                   data={categories}
//                   keyExtractor={item => item.id.toString()}
//                   renderItem={({item}) => (
//                     <TouchableOpacity
//                       style={styles.categoryItem}
//                       onPress={() => selectCategory(item.name)}>
//                       <Text>{item.name}</Text>
//                     </TouchableOpacity>
//                   )}
//                 />
//               </View>
//             </Modal>
//             <TextInput
//               style={styles.textInput}
//               placeholder="Expense Name"
//               value={expenseName}
//               onChangeText={text => setExpenseName(text)}
//             />
//             <TouchableOpacity
//               style={styles.fileInput}
//               onPress={toggleFileModal}>
//               <Text>Choose File</Text>
//             </TouchableOpacity>
//             <Modal
//               animationType="fade"
//               transparent={true}
//               visible={fileModalVisible}>
//               <TouchableWithoutFeedback onPress={handleOutsidePress}>
//                 <View style={styles.fileModalContainer}>
//                   <View style={styles.modalBackground} />
//                   <View style={styles.attachmentPopup}>
//                     <AttachmentInputPopUp
//                       handleImageThrougGallery={handleImageThrougGallery}
//                       handleImageThroughCamera={handleImageThroughCamera}
//                     />
//                   </View>
//                 </View>
//               </TouchableWithoutFeedback>
//             </Modal>
//           </View>
//           <View style={styles.continueButton}>
//             <AppButton title="Continue" onPress={handleSubmit} />
//           </View>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// export default CreateTransaction;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   toggleButtonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   toggleButton: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 20,
//     marginHorizontal: 10,
//     backgroundColor: '#DDD', // Default button background color
//   },
//   activeButton: {
//     backgroundColor: '#7F3DFF', // Active button background color
//   },
//   toggleButtonText: {
//     color: '#333', // Button text color
//   },
//   displayContainer: {
//     flex: 1,
//     paddingTop: '10%',
//     paddingHorizontal: 25,
//   },
//   displayContainerHeading: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#FCFCFC',
//   },
//   displayContainerCash: {
//     fontSize: 64,
//     fontWeight: '600',
//     color: '#FCFCFC',
//   },
//   inputStyle: {
//     borderWidth: 0,
//     backgroundColor: 'transparent',
//     color: '#FCFCFC',
//     fontSize: 64,
//     fontWeight: '600',
//   },
//   inputContainer: {
//     backgroundColor: '#FFFFFF',
//     borderTopRightRadius: 25,
//     borderTopLeftRadius: 25,
//   },
//   textInput: {
//     height: 56,
//     backgroundColor: 'white',
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: 'whitesmoke',
//     paddingHorizontal: 10,
//     margin: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   fileInput: {
//     height: 56,
//     backgroundColor: '#DDDDDD',
//     borderRadius: 16,
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: 16,
//   },
//   button: {
//     margin: 16,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   categoryItem: {
//     padding: 20,
//     borderBottomWidth: 1,
//     borderBottomColor: '#CCCCCC',
//   },
//   fileModalContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//   },
//   modalBackground: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   attachmentPopup: {
//     backgroundColor: 'white',
//     borderTopRightRadius: 25,
//     borderTopLeftRadius: 25,
//     padding: 20,
//   },
//   continueButton: {
//     margin: 16,
//   },
// });

// CreateTransaction.tsx
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import AppButton from '../../components/AppButton';
import AttachmentInputPopUp from '../../components/AttachmentInputPopUp';
import useTransactionForm from './useCreateTransaction';
import NavigationHeader from '../../components/NavigationHeader';

interface CreateTransactionProps {
  navigation?: any;
  backgroundColor?: string;
}

const CreateTransaction: React.FC<CreateTransactionProps> = ({
  navigation,
  backgroundColor,
}) => {
  // const [transactionType, setTransactionType] = useState('Expense');
  const {
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
    logState,
    money,
    setMoney,
    handleImageThrougGallery,
    handleImageThroughCamera,
    handleSubmit,
    transactionType,
    setTransactionType,
  } = useTransactionForm();

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View
        style={[
          styles.container,
          {backgroundColor: transactionType === 'Expense' ? 'red' : 'green'},
        ]}>
        <NavigationHeader title={transactionType} />
        {/* Add buttons to toggle between Expense and Income */}
        <View style={styles.toggleButtonsContainer}>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              transactionType === 'Expense' && styles.activeButton,
            ]}
            onPress={() => setTransactionType('Expense')}>
            <Text style={styles.toggleButtonText}>Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.toggleButton,
              transactionType === 'Income' && styles.activeButton,
            ]}
            onPress={() => setTransactionType('Income')}>
            <Text style={styles.toggleButtonText}>Income</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.displayContainer}>
          <Text style={styles.displayContainerHeading}>How Much?</Text>
          <TextInput
            style={[styles.displayContainerCash, styles.inputStyle]}
            placeholder="$0"
            value={money}
            onChangeText={text => setMoney(text)}
          />
        </View>
        <View style={[styles.inputContainer, {flex: fileModalVisible ? 5 : 2}]}>
          <View>
            <TouchableOpacity
              style={styles.textInput}
              onPress={() => setModalVisible(true)}>
              <Text>{category || 'Select Category'}</Text>
            </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}>
              <View style={styles.modalContainer}>
                <FlatList
                  data={categories}
                  keyExtractor={item => item.id.toString()}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      style={styles.categoryItem}
                      onPress={() => selectCategory(item.name)}>
                      <Text>{item.name}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </Modal>
            <TextInput
              style={styles.textInput}
              placeholder="Description"
              value={expenseName}
              onChangeText={text => setExpenseName(text)}
            />
            <TouchableOpacity
              style={styles.fileInput}
              onPress={toggleFileModal}>
              <Text>Choose File</Text>
            </TouchableOpacity>
            <Modal
              animationType="fade"
              transparent={true}
              visible={fileModalVisible}>
              <TouchableWithoutFeedback onPress={handleOutsidePress}>
                <View style={styles.fileModalContainer}>
                  <View style={styles.modalBackground} />
                  <View style={styles.attachmentPopup}>
                    <AttachmentInputPopUp
                      handleImageThrougGallery={handleImageThrougGallery}
                      handleImageThroughCamera={handleImageThroughCamera}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </Modal>
          </View>
          <View style={styles.continueButton}>
            <AppButton title="Continue" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreateTransaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toggleButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  toggleButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: '#DDD', // Default button background color
  },
  activeButton: {
    backgroundColor: '#7F3DFF', // Active button background color
  },
  toggleButtonText: {
    color: '#333', // Button text color
  },
  displayContainer: {
    flex: 1,
    paddingTop: '10%',
    paddingHorizontal: 25,
  },
  displayContainerHeading: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FCFCFC',
  },
  displayContainerCash: {
    fontSize: 64,
    fontWeight: '600',
    color: '#FCFCFC',
  },
  inputStyle: {
    borderWidth: 0,
    backgroundColor: 'transparent',
    color: '#FCFCFC',
    fontSize: 64,
    fontWeight: '600',
  },
  inputContainer: {
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  textInput: {
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    paddingHorizontal: 10,
    margin: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fileInput: {
    height: 56,
    backgroundColor: '#DDDDDD',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 16,
  },
  button: {
    margin: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  categoryItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  fileModalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  attachmentPopup: {
    backgroundColor: 'white',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    padding: 20,
  },
  continueButton: {
    margin: 16,
  },
});
