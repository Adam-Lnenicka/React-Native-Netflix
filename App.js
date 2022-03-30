import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
  TextInput,
  Button,
  FlatList,
} from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [textArray, setTextArray] = useState([]);
  const [movies, setMovies] = useState([]);

  const movieArray = async () => {
    const url = "http://localhost:4000/movies";

    try {
      const response = await fetch(url);
      const data = await response.json();
      setMovies(data.data);
    } catch (err) {
      console.log.err;
    }
  };

  const inputChange = (inputt) => {
    setText(inputt);
  };

  const handleArray = () => {
    setTextArray((currentTextArray) => [...currentTextArray, text]);
    setText("");
  };

  useEffect(() => {
    movieArray();
  });

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image
          source={{
            width: 500,
            height: 100,
            uri: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
          }}
        />
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput style={styles.textInput} onChangeText={inputChange} />
        <Button title="my button motherfucker" onPress={handleArray} />
        <StatusBar style="auto" />
        <View>
          {textArray.map((t) => (
            <Text key={t}>{t}</Text>
          ))}
        </View>
        <FlatList
          data={movieArray.data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => <View>{item.id}</View>}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  textInput: {
    borderWidth: 1,
    width: "80%",
  },
});
