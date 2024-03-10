import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import React from 'react';
import { FinancialCategoryGraphProps } from '../types/types';

const { width } = Dimensions.get('window');
const CONTAINER_WIDTH = width - 32; // Full width of screen minus margins

const FinancialCategoryGraph: React.FC<FinancialCategoryGraphProps> = ({
  category,
  color,
  amount,
  image,
  style,
  styleamount,
  transactionType,
}) => {
  return (
    <View>
      <View style={[styles.CategoryContainer, { width: CONTAINER_WIDTH }]}>
        <View style={styles.Container}>
          <Text style={[styles.ContainerDot, style]}>{color}</Text>
          <Text style={styles.ContainerText}>{category}</Text>
        </View>
        <View>
          <Text style={[styles.ContainerText2, styleamount]}>
            {transactionType === 'Expense' ? '-' : '+'}${amount}
          </Text>
        </View>
      </View>
      <View style={styles.categoryImageContainer}>
        <Image source={image} style={styles.categoryImage} />
      </View>
    </View>
  );
};

export default FinancialCategoryGraph;

const styles = StyleSheet.create({
  CategoryContainer: {
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 34,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 17,
    overflow: 'hidden',
  },
  ContainerDot: {
    height: 14,
    width: 14,
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 7,
  },
  ContainerText: {
    // flex: 1, // Remove flex property
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: 'black',
    marginRight: 10,
    textAlignVertical: 'center',
  },
  ContainerText2: {
    fontFamily: 'Inter-Medium',
    fontSize: 24,
    backgroundColor: 'white',
    marginRight: 3,
  },
  categoryImageContainer: {
    alignItems: 'center',
    marginHorizontal: 16,
  },
  categoryImage: {
    width: CONTAINER_WIDTH * 1, // Adjust image width accordingly
    borderRadius: 25,
    marginTop: 5,
    height: 15,
    resizeMode: 'contain',
  },
});
