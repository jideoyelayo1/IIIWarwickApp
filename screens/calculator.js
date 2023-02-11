import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Calculator({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View>
      <Text>Calculator Screen</Text>
      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}