 import { useState } from "react"
import { View,StyleSheet, TextInput } from "react-native"
import PrimaryButton from "../components/PrimaryButton"

export default function Start() {
  const [name, setName] = useState("");
  function getName() {
    alert(name)
  }
  function reset( ) {
    setName("")
  }
  function changeText( name ) {
    setName(name)
  }
  return (
     <View style={styles.container}>
        <TextInput 
        style= {styles.textInput}
        placeholder="Adın nedir"
        maxLength={20} 
     //   keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect = {false}
        onChangeText={changeText}
        value = {name}
        />
     
        <View style= {styles.buttonsContainer}>
        
        <PrimaryButton press = {getName}   style= {styles.buttonContainer} >Ok</PrimaryButton>
        <PrimaryButton  press={reset}  style= {styles.buttonContainer} >Reset</PrimaryButton>
        </View>
     </View>
  )
}
const styles = StyleSheet.create({
   container: {
      justifyContent: 'center',
      alignItems: 'center',
      // yukardaki ikili beraber kullanılmalı
      marginTop: 100,
      marginHorizontal: 16,
      padding: 16,
      backgroundColor: 'purple',
      borderRadius: 8,
      elevation:  7,
    },
    textInput: {
        height: 50,
        width: 350,
        fontSize: 32,
     //   borderBottomColor: 'yellow',
     //   borderBottomWidth: 2,
        borderColor: 'yellow',
        borderWidth: 2,
        color: 'yellow',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      buttonsContainer: {
        flexDirection: 'row'
      },
      buttonContainer: {
       // flex: 1
      },
 })
 
