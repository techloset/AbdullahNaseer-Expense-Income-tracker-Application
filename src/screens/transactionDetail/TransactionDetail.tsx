import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import DetailPageHeader from '../../components/DetailsPageHeader';
import AppButton from '../../components/AppButton';
import {useRoute} from '@react-navigation/native';

const TransactionDetail = () => {
  const route = useRoute();
  const {docId, category, description, money, transactionType, imageUrl} =
    route.params;
  return (
    <View style={styles.container}>
      <View style={styles.UpperContainer}>
        <DetailPageHeader />
        <View style={styles.UpperContainerText}>
          <Text style={styles.uppercontainerCashText}>$120</Text>
          <Text style={styles.uppercontainerHeadingText}>Buy Some Grocery</Text>
          <Text style={styles.upperContainerDateText}>
            Saturday 4 June 2021 16:20
          </Text>
        </View>
        <View style={styles.CategoryContainer}>
          <View>
            <Text>Type</Text>
            <Text>{transactionType}</Text>
          </View>
          <View>
            <Text>category</Text>
            <Text>{category}</Text>
          </View>
          <View>
            <Text>Wallet</Text>
            <Text>Wallet</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      />
      <View style={styles.lowerContainer}>
        <Text style={styles.lowerContainerHeading}>Description</Text>
        <Text>{description}</Text>
        <Text style={styles.lowerContainerHeading}>Attachment</Text>
        <View style={styles.preview}>
          {/* <Image source={{uri: `${imageUrl}`}} /> */}
        </View>
        <AppButton title="Edit" />
      </View>
    </View>
  );
};

export default TransactionDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  UpperContainer: {
    backgroundColor: '#FD3C4A',
    padding: 16,
    flex: 2,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    position: 'relative',
  },
  UpperContainerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  uppercontainerCashText: {
    fontSize: 48,
    fontWeight: '700',
    color: 'white',
  },
  uppercontainerHeadingText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginVertical: 8,
  },
  upperContainerDateText: {
    fontSize: 13,
    fontWeight: '500',
    color: 'white',
  },
  lowerContainer: {
    flex: 4,
    padding: 16,
  },
  CategoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 16,
    backgroundColor: 'gray',
    marginHorizontal: 16,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 16,
    position: 'absolute',
    bottom: 0,
    marginTop: 50,
  },
  preview: {
    width: '100%',
    height: 116,
    borderRadius: 16,
    backgroundColor: '#7F3DFF',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  lowerContainerHeading: {
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 8,
  },
});
