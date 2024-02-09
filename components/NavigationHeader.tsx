import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NavigationHeader = () => {
  return (
    <View>
      <View style={styles.navigationHeader}>
        <View style={styles.arrowButton}>
          <Image source={require('../assets/arrow.png')} />
        </View>
        <View style={styles.centerView}>
          <Text style={styles.headerText}>Update Profile</Text>
        </View>
      </View>
    </View>
  )
}

export default NavigationHeader

const styles = StyleSheet.create({
    container: {
        margin: 16,
      },
      navigationHeader: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
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
      }
})