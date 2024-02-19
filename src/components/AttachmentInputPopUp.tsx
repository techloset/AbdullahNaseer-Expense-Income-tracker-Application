import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface AttachmentInputPopUp {
  handleImageThrougGallery: any
  handleImageThroughCamera:any
}

const AttachmentInputPopUp: React.FC<AttachmentInputPopUp> = ({
  handleImageThrougGallery,
  handleImageThroughCamera
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleImageThroughCamera} style={styles.buttonContainer}>
        <Image source={require('../assets/camera.png')} />
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleImageThrougGallery} style={styles.buttonContainer}>
        <Image source={require('../assets/gallery.png')} />
        <Text>Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image source={require('../assets/file.png')} />
        <Text>File</Text>
      </TouchableOpacity>
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
