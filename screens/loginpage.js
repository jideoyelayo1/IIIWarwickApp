import React,{useState} from 'react';
import { StyleSheet, View, Text, Button,TextInput } from 'react-native';
import { globalStyles } from '../styles/global';


export default function LoginPage({ navigation }) {

  const pressHandler = () => { navigation.goBack(); }  
  const toSignUp = () => {;navigation.push('SignUp');  }
 

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");

  const toLoginMenu = () => {
    if(user !== "Jim" && pwd !== "Pass"){
      alert("Invalid Username or Password");
      setUser("");setPwd("");
      return;
    }
    setUser("");setPwd("");
    navigation.push('LoginMenu');  
  
  }


  return (
    <View style={globalStyles.container}>

      <Text>LoginPage Screen</Text>
      <Text>Username</Text><TextInput style={globalStyles.Calc_buttons}
        onChangeText={(value) => setUser(value)}
        value={user}
      />
      <Text>Password</Text><TextInput style={globalStyles.Calc_buttons}
        onChangeText={(value) => setPwd(value)}
        value={pwd}
      />

      <Button title='Log In' onPress={toLoginMenu} />
      <Button title='Sign Up' onPress={toSignUp} />

      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}