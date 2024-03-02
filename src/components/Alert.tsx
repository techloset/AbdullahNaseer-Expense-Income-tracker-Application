// // import {Modal, StyleSheet, Text, View, Image} from 'react-native';
// // import React from 'react';

// // const Alert = () => {
// //   return (
// //     <Modal>
// //       <View>
// //         <Image source={require('../assets/success.png')} />
// //         <Text>Transaction has been successfully Removed</Text>
// //       </View>
// //     </Modal>
// //   );
// // };

// // export default Alert;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //   },
// //   alertContainer: {
// //     width: '100%',
// //     marginHorizontal: 16,
// //     padding: 16,
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });

// import {Modal, StyleSheet, Text, View, Image} from 'react-native';
// import React from 'react';

// const Alert = ({message, imageUrl}) => {
//   return (
//     <Modal
//       transparent={true}
//       animationType="fade"
//       visible={true}>
//       <View style={styles.container}>
//         <View style={styles.alertContainer}>
//           {/* <Image source={{uri: imageUrl}} style={styles.image} /> */}
//           <Image source={require("../assets/success.png")} style={styles.image} />

//           <Text style={styles.message}>The   faa afaf af af a fa fa zf </Text>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default Alert;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   alertContainer: {
//     width: '80%',
//     backgroundColor: 'white',
//     padding: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderRadius: 8,
//   },
//   image: {
//     width: 64,
//     height: 64,
//     marginBottom: 16,
//   },
//   message: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

import {
  Modal,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

interface alertProps {
  message: string;
  onPress: () => void;
  visible: boolean;
}

const Alert: React.FC<alertProps> = ({message, onPress, visible}) => {
  return (
    <Modal transparent={true} animationType="fade" visible={visible}>
      <TouchableOpacity style={styles.overlay} onPress={onPress}>
        <View style={styles.container}>
          <View style={styles.alertContainer}>
            <Image
              source={require('../assets/success.png')}
              style={styles.image}
            />
            <Text style={styles.message}>{message}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default Alert;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertContainer: {
    width: '100%',
    backgroundColor: 'white',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  image: {
    width: 64,
    height: 64,
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
  },
});
