import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import NavigationHeader from '../../components/NavigationHeader';
import AppButton from '../../components/AppButton';

const UpdateProfileScreen = () => {
  return (
    <View style={styles.container}>
      <NavigationHeader title={"Update Profile"} />
      <View style={styles.profileView}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.userImage}
            source={require('../../assets/user.jpg')}
          />
        </View>
        <View style={styles.editButtonContainer}>
          <View style={styles.editButton}>
            <Image
              source={require('../../assets/edit.png')}
              style={styles.editIcon}
            />
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.inputLable}>Email</Text>
        <TextInput style={styles.textInput} placeholder="Email" />
        <Text style={styles.inputLable}>Name</Text>
        <TextInput style={styles.textInput} placeholder="Name" />
      </View>
      <View style={styles.UpdateProfileBtn}>
      <AppButton title={"Update Profile"}/>
      </View>
    </View>
  );
};

export default UpdateProfileScreen;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    position: "relative",
    height: "100%",
  },
  profileView: {
    margin: 16,
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    backgroundColor: 'red',
    borderColor: '#AD00FF',
    borderWidth: 2,
  },
  userImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  editButtonContainer: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: 100,
  },
  editButton: {
    width: 40, // Set a fixed width
    height: 40, // Set a fixed height
    borderRadius: 20, // Make it circular
    backgroundColor: 'white', // White background
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  inputLable: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 9,
    marginTop: 10,
  },
  textInput: {
    width: '100%',
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
  },
  UpdateProfileBtn:{
    position: 'absolute',
    // marginEnd:0
    bottom:55,
    width: '100%',
  }
});


