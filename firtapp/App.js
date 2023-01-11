import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
     <View>
    <View  style= {styles.container}>
      <Text style = {styles.textcontainer}  >Open up  </Text>
      <StatusBar style="auto" />
    </View>
    <View style= {styles.container2}>
      <Text>Hello</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'yellow',
     
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom:600

  },
  textcontainer: {
    fontSize:58,
    fontFamily: 'ariel',
    color: 'blue'
    
  },
  container2: {
    
    flex:1,
    backgroundColor: 'red',
    
   
    alignItems: 'center',
    justifyContent: 'center',
  }
   
});
