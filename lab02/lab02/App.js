import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {


  }
  const [newAge, setNewAge] = useState(0)
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [birthdays, setBirthdays] = useState([]);

  return (
      <View style={styles.container}>
        <Text style={styles.topItem}>Enter name:</Text>
        <TextInput
            style={styles.input}
            placeholder='Ex: Joe Pastucha'
            onChangeText={(val) => setName(val)}
        />
        <Text style={styles.middleItem}>{name} is {count} years old</Text>
        <Button title='BIRTHDAY' onPress={clickHandler} />
        <FlatList
            data={birthdays}
            renderItem={({ item }) => (
                <Text>{item.key}</Text>
            )}
        />
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  topItem: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 8,
    margin: 10,
    width: 200,
  },
  middleItem: {
    padding: 10
  }
});
