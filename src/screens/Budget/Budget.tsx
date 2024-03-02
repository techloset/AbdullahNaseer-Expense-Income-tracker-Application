import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Alert from '../../components/Alert';

const Budget = () => {
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
  return (
    <View>
      {/* <Alert
        message={'transaction remove successfully'}
        imageUrl={'../assest/successs.png'}
        onPress={()=>{setAlertVisible(false)}}
      /> */}
    </View>
  );
};

export default Budget;

const styles = StyleSheet.create({});
