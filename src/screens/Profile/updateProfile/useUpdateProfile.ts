import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  updateUserProfile,
  uploadProfileImage,
} from '../../../store/slices/userSlice';
import {RootState} from '../../../store/store';
import ImagePicker from 'react-native-image-crop-picker';
import {Alert} from 'react-native';

import { UpdateUserProps } from '../../../types/types';

const useUpdateProfile = (): UpdateUserProps => {
  const dispatch = useDispatch();
  const {user, isLoading, error} = useSelector(
    (state: RootState) => state.user,
  );

  const [displayName, setDisplayName] = useState<string>(
    user?.displayName || '',
  );
  const [email, setEmail] = useState<string>(user?.email || '');
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [fileModalVisible, setFileModalVisible] = useState<boolean>(false);
  const [image, setImage] = useState<any>(null);

  const toggleFileModal = () => {
    setFileModalVisible(!fileModalVisible);
  };

  const handleUpdateProfile = async () => {
    try {
      setUpdateError(null);
      await dispatch(
        updateUserProfile({
          displayName,
          email,
          profileImage: user.profileImage,
        }) as any,
      );
      console.log('User data updated successfully!');
    } catch (error: any) {
      console.error('Error updating user data:', error);
      setUpdateError(error.message);
    }
  };
  const handleImageThrougGallery = () => {
    console.log('press image');
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    }).then(pickedImage => {
      setImage(pickedImage);
      console.log(pickedImage);
      setFileModalVisible(false);
      handleUpdateUserImg(pickedImage);
    });
  };

  const handleUpdateUserImg = async (image: any) => {
    console.log('dspatche called');
    try {
      console.log('dispatch called');
      await dispatch(uploadProfileImage(image) as any);
      Alert.alert('Image uploaded successfully');
    } catch (error: any) {
      console.error('Error updating user image:', error);
      setUpdateError(error.message);
    }
  };
  return {
    displayName,
    email,
    setDisplayName,
    setEmail,
    updateError,
    handleUpdateProfile,
    isLoading,
    fileModalVisible,
    setFileModalVisible,
    toggleFileModal,
    handleUpdateUserImg,
    handleImageThrougGallery,
  };
};

export default useUpdateProfile;
