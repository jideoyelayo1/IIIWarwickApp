import React,{useState,useEffect} from 'react';
import { StyleSheet, View, Text, Button,TextInput,SafeAreaView,ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import axios from 'axios';


export default function LoginPage({ navigation }) {

  const pressHandler = () => { navigation.goBack(); }  
  const toSignUp = () => {;navigation.push('SignUp');  }
 

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");




  const toLoginMenu = () => {
    retrieveData();
    
    if(user !== "Jim" && pwd !== "Pass"){
      alert("Invalid Username or Password");
      setUser("");setPwd("");
      return;
    }
    setUser("");setPwd("");
    navigation.push('LoginMenu');  
  
  }

  const retrieveData = async () => {
    try {
      const response = await fetch('https://webhook.site/cb184155-4b78-4189-88aa-082822ad1c51', {
        method: 'get',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        
      });
      alert("Sucess! 0.5")
      const data = await response.json();
      alert("Sucess!");
      return data;
    } catch (e) {
      alert(e);
    }
  };

  


  return (
    <ScrollView style={globalStyles.container}>

      <Text>LoginPage Screen</Text>
      <Text>Username</Text><TextInput style={globalStyles.Calc_buttons}
      autoComplete="username"
        onChangeText={(value) => setUser(value)}
        value={user}
      />
      <Text>Password</Text><TextInput style={globalStyles.Calc_buttons}
      secureTextEntry={true}
      placeholder="Enter password"
        onChangeText={(value) => setPwd(value)}
        value={pwd}
      />

      <Button title='Log In' onPress={toLoginMenu} />
      <Button title='Sign Up' onPress={toSignUp} />

      <Button title='back to home screen' onPress={pressHandler} />
    </ScrollView>
  );
}