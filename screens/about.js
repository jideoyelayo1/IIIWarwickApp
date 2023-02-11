import React from 'react';
import { StyleSheet, View, Text,Button } from 'react-native';

export default function About({ navigation }) {
    const pressHandler = () => {
        navigation.goBack();
      }
      
  return (
    <View >
      <Text>About Screen</Text>
      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}