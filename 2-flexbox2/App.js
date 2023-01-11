import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.orangeBox} />
    <View style={styles.whiteBox} />
    <View style={styles.greenBox} />
  </View>
);
  
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingBottom: 24,
    borderBottomWidth: 5,
    borderBottomColor: "blue"
    // paddingTop: 24,
    // borderTopWidth: 10,
    // borderTopColor: "blue"
  },
  orangeBox: {
     flex:1,
    width: 80,
    height: 80,
    backgroundColor: 'orange',
  },
  whiteBox: {
    flex:1,
    width: 80,
    height: 80,
    backgroundColor: 'white',
  },
  greenBox: {
   flex:1,
    width: 80,
    height: 80,
    backgroundColor: 'green',
  },
 });