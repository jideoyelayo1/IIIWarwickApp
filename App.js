import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import Navigator from './routes/homeStack';

export default function App() {
  return (
    <NavigationContainer>

    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={require("./assets/logo-no-background.png")}
      style={{width: "100%", height:160}} 
      />
      <StatusBar style="auto" />
      <Navigator style={navigator}/>
      <Text>Open up App.js to start working on your app!</Text>
    </SafeAreaView>
    </NavigationContainer>
    
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
  navigator: {
    width: '100%',
    height: 200,
    backgroundColor:"blue"
  }
});
