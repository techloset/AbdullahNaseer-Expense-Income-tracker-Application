// import {StyleSheet, Text, TextInput, View} from 'react-native';
// import React from 'react';
// import NavigationHeader from '../../components/NavigationHeader';
// import AppButton from '../../components/AppButton';

// const ResetProfile = () => {
//   return (
//     <View style={styles.container}>
//       <NavigationHeader title={'Reset Password'} />
//       <View>
//         <TextInput style={styles.textInput} placeholder="New Password" />
//         <TextInput style={styles.textInput} placeholder="New Password" />
//         <TextInput style={styles.textInput} placeholder="Retype New Password" />
//       </View>
//       <View>
//       <View style={styles.resetPasswordBtn}>
//       <AppButton title={"Reset Password"}/>
//       </View>
//       </View>
//     </View>
//   );
// };

// export default ResetProfile;

// const styles = StyleSheet.create({
//   container: {
//     margin: 16,
//     position: "relative",
//     height: "100%",
//   },
//   textInput: {
//     width: '100%',
//     height: 56,
//     backgroundColor: 'white',
//     borderRadius: 16,
//     borderWidth: 1,
//     borderColor: 'gray',
//     paddingHorizontal: 10,
//     marginTop:24
//   },
//   resetPasswordBtn:{
//     position: 'absolute',
//     // marginEnd:0
//     bottom:0,
//     width: '100%',
//   }

// });

import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import NavigationHeader from '../../components/NavigationHeader';
import AppButton from '../../components/AppButton';

const ResetProfile = () => {
  return (
    <View style={styles.container}>
      <NavigationHeader title={'Reset Password'} />
      <View>
        <TextInput style={styles.textInput} placeholder="New Password" />
        <TextInput style={styles.textInput} placeholder="New Password" />
        <TextInput style={styles.textInput} placeholder="Retype New Password" />
      </View>
      <View style={styles.resetPasswordBtn}>
        <AppButton title={'Reset Password'} />
      </View>
    </View>
  );
};

export default ResetProfile;

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
