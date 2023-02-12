import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button,SafeAreaView,Image } from 'react-native';
import { globalStyles } from '../styles/global';


export default function Home({ navigation }) {

  const toReviewDetails = () => {    navigation.push('ReviewDetails');  }
  const toFarmingUpdates = () => {    navigation.push('FarmingUpdates');  }
  const toLoginPage = () => {    navigation.push('LoginPage');  }
  const toAbout = () => {    navigation.push('About');  }
  const toCalc = () => {    navigation.push('Calculator');  }
  const toProductList = () => {    navigation.push('Product_List');  }
  const toContacts = () => {    navigation.push('Contacts');  }

  return (
    <SafeAreaView style={globalStyles.container} >
      <StatusBar style="auto" />
      <Image source={require("../assets/logo-no-background.png")}
      style={{width: "100%", height:160}} 
      />
      
      <Button title='About' onPress={toAbout} />
      <Button title='Login' onPress={toLoginPage} />
      <Button title='Farming Updates' onPress={toFarmingUpdates} />
      <Button title='Calculator' onPress={toCalc} />
      <Button title='Product List' onPress={toProductList} />
      <Button title='Contacts' onPress={toContacts} />
      <Text> *Still Under development*</Text>
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