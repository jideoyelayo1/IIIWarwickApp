import React,{useState} from 'react';
import { StyleSheet, View, Text, Button,TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import { Checkbox } from 'react-native-paper';

export default function SignUp({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }
  const toTermsOfService = () =>{
    navigation.push('TermsOfService');
  }

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [Cnfpwd, setCnfPwd] = useState("");
  const [checked, setChecked] = useState(false);

  const SigningUp = () => {
    if(user===""){
      alert("Invalid username");return;
    }
    if(email===""){
      alert("Invalid Email");return;
    }
    if(pwd===""){
      alert("Invalid Password");return;
    }
    if(Cnfpwd===""){
      alert("Confirm Password");return;
    }
    if(pwd !== Cnfpwd){
      setPwd("");setCnfPwd("");
      alert("Passwords do not match"); return;
    }
    if(checked===false){
      alert("You have not agreed to terms of service");return;
    }
    
    setUser("");setCnfPwd("");setPwd("");setEmail("");setChecked(false);
    alert("This has not been implemented yet")
  
  }

  return (
    <View style={globalStyles.container}>
      <Text>SignUp Screen</Text>
      <Text>Username:</Text><TextInput style={globalStyles.Calc_buttons}
        onChangeText={(value) => setUser(value)}
        value={user}
      />
      <Text>Email:</Text><TextInput style={globalStyles.Calc_buttons}
        onChangeText={(value) => setEmail(value)}
        value={email}
      />
      <Text>Password:</Text><TextInput style={globalStyles.Calc_buttons}
        onChangeText={(value) => setPwd(value)}
        value={pwd}
      />
      <Text>Confirm Password:</Text><TextInput style={globalStyles.Calc_buttons}
        onChangeText={(value) => setCnfPwd(value)}
        value={Cnfpwd}
      />
      <Button title='Agree to Terms and Conditions:' onPress={toTermsOfService}/>
      <Checkbox style={globalStyles.checkbox}
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => {
          setChecked(!checked);
        }}
      />

      <Button title='Submit' onPress={SigningUp}/>
      <Button title='back' onPress={pressHandler} />
    </View>
  );
}