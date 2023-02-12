import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default function SignUp({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }

  return (
    <View style={globalStyles.container}>
      <Text>SignUp Screen</Text>
      <Button title='Submit'/>
      <Button title='back' onPress={pressHandler} />
    </View>
  );
}