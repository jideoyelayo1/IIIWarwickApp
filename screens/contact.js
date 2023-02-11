import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Contacts({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text>Product Screen</Text>
      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}