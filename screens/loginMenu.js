import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function LoginMenu({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }
  const toMyAccount = () => {;navigation.push('MyAccount');  }
  const toMyOrders = () => {;navigation.push('MyOrders');  }
  const toCustomerService = () => {;navigation.push('CustomerService');  }
  const toGraphs = () => {;navigation.push('Graphs');  }


  return (
    <View style={globalStyles.container}>
      <Text>Login Menu</Text>
      <Button title='My Account' onPress={toMyAccount} />
      <Button title='My orders' onPress={toMyOrders} />
      <Button title='Graphs' onPress={toGraphs} />
      <Button title='Customer Service' onPress={toCustomerService} />
      
      <Button title='log out' onPress={pressHandler} />
    </View>
  );
}