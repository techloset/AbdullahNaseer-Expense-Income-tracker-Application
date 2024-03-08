// import { StyleSheet, Text, View, Modal } from 'react-native'
// import React from 'react'

// const CategorySelectModal = ({modalVisible, onRequestClose,image,onPress,text}) => {
//   return (
// //     <Modal
// //     animationType="slide"
// //     transparent={true}
// //     visible={modalVisible}
// //     onRequestClose={toggleCategoryModal}>
// //     <View style={styles.modalContainer}>
// //       <FlatList
// //         data={categories}
// //         keyExtractor={item => item.id.toString()}
// //         renderItem={({item}) => (
// //           <TouchableOpacity
// //             style={styles.categoryItemContainer}
// //             onPress={() => selectCategory(item.name)}>
// //             <Image source={item.image} />
// //             <Text style={styles.categoryItemText}>{item.name}</Text>
// //           </TouchableOpacity>
// //         )}
// //       />
// //     </View>
// //   </Modal>
// <></>
//   )
// }

// export default CategorySelectModal

// const styles = StyleSheet.create({})

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

interface CategorySelectModalProps {
  modalVisible: boolean;
  onRequestClose: () => void;
  image: any;
  onPress: (name: string) => void;
}

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
  categoryItemContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    margin: 16,
  },
  categoryItemText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
  },
});
