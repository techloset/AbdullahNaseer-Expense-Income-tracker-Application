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
  Image,
  ScrollView,
} from 'react-native';
import AppButton from '../../components/AppButton';
import AttachmentInputPopUp from '../../components/AttachmentInputPopUp';
import useTransactionForm from './useCreateTransaction';
import NavigationHeader from '../../components/NavigationHeader';
import Alert from '../../components/Alert';
import CategorySelectModal from '../../components/CategorySelectModal';
import {styles} from './styles';

const CreateTransaction: React.FC = () => {
  const {
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
  } = useTransactionForm();

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={handleOutsidePress}>
        <View
          style={[
            styles.container,
            {
              backgroundColor:
                transactionType === 'Expense' ? '#FD3C4A' : '#00A86B',
            },
          ]}>
          <NavigationHeader
            title={transactionType}
            headerStyle={{textColor: 'white'}}
          />
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
              keyboardType="numeric"
              placeholderTextColor={'white'}
              value={money}
              onChangeText={text => setMoney(text)}
            />
          </View>
          <View
            style={[styles.inputContainer, {flex: fileModalVisible ? 5 : 2}]}>
            <View>
              <TouchableOpacity
                style={styles.textInput}
                onPress={() => setModalVisible(true)}>
                <Text>{category || 'Select Category'}</Text>
              </TouchableOpacity>
              <CategorySelectModal
                modalVisible={modalVisible}
                onRequestClose={toggleCategoryModal}
                image={categories} // Assuming categories is an array of category objects
                onPress={selectCategory}
              />

              <TextInput
                style={styles.textInput}
                placeholder="Description"
                value={description}
                onChangeText={text => setDescription(text)}
              />
              {!image && (
                <TouchableOpacity
                  style={styles.fileInput}
                  onPress={toggleFileModal}>
                  <Text>Attachment</Text>
                </TouchableOpacity>
              )}
              {image && (
                <View style={styles.ImagePreviewContainer}>
                  <TouchableOpacity
                    onPress={() => setImage(null)}
                    style={styles.imageRemoveBtn}>
                    <Text style={styles.imageRemoveBtnText}>X</Text>
                  </TouchableOpacity>
                  <Image
                    style={styles.previewImage}
                    source={{uri: image.path}}
                  />
                </View>
              )}

              <Modal
                animationType="fade"
                transparent={true}
                visible={fileModalVisible}
                onRequestClose={toggleFileModal}>
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
              <AppButton
                disabled={loading ? true : false}
                title={loading ? `Sending...` : `Continue`}
                onPress={handleSubmit}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Alert
        message={'Transaction Added successfully'}
        visible={alert}
        onPress={() => setAlert(false)}
      />
    </ScrollView>
  );
};

export default CreateTransaction;
