import {StyleSheet, Text, View, Image} from 'react-native';
import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { fetchUserData } from '../store/slices/userSlice';

const HeaderMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  // Fetch user data upon component mount
  useEffect(() => {
    dispatch(fetchUserData() as any);
  }, [dispatch]);
  return (
    <View style={styles.container}>
      <View style={styles.userImgContainer}>
        {
          user && user.profileImage ? (
            <Image
              style={styles.userImage}
              source={{uri: user.profileImage}}
            />
          ) : (
            <Image
              style={styles.userImage}
              source={require('../assets/user.jpg')}
            />
          ) 
        }
      </View>
      <View style={styles.selectMonth}>
        <Image
          style={styles.userImage}
          source={require('../assets/dropdown.png')}
        />
        <Text style={styles.monthText}>October</Text>
      </View>
      <View>
        <Image
          style={styles.notification}
          source={require('../assets/notification.png')}
        />
      </View>
    </View>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF6E5',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  userImage: {
    height: 30,
    width: 30,
    borderRadius: 16,
  },
  userImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
    borderRadius: 50,
    backgroundColor: '#7F3DFF',
  },
  selectMonth: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  notification: {
    height: 30,
    width: 30,
  },
});
