import React, { Children } from 'react'
import  {View,Text,StyleSheet, Pressable} from 'react-native'

export default function PrimaryButton({children ,press}) {
// const press = ()=> {
//     console.log("pressed !")
// }
  return (
     <View style= {styles.container}>
        <Pressable onPress={press}>
        <Text style = {styles.buttoncontainer}>
             {children}
        </Text>
        </Pressable>
     </View>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:'yellow',
      borderRadius:28,
      paddingVertical:8,
      paddingHorizontal:16,
      elevation:2,
      margin:4,
      width: 80
  
    },
    buttoncontainer: {
      color:'blue',
      textAlign: 'center',
    }
  })
  
