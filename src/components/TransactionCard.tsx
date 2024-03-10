import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNavigation} from '@react-navigation/native';
import {TransactionInterface, TransactionCardProps} from '../types/types';

const TransactionCard: React.FC<TransactionCardProps> = ({
  id,
  category,
  description,
  money,
  transactionType,
  imageUrl,
  timeStamp,
  imageId,
}) => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    // Navigate to TransactionDetail screen with the parameters
    navigation.navigate('TransactionDetail', {
      docId: id,
      category: category,
      description: description,
      money: money,
      transactionType: transactionType,
      imageUrl: imageUrl,
      timestamp: timeStamp,
      imageId: imageId,
    } as TransactionInterface);
  };
  const getImageSource = (category: string) => {
    switch (category) {
      case 'Salary':
        return require(`../assets/salary.png`);
      case 'Transportation':
        return require(`../assets/transport.png`);
      case 'Food':
        return require(`../assets/food.png`);
      case 'Subscription':
        return require(`../assets/subscription.png`);
      case 'Shopping':
        return require(`../assets/shopping.png`);
      default:
        return require(`../assets/other.png`);
    }
  };
  const extractTime = (timestamp: string) => {
    const dateObj = new Date(timestamp);
    return dateObj.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
  };

  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.container}>
      <View style={styles.detailsContainer}>
        <Image style={styles.inputImg} source={getImageSource(category)} />
        <View style={styles.detailsTextContainer}>
          <Text style={styles.detailsContainerHeading}>{category}</Text>
          <Text style={styles.detailsContaineDescription}>
            {description.length > 30
              ? `${description.slice(0, 30)}...`
              : description}
          </Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <Text
          style={[
            styles.timeContainerCash,
            transactionType === 'Expense' ? {color: 'red'} : {color: 'green'},
          ]}>
          ${money}
        </Text>
        <Text style={styles.timeContainerTime}>
          {timeStamp && extractTime(timeStamp)}
        </Text>
      </View>
    </TouchableOpacity>
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
    marginBottom: 8,
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
    color: 'black',
  },
  detailsContaineDescription: {
    fontSize: 13,
    fontWeight: '500',
  },
  timeContainer: {},
  timeContainerCash: {
    fontSize: 16,
    // color: 'red',
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
