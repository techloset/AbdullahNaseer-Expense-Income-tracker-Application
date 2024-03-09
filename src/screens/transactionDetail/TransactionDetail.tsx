import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
  KeyboardAvoidingView,
} from 'react-native';
import DetailPageHeader from '../../components/DetailsPageHeader';
import AppButton from '../../components/AppButton';
import {useRoute} from '@react-navigation/native';
import useTransactionDetail from './useTransactionDetail';
import {TransactionInterface} from '../../types/types';
import ConfirmAlert from '../../components/ConfirmAlert';
import Alert from '../../components/Alert';
import {styles} from './styles';

const TransactionDetail: React.FC = () => {
  const route = useRoute();

  const {
    id,
    docId,
    category,
    description,
    money,
    transactionType,
    imageUrl,
    timestamp,
    imageId,
  } = route.params as TransactionInterface;

  const transactionData: TransactionInterface = {
    id,
    docId,
    transactionType,
    category,
    description,
    money,
    imageUrl,
    timestamp,
    imageId,
  };


  const {
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
    setConfirmAlert,
    alert,
    setAlert,
    alertMessage,
  } = useTransactionDetail(transactionData);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={[
            styles.UpperContainer,
            {
              backgroundColor:
                transactionType === 'Expense' ? '#FD3C4A' : '#00A86B',
            },
          ]}>
          <DetailPageHeader onPress={() => setConfirmAlert(true)} />
          <View style={styles.UpperContainerText}>
            <TextInput
              onChangeText={setEditableMoney}
              editable={true}
              style={styles.uppercontainerCashText}>
              {money}
            </TextInput>
            <TextInput style={styles.uppercontainerHeadingText}>
              {description.split(' ').slice(0, 5).join(' ')}
            </TextInput>
            <Text style={styles.upperContainerDateText}>{timestamp}</Text>
          </View>
          <View style={styles.CategoryContainer}>
            <View>
              <Text>Type</Text>
              <Text>{transactionType}</Text>
            </View>
            <View>
              <Text>Category</Text>
              <Text>{category}</Text>
            </View>
            <View>
              <Text>Wallet</Text>
              <Text>Wallet</Text>
            </View>
          </View>
        </View>
        <View style={styles.lowerContainer}>
          <Text style={styles.lowerContainerHeading}>Description</Text>
          <TextInput editable={true} onChangeText={setEditableDescription}>
            {description}
          </TextInput>
          <Text style={styles.lowerContainerHeading}>Attachment</Text>
          <View style={styles.preview}>
            {imageUrl && (
              <Image style={styles.image} source={{uri: `${imageUrl}`}} />
            )}
          </View>
          <View style={styles.editButton}>
            <AppButton onPress={handleEdit} title="Edit" />
          </View>
        </View>
      </ScrollView>
      {/* Type Modal */}
      <Modal
        visible={typeModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setTypeModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {transactionTypes.map((type, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setEditableTransactionType(type);
                  setTypeModalVisible(false);
                }}>
                <Text>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
      {/* Category Modal */}
      <Modal
        visible={categoryModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setCategoryModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* Replace with your category options */}
            <TouchableOpacity
              onPress={() => {
                setEditableCategory('Category 1');
                setCategoryModalVisible(false);
              }}>
              <Text>Category 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setEditableCategory('Category 2');
                setCategoryModalVisible(false);
              }}>
              <Text>Category 2</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setEditableCategory('Category 3');
                setCategoryModalVisible(false);
              }}>
              <Text>Category 3</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ConfirmAlert
        visible={confirmAlert}
        title={'Remove this Transaction'}
        message={'Are you sure you want to remove this transaction'}
        onYesPress={() => handleDelete(transactionType, docId)}
        onNoPress={handleCancelDelete}
      />
      <Alert
        message={alertMessage}
        visible={alert}
        onPress={() => setAlert(false)}
      />
    </View>
  );
};

export default TransactionDetail;
