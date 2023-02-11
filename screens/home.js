import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function Home({ navigation }) {

  const toReviewDetails = () => {
    navigation.push('ReviewDetails');
  }

  return (
    <View >
      <Text >Home Screen</Text>
      <Button title='Review' onPress={toReviewDetails} />
    </View>
  );
}