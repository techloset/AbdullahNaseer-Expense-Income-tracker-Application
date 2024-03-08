import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import {useSelector} from 'react-redux';
import {financeSummary, HeroSectionProps} from '../types/types';

// interface HeroSectionProps {
//   financeSummary: financeSummary;
// }

const HeroSection: React.FC<HeroSectionProps> = ({financeSummary}) => {
  // const financeSummary = useSelector(selectFinanceSummary);
  console.log('financeSummary', financeSummary);
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text>Account Balance</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>{financeSummary.balance}</Text>
      </View>
      <View style={styles.cardsContainer}>
        <View style={styles.cardIncome}>
          <View style={styles.cardImgContainer}>
            <Image
              style={styles.cardImage}
              source={require('../assets/income.png')}
            />
          </View>
          <View>
            <Text style={styles.cardHeading}>Income</Text>
            <Text style={styles.cardBalance}>{financeSummary.income}</Text>
          </View>
        </View>
        <View style={styles.cardExpense}>
          <View style={styles.cardImgContainer}>
            <Image
              style={styles.cardImage}
              source={require('../assets/expense.png')}
            />
          </View>
          <View>
            <Text style={styles.cardHeading}>Expense</Text>
            <Text style={styles.cardBalance}>-{financeSummary.expenses}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF6E5',
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  heading: {
    alignItems: 'center',
  },
  balanceContainer: {
    alignItems: 'center',
  },
  balanceText: {
    fontSize: 48,
    fontWeight: '600',
    color: 'black',
  },
  cardsContainer: {
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardIncome: {
    width: '48%',
    backgroundColor: '#00A86B',
    borderRadius: 20,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  cardExpense: {
    width: '48%',
    backgroundColor: '#FD3C4A',
    borderRadius: 20,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  cardImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 48,
    width: 48,
    borderRadius: 16,
  },
  cardImage: {
    height: 24,
    width: 28,
  },
  cardHeading: {
    fontSize: 14,
    color: 'white',
    fontWeight: '500',
  },
  cardBalance: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
  },
});
