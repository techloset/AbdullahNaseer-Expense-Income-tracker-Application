import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

interface ForgetPassButtonProps {
  title: string;
}

const ForgetPassButton: React.FC<ForgetPassButtonProps> = ({title}) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default ForgetPassButton;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    marginLeft: 200,
  },
});
