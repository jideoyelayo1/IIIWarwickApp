import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Image,Button } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import Navigator from './routes/homeStack';

export default function App() {
  return (
      <Navigator/>    
  );
};

