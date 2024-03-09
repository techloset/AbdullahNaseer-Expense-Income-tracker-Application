import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
} from 'react-native'; // Import KeyboardAvoidingView
import NavigationHeader from '../../../components/NavigationHeader';
import AppButton from '../../../components/AppButton';
import {useDispatch, useSelector} from 'react-redux';
import useUpdateProfile from './useUpdateProfile'; // Import the custom hook
import {fetchUserData} from '../../../store/slices/userSlice';
import AttachmentInputPopUp from '../../../components/AttachmentInputPopUp';
import {RootState} from '../../../store/store';

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const {user, isLoading, error} = useSelector((state: any) => state.user);
  const {
    displayName,
    setDisplayName,
    email,
    setEmail,
    handleUpdateProfile,
    fileModalVisible,
    toggleFileModal,
    handleUpdateUserImg,
    handleImageThrougGallery,
  } = useUpdateProfile(); // Use the custom hook

  useEffect(() => {
    dispatch(fetchUserData() as any);
  }, [dispatch]);

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
      <View style={styles.container}>
        <NavigationHeader
          title={'Update Profile'}
          headerStyle={{textColor: 'black'}}
        />
        <View style={styles.profileView}>
          <View style={styles.imageContainer}>
            {isLoading ? (
              <Image source={require("../../../assets/loader.png")}/>
            ) : (
              <Image
                style={styles.userImage}
                source={
                  user && user.profileImage
                    ? {uri: user.profileImage}
                    : require('../../../assets/user.png')
                }
              />
            )}
          </View>
          <TouchableOpacity
            onPress={toggleFileModal}
            style={styles.editButtonContainer}>
            <View style={styles.editButton}>
              <Image
                source={require('../../../assets/edit.png')}
                style={styles.editIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.inputLabel}>Email</Text>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              editable={false}
            />
          </View>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Name"
            value={displayName}
            onChangeText={setDisplayName}
          />
        </View>
        <View style={styles.updateProfileBtn}>
          <AppButton title={'Update Profile'} onPress={handleUpdateProfile} />
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={fileModalVisible}
        onRequestClose={toggleFileModal}>
        <View style={styles.fileModalContainer}>
          <View style={styles.modalBackground} />
          <View style={styles.attachmentPopup}>
            <AttachmentInputPopUp
              handleImageThrougGallery={handleImageThrougGallery}
            />
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Change to flex: 1
    margin: 16,
    position: 'relative',
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
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    width: 24,
    height: 24,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 9,
    marginTop: 10,
    color: 'black',
  },
  textInputContainer: {
    width: '100%', // Ensure TextInput container takes full width
  },
  textInput: {
    width: '100%',
    height: 56,
    backgroundColor: 'whitesmoke', // Change background color to differentiate from editable inputs
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'whitesmoke',
    paddingHorizontal: 10,
    color: 'black',
  },
  updateProfileBtn: {
    position: 'absolute',
    bottom: 16, // Adjust button position to the bottom of the screen
    width: '100%',
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
});
