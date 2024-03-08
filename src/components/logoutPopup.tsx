import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AttachmentInputPopUp} from '../types/types';

// interface AttachmentInputPopUp {
//   handleImageThrougGallery: void
//   handleImageThroughCamera:void
// }

const AttachmentInputPopUp: React.FC<AttachmentInputPopUp> = ({
  handleImageThrougGallery,
  handleImageThroughCamera
}) => {
  return (
    <View style={styles.container}>
      
    </View>
  );
};

export default AttachmentInputPopUp;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#EEE5FF',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 16,
    flex: 1,
  },
});
