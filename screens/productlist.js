import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Product_List({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View>
      <Text>Product Screen</Text>
      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}