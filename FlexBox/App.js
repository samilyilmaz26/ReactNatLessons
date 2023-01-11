import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const add= () => {
    
  }
  const onInput=(txt)=> {
  
  }
  return (
    <View style = {styles.container}>
    <View style= {styles.inputContainer}  >
     <TextInput style={styles.textInput} 
     onChangeText= {onInput}
     placeholder= "isim girin" />
     <Button title='Ekle' onPress={add}  /> 
    
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   paddingTop:50,
   paddingHorizontal:16
  },
  inputContainer: {
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: "center", 
    paddingBottom: 24,
    borderBottomWidth: 1,
  },
  textInput:{
    borderWidth:1,
    borderColor:'blue',
    width:'95%',
    marginRight:17,
    fontSize : 35
  } 
  
});
