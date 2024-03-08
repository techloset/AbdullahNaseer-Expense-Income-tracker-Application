import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Modal} from 'react-native';
import {ConfirmAlertProps} from '../types/types';
function ConfirmAlert({
  visible,
  title,
  message,
  onYesPress,
  onNoPress,
}: ConfirmAlertProps) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onNoPress}>
      <View style={styles.modalContainer}>
        <View style={styles.main}>
          <View style={styles.container}>
            <View style={styles.header} />
            <View style={styles.titleContainer}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View style={styles.messageContainer}>
              <Text style={styles.message}>{message}</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={onNoPress} style={styles.noButton}>
                <Text style={styles.noButtonText}>No</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onYesPress} style={styles.yesButton}>
                <Text style={styles.yesButtonText}>Yes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  main: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  container: {
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#FFF',
  },
  header: {
    backgroundColor: '#D3BDFF',
    alignSelf: 'center',
    width: 36,
    height: 4,
    marginBottom: 10,
  },
  titleContainer: {
    marginTop: 10,
  },
  title: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
  },
  messageContainer: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },
  message: {
    color: '#91919F',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  noButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE5FF',
    borderRadius: 16,
    padding: 17,
    marginRight: 5,
  },
  noButtonText: {
    fontWeight: '600',
    fontSize: 18,
    color: '#7F3DFF',
  },
  yesButtonText: {
    fontWeight: '600',
    fontSize: 18,
    color: 'white',
  },
  yesButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7F3DFF',
    borderRadius: 16,
    padding: 17,
    marginLeft: 5,
  },
});

export default ConfirmAlert;
