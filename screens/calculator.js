import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Calculator({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text>Calculator Screen</Text>
      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}