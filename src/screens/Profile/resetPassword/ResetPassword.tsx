import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import NavigationHeader from '../../../components/NavigationHeader';
import AppButton from '../../../components/AppButton';
import useResetPassword from './useResetPassword';

const ResetPassword = () => {
  const {
    currentPassword,
    setCurrentPassword,
    newPassword,
    setNewPassword,
    confirmNewPassword,
    setConfirmNewPassword,
    handleResetPassword,
  } = useResetPassword();
  return (
    <View style={styles.container}>
      <NavigationHeader title={'Reset Password'} />
      <View>
        <TextInput
          onChangeText={setCurrentPassword}
          style={styles.textInput}
          placeholder="current Password"
        />
        <TextInput
          onChangeText={setNewPassword}
          style={styles.textInput}
          placeholder="New Password"
        />
        <TextInput
          onChangeText={setConfirmNewPassword}
          style={styles.textInput}
          placeholder="Retype New Password"
        />
      </View>
      <View style={styles.resetPasswordBtn}>
        <AppButton onPress={handleResetPassword} title={'Reset Password'} />
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    position: 'relative',
    height: '100%',
  },
  textInput: {
    width: '100%',
    height: 56,
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    marginTop: 24,
  },
  resetPasswordBtn: {
    position: 'absolute',
    bottom: 55,
    width: '100%',
  },
});
