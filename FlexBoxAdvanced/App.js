import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import { TextInput } from 'react-native-web';

export default function App() {
  const [personelName, setPersonelName] = useState("")
  const [plist, setPlist] = useState([])

  const add = () => {
    setPlist((currentList) => [...currentList, personelName],
      { text: personelName, id: '' });
    console.log(plist)
  }
  const onInput = (txt) => {
    setPersonelName(txt)

  }
  return (
   
    <View style={styles.container}>
      <View style={styles.inputContainer}  >
        { <TextInput style={styles.textInput}
          onChangeText={onInput}
          placeholder="isim girin" /> }
        <Button title='Ekle' onPress={add} />

      </View  >
      <View style= {styles.personelContainer}>
      <FlatList  data={plist}
        renderItem={(p) => {
          p.index
          console.log(p.index)
          return (<View>
            <Text  >
              {p.item}
            </Text>
          </View>)
        }}
        keyExtractor={(item, index) => {
          return item
        }}
        alwaysBounceVertical='false'>

        return index

      </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
  },
  personelContainer: {
    flex: 4,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'blue',
    width: '95%',
    marginRight: 17,
    fontSize: 35
  }

});
