import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Home({ navigation }) {

  const toReviewDetails = () => {    navigation.push('ReviewDetails');  }
  const toAbout = () => {    navigation.push('About');  }
  const toCalc = () => {    navigation.push('Calculator');  }
  const toProductList = () => {    navigation.push('Product_List');  }
  const toContacts = () => {    navigation.push('Contacts');  }

  return (
    <View >
      <Text >Home Screen</Text>
      <Button title='About' onPress={toAbout} />
      <Button title='Review' onPress={toReviewDetails} />
      <Button title='Calculator' onPress={toCalc} />
      <Button title='Product List' onPress={toProductList} />
      <Button title='Contacts' onPress={toContacts} />
    </View>
  );
}