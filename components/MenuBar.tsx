import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const MenuBar = () => {
  return (
    <View>
      <View style={styles.menu}>
        <View style={styles.menuItem}>
          <Image
            style={styles.menuItemImg}
            source={require('../assets/home.png')}
          />
          <Text style={styles.menuItemText}>Home</Text>
        </View>
        <View style={styles.menuItem}>
          <Image
            style={styles.menuItemImg}
            source={require('../assets/transaction.png')}
          />
          <Text style={styles.menuItemText}>Transaction</Text>
        </View>
        <View style={styles.addItemButton}>
          <Image
            style={styles.menuItemImg}
            source={require('../assets/close.png')}
          />
        </View>
        <View style={styles.menuItem}>
          <Image
            style={styles.menuItemImg}
            source={require('../assets/piechart.png')}
          />
          <Text style={styles.menuItemText}>Budget</Text>
        </View>
        <View style={styles.menuItem}>
          <Image
            style={styles.menuItemImg}
            source={require('../assets/user.png')}
          />
          <Text style={styles.menuItemText}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

export default MenuBar;

const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    width: '100%',
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderTopEndRadius: 10,
    borderTopStartRadius: 10,
  },
  menuItem: {
    // width: 50,
    // height: 50,
    // backgroundColor: 'blue',
    // borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuItemImg: {
    // height:32,
    // width:32,
  },
  menuItemText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  addItemButton: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#7F3DFF',
  },
});



