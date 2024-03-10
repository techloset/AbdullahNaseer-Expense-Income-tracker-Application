// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   Modal,
//   FlatList,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import {CategorySelectModalProps} from '../types/types';

// const CategorySelectModal: React.FC<CategorySelectModalProps> = ({
//   modalVisible,
//   onRequestClose,
//   image,
//   onPress,
// }) => {
//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={modalVisible}
//       onRequestClose={onRequestClose}>
//       <View style={styles.modalContainer}>
//         <FlatList
//           data={image}
//           keyExtractor={item => item.id.toString()}
//           renderItem={({item}) => (
//             <TouchableOpacity
//               style={styles.categoryItemContainer}
//               onPress={() => onPress(item.name)}>
//               <Image source={item.image} />
//               <Text style={styles.categoryItemText}>{item.name}</Text>
//             </TouchableOpacity>
//           )}
//         />
//       </View>
//     </Modal>
//   );
// };

// export default CategorySelectModal;

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   categoryItemContainer: {
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     flexDirection: 'row',
//     width: '90%',
//     margin: 16,
//   },
//   categoryItemText: {
//     color: 'white',
//     fontSize: 24,
//     fontWeight: '600',
//   },
// });


import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {CategorySelectModalProps} from '../types/types';

const CategorySelectModal: React.FC<CategorySelectModalProps> = ({
  modalVisible,
  onRequestClose,
  image,
  onPress,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={onRequestClose}>
      <View style={styles.modalContainer}>
        <View style={styles.contentContainer}>
          <FlatList
            data={image}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.categoryItemContainer}
                onPress={() => onPress(item.name)}>
                <Image source={item.image} />
                <Text style={styles.categoryItemText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CategorySelectModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentContainer: {
    width: Dimensions.get('window').width - 32, // Adjust width based on screen width
    marginHorizontal: 16, // Margin on both sides
  },
  categoryItemContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 8, // Vertical margin between items
  },
  categoryItemText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
});
