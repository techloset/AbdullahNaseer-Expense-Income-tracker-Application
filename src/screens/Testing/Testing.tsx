import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {db} from '../../config/firebase';
import AppButton from '../../components/AppButton';

const Testing = () => {
  const [text, setText] = useState('');

  const addTodo = async () => {
    try {
      console.log(text);
      await db.collection('todos').add({
        title: text,
        completed: false,
      });
      setText('');
      console.log('Todo added successfully!');
    } catch (error) {
      console.error('Error adding todo:', error);
    }
  };

  return (
    <View>
      <Text>Testing screen</Text>
      <TextInput
        placeholder="Add something"
        onChangeText={inputText => setText(inputText)}
      />
      <TouchableOpacity onPress={addTodo}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Testing;

const styles = StyleSheet.create({});
