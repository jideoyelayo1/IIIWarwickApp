import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import Graph from './graphs';

export default function LoginPage({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }
  const toGraphs = () => {;navigation.navigate('Graphs');  }

  return (
    <View style={globalStyles.container}>

      <Text>LoginPage Screen</Text>
      <Button title='Graphs' onPress={toGraphs} />

      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}