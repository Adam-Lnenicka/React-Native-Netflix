import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import colors from "../styles/colors";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  ImageBackground,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Movie from "../components/Movie";
import SearchBanner from "../components/SearchBanner";
import { globalStyles } from "../styles/globalStyles";
import { useMovieApi } from "../components/MovieApi";

export default function Home({ navigation }) {
  const [text, setText] = useState("");
  const [textArray, setTextArray] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");
  const { movies, movieArray } = useMovieApi();

  const handleSearch = (input) => {
    setSearchPhrase(input);
  };

  const inputChange = (input) => {
    setText(input);
  };

  const handleArray = () => {
    setTextArray((currentTextArray) => [...currentTextArray, text]);
    setText("");
  };

  const moviesAfterSearch = movies.filter((data) => {
    if (searchPhrase === "") {
      return data;
    } else if (data.title.toLowerCase().includes(searchPhrase.toLowerCase())) {
      return data;
    }
    return null;
  });

  useEffect(() => {
    movieArray();
  });

  return (
    <View style={globalStyles.container}>
      <Button
        title="Add Movie"
        onPress={() => {
          navigation.navigate("AddMovieForm");
        }}
      />
      <View style={styles.container}>
        <SearchBanner handleSearch={handleSearch} searchPhrase={searchPhrase} />

        <Text>Open up App.js to start working on your app!</Text>

        <TextInput style={styles.textInput} onChangeText={inputChange} />
        <Button title="my button" onPress={handleArray} />
        <StatusBar style="auto" />
        <View>
          {textArray.map((t) => (
            <Text key={t}>{t}</Text>
          ))}
        </View>
        <FlatList
          data={moviesAfterSearch}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("FeaturedMovie", item)}
            >
              <Movie item={item} />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  textInput: {
    borderWidth: 1,
    width: "80%",
    color: colors.darkGrey,
  },
});
