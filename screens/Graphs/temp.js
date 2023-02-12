import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { LineChart, Grid } from 'react-native-chart-kit';
import { globalStyles } from '../../styles/global';

export default function Temperature({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };

  return (
    <View style={globalStyles.container}>
      <Text>Temperature Values</Text>
      <LineChart
      data={data}
      width={375}
      height={220}
      chartConfig={{
        backgroundColor: '#528265',
        backgroundGradientFrom: '#528265',
        backgroundGradientTo: '#528265',
        decimalPlaces: 2,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
    </View>
  );
}