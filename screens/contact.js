import React, { useState } from 'react';
import { StyleSheet, View, Text, Button,TextInput } from 'react-native';
import { globalStyles } from '../styles/global';

export default function Contacts({ navigation }) {

  const pressHandler = () => {
    navigation.goBack();
  }
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    alert("This contact page is not currently operational yet"+"\n"+"hi "+ name + " " + email + "\n"+ message);
    
  };

  return (
    <View style={globalStyles.container}>
      <Text>Product Screen</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Name"
        onChangeText={text => setName(text)}
        value={name}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        placeholder="Message"
        onChangeText={text => setMessage(text)}
        value={message}
        multiline={true}
        numberOfLines={5}
      />
      <Button title="Submit" onPress={handleSubmit}  />

      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}