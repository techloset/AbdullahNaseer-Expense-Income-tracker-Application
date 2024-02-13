import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const TransactionCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image
          style={styles.inputImg}
          source={require('../assets/inputImg.png')}
        />
        <View style={styles.detailsTextContainer}>
          <Text style={styles.detailsContainerHeading}>Shopping</Text>
          <Text style={styles.detailsContaineDescription}>
            Buy some Groceries
          </Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeContainerCash}>-$120</Text>
        <Text style={styles.timeContainerTime}>10:00 PM</Text>
      </View>
    </View>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FCFCFC',
    height: 90,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailsTextContainer: {
    marginLeft: 10,
  },
  detailsContainerHeading: {
    fontSize: 16,
    fontWeight: '500',
  },
  detailsContaineDescription: {
    fontSize: 13,
  },
  timeContainer: {},
  timeContainerCash: {
    fontSize: 16,
    color: 'red',
    fontWeight: '600',
  },
  timeContainerTime: {
    fontSize: 13,
  },
  inputImg: {
    height: 60,
    width: 60,
    borderRadius: 16,
  },
});
