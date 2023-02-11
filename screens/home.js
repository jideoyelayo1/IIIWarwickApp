import React from 'react';
import { StyleSheet, Text, Button,SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Home({ navigation }) {

  const toReviewDetails = () => {    navigation.push('ReviewDetails');  }
  const toAbout = () => {    navigation.push('About');  }
  const toCalc = () => {    navigation.push('Calculator');  }
  const toProductList = () => {    navigation.push('Product_List');  }
  const toContacts = () => {    navigation.push('Contacts');  }

  return (
    <SafeAreaView style={globalStyles.container} >
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title='About' onPress={toAbout} />
      <Button title='Review' onPress={toReviewDetails} />
      <Button title='Calculator' onPress={toCalc} />
      <Button title='Product List' onPress={toProductList} />
      <Button title='Contacts' onPress={toContacts} />
      <Text> app!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding:20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });