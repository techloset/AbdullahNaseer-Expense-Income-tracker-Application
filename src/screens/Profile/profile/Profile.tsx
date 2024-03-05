import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';

interface ProfileHomeProps {
  navigation: any;
}
import auth from '@react-native-firebase/auth';
import ConfirmAlert from '../../../components/ConfirmAlert';
import useProfile from './useProfile';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../store/store';
import {fetchUserData} from '../../../store/slices/userSlice';

const ProfileHome: React.FC<ProfileHomeProps> = ({navigation}) => {
  const {confirmAlert, setConfirmAlert, handleSignOut, handleCancelSignOut} =
    useProfile();
  // const user = useSelector((state: RootState) => state.auth.user);
  // const user = useSelector((state: RootState) => state.auth.user);

  // const userData = auth().currentUser
  // console.log('userData =>', userData)

  // const initialName = userData?.displayName
  // const [name , setName] = useState('initialName')
  // console.log('initialName', initialName)

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user); // Accessing user state

   // Fetch user data upon component mount
   useEffect(() => {
    dispatch(fetchUserData() as any);
  }, [dispatch]);

  // Re-render when user data changes (including initially getting populated)
  useEffect(() => {
    console.log('User data updated, re-rendering');
    console.log('User data', user);
  }, [user]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileHeader}>
        <View style={styles.UserProfile}>
          <View style={styles.ImageContainer}>
            <Image
              style={styles.ProfileImage}
              source={require('../../../assets/user.jpg')}
            />
          </View>
          <View style={styles.ProfileText}>
            <Text style={styles.usernameText}>Username</Text>
            {user && <Text style={styles.nameText}>{user.displayName}</Text>}
            {user ? (
              <Text style={styles.nameText}>{user.displayName}</Text>
            ) : (
              <Text style={styles.nameText}>Loading...</Text>
            )}
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')}>
          <Image source={require('../../../assets/edit.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <TouchableOpacity style={styles.actionContainer}>
            <View style={styles.actionImgContainer}>
              <Image
                style={styles.actionImage}
                source={require('../../../assets/setting.png')}
              />
            </View>
            <View>
              <Text style={styles.actionText}>Setting</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}
            style={styles.actionContainer}>
            <View style={styles.actionImgContainer}>
              <Image
                style={styles.actionImage}
                source={require('../../../assets/warning.png')}
              />
            </View>
            <View>
              <Text style={styles.actionText}>Reset Password</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setConfirmAlert(true)}
            style={styles.actionContainer}>
            <View style={styles.actionImgContainer}>
              <Image
                style={styles.actionImage}
                source={require('../../../assets/logout.png')}
              />
            </View>
            <View>
              <Text style={styles.actionText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <ConfirmAlert
        visible={confirmAlert}
        title={'Logout?'}
        message={'Are you sure you want to logout?'}
        onYesPress={handleSignOut}
        onNoPress={handleCancelSignOut}
      />
    </View>
  );
};

export default ProfileHome;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  profileHeader: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  UserProfile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageContainer: {
    height: 80,
    width: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#7F3DFF',
    alignItems: 'center', // Align items to the top center
    justifyContent: 'center', // Center items horizontally
  },
  ProfileImage: {
    height: '100%', // Adjusted to be 100% of the container height
    width: '100%', // Adjusted to be 100% of the container width
    borderRadius: 40, // Fully rounded image
  },
  usernameText: {
    fontSize: 14,
  },
  nameText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  ProfileText: {
    marginLeft: 16,
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 16,
    // backgroundColor:"red"
  },
  card: {
    // height: '70%',
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 24,
  },
  actionImage: {
    height: 52,
    width: 52,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 9,
    color: 'black',
  },
  actionImgContainer: {},
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 17,
  },
});
