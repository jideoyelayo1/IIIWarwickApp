import Reac, { useState } from 'react';
import { StyleSheet, View, Text, Button,TextInput } from 'react-native';
import { globalStyles } from '../styles/global';
import {generateFertiliserAdvice} from './AI_fert'


export default function Calculator({ navigation }) {

  const pressHandler = () => { navigation.goBack(); }

  //NPK
  const [N_val, setN_val] = useState('');
  const [P_val, setP_val] = useState('');
  const [K_val, setK_val] = useState('');
  const [Temperature, setTemperature] = useState('');
  const [Humidity, setHumidity] = useState('');
let fertiliseText;
  const Fertiliser = () => {
    const [fertiliseText, setFertiliseText] = useState('');
  
    useEffect(() => {
      setFertiliseText(generateFertiliserAdvice(nitrogen, phosphorus, potassium));
    }, []);
}



  return (
    <View style={globalStyles.container}>
      <Text>Calculator Screen</Text>
      <Button title='Run' onPress={Fertiliser} />
      <Text>N:</Text><TextInput style={globalStyles.Calc_buttons}
        onChangeText={(value) => setN_val(value)}
        value={N_val}
        keyboardType='numeric'
      />
      <Text>P:</Text><TextInput style={globalStyles.Calc_buttons}
        onChangeText={(value) => setP_val(value)}
        value={P_val}
        keyboardType='numeric'
      />
      <Text>K:</Text><TextInput style={globalStyles.Calc_buttons}
        onChangeText={(value) => setK_val(value)}
        value={K_val}
        keyboardType='numeric'
      />
      <Text>Temperature:</Text><TextInput style={globalStyles.Calc_buttons}
        onChangeText={(value) => setTemperature(value)}
        value={Temperature}
        keyboardType='numeric'
      />
      <Text>Humidity:</Text><TextInput style={globalStyles.Calc_buttons}
        onChangeText={(value) => setHumidity(value)}
        value={Humidity}
        keyboardType='numeric'
      />
      <Button title='Run' onPress={Fertiliser} />
      <Text>{fertiliseText}</Text>
      <Button title='back to home screen' onPress={pressHandler} />
    </View>
  );
}