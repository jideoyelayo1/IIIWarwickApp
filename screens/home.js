import React from 'react';
import { StyleSheet, View, Text, Button,SafeAreaView } from 'react-native';

export default function Home({ navigation }) {

  const toReviewDetails = () => {    navigation.push('ReviewDetails');  }
  const toAbout = () => {    navigation.push('About');  }
  const toCalc = () => {    navigation.push('Calculator');  }
  const toProductList = () => {    navigation.push('Product_List');  }
  const toContacts = () => {    navigation.push('Contacts');  }

  return (
    <SafeAreaView style={styles.container}>
      <Text >Home Screen</Text>
      <Button title='About' onPress={toAbout} />
      <Button title='Review' onPress={toReviewDetails} />
      <Button title='Calculator' onPress={toCalc} />
      <Button title='Product List' onPress={toProductList} />
      <Button title='Contacts' onPress={toContacts} />
      <Text>Open up App.js to start working on your app!</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignSelf: 'stretch',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
  