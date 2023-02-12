import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import axios from "axios";


export default function FarmingUpdates({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }
  
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=London&appid=0bb15373a22894cf2b9307790e67b5c2"
      );
      setWeather(data);
    };

    fetchData();
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Farming Updates </Text>
      <Text>{weather.main && weather.main.temp}</Text>
      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}