import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Graph = () => {
  return (
    <View style={styles.container}>
      
        <Text style={styles.heading}>Send Frequrency</Text>
      <Image
        style={styles.graphImg}
        source={require('../assets/graph.png')}
        resizeMode="cover" // This will center the image and maintain its aspect ratio
      />
    </View>
  );
};

export default Graph;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 170,
    justifyContent: 'center', // Center the image vertically
    alignItems: 'center', // Center the image horizontally
  },
  graphImg: {
    // width: '100%',
    // height: '100%',
    // height:"90%"
  },
  heading:{
    fontSize:18,
    marginTop:16,
    fontWeight:'bold',
    color:"black",
    textAlign:"center",
    justifyContent:"flex-start",
  }
});
