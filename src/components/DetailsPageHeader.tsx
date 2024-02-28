import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const DetailPageHeader = ({onPress}) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.navigationHeader}>
          <TouchableOpacity onPress={handleBack} style={styles.arrowButton}>
            <Image source={require('../assets/arrow.png')} />
          </TouchableOpacity>
          <View style={styles.centerView}>
            <Text style={styles.headerText}>Detail Transaction</Text>
          </View>
          <TouchableOpacity onPress={onPress} style={styles.deleteBtn}>
            <Image source={require('../assets/trash.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default DetailPageHeader;

const styles = StyleSheet.create({
  container: {
    // margin: 16,
  },
  navigationHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  arrowButton: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
  },
  deleteBtn: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
