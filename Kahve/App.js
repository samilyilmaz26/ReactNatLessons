import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View ,ImageBackground } from 'react-native';
 
import Start from './screens/Start';
import {}  from '../Kahve/images/kus.jpg'
 
export default function App() {
  return (
    //  Step   3
    //  <View  style=  {styles.Container} >
    //      <StartGameScreen></StartGameScreen>
    //   </View>
    <LinearGradient colors={["blue", "yellow"]} style={styles.Container}>
       {/* Step 5 */}
       <ImageBackground
        source={require('../Kahve/images/kus.jpg')}
        resizeMode="center"
        style={styles.Container}
        imageStyle={styles.backgroundImage}
      >
        <Start />
      </ImageBackground>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
   //  backgroundColor: 'yellow'
  },
    backgroundImage: {
     opacity: 0.55
  }
});
