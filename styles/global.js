import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  container: {
    flex: 200,
    padding: 20,
    width:"100%"
  },
  Calc_buttons: { 
    height: 40, 
    borderColor: 'blue', 
    borderWidth: 1, 
  },
Product_titles: {
   fontSize: 24, 
   fontWeight: 'bold',
},
Product_cost: {
  fontSize: 11, 
  fontWeight: 'bold',
},
Product_info: {
  fontSize: 11, 
},
links: {
  color: 'blue',
  textDecorationLine: 'underline',
},
header: {
  color: 'Green',
  textDecorationLine: 'underline',
  fontSize:24,
},
subheader: {
  color: 'black',
  textDecorationLine: 'underline',
  fontSize:18,
},
bullet: {
  color: 'black',
},
subsubheader: {
  color: 'black',
  textDecorationLine: 'underline',
  fontSize:14,
},
checkbox: {
  borderWidth: 1,
  borderColor: 'grey',
  padding: 10,
  borderRadius: 5,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor:'black',
},
text: {
  marginLeft: 10,
},
});