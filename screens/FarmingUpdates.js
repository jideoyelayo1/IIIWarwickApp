import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import axios from "axios";


export default function FarmingUpdates({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }
  const createAPost = () => {
    navigation.push('newPost');
  }
  
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=0bb15373a22894cf2b9307790e67b5c2"
      );
      setWeather(data);
    };

    fetchData();
  }, []);

  const convertUnixToHM = (unix) => {
    var date = new Date(unix * 1000);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    return formattedTime;
  }

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Farming Updates{"\n"} </Text>
      <View style={globalStyles.Farming_Alerts_box} color= '#c9efc7'>

      <Text>The temperature is {Math.round((weather.main && weather.main.temp - 273.15 )* 10) / 10}° in {weather.name},{weather.sys && weather.sys.country} 
      but it feels like {Math.round( (weather.main && weather.main.feels_like - 273.15 )* 10) / 10}°. Humidity is {weather.main && weather.main.humidity} and
       . </Text>
       <Text> Sunrise is at {convertUnixToHM(weather.sys && weather.sys.sunrise)} and sunset is at {convertUnixToHM(weather.sys && weather.sys.sunset)}.</Text>
       <Text> Wind speed is {weather.wind && weather.wind.speed} m/s and wind direction is {weather.wind && weather.wind.deg}°.</Text>
       <Text> The weather is {weather.weather && weather.weather[0].description}.</Text>
       <Text> The pressure is {weather.main && weather.main.pressure} hPa.</Text>
       <Text> The visibility is {weather.visibility} m.</Text>
       <Text> The cloudiness is {weather.clouds && weather.clouds.all} %.</Text>
       <Text> The rain in the last 1 hour is {weather.rain && weather.rain["1h"]} mm.</Text>
        <Text> The snow in the last 1 hour is {weather.snow && weather.snow["1h"]} mm.</Text>
      </View>
      <View></View>
        
      <Button title='Create a Post' onPress={createAPost} color= '#c9efc7' />
      <Button title='back to home screen' onPress={pressHandler} color= '#c9efc7' />
    </View>
  );
}