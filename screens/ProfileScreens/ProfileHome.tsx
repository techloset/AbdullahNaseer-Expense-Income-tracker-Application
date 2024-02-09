
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileHome = () => {
  return (
    <View>
      <View style={styles.profileHeader}>
        <View style={styles.UserProfile}>
          <View style={styles.ImageContainer}>
            <Image  source={require("../../assets/user.jpg")}/>
          </View>
          <View style={styles.ProfileText}>
            <Text style={styles.usernameText}>Username</Text>
            <Text style={styles.nameText}>Iriana Saliha</Text>
          </View>
        </View>

        <View>
          <Image source={require('../../assets/edit.png')} />
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <View style={styles.actionContainer}>
            <View style={styles.actionImgContainer}>
              <Image style={styles.actionImage} source={require('../../assets/setting.png')} />
            </View>
            <View >
              <Text style={styles.actionText}>Setting</Text>
            </View>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.actionImgContainer}>
              <Image style={styles.actionImage} source={require('../../assets/warning.png')} />
            </View>
            <View >
              <Text style={styles.actionText}>Reset Password</Text>
            </View>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.actionImgContainer}>
              <Image style={styles.actionImage} source={require('../../assets/logout.png')} />
            </View>
            <View >
              <Text style={styles.actionText}>Logout</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileHome;

const styles = StyleSheet.create({
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
    height: '95%',
    width: '95%',
    borderRadius: 40,
  },
  usernameText: {
    fontSize: 14,
  },
  nameText: {
    fontSize: 24,
    fontWeight: '600',
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
   borderRadius:24
  },
  actionImage:{
height:52,
width:52,
  },
  actionText:{
    fontSize:16,
    fontWeight:"500",
    marginLeft:9,
  },
  actionImgContainer: {

  },
  actionContainer:{
    flexDirection:"row",
    alignItems: 'center',
    padding:17,
  }
});



