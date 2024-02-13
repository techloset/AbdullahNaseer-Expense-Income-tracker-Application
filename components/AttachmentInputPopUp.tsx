import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const AttachmentInputPopUp = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image source={require('../assets/camera.png')} />
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image source={require('../assets/gallery.png')} />
        <Text>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonContainer}>
        <Image source={require('../assets/file.png')} />
        <Text>Camera</Text>
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
    // flex:1,
    backgroundColor: '#FFFFFF',
    // borderRadius: 16,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
  },
  buttonContainer: {
    padding: 16,
    backgroundColor: '#EEE5FF',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
  },
});
