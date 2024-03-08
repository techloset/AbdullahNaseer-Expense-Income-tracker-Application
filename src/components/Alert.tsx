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
