import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import colors from "../styles/colors";

const SearchBanner = ({ handleSearch, searchPhrase }) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={handleSearch}
            value={searchPhrase}
            style={styles.textInput}
            placeholder="Search a movie"
            placeholderTextColor="white"
          />
          <Button title="search" color={colors.red} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SearchBanner;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    paddingTop: 60,
    height: 150,
    backgroundColor: "rgba(0,0,0,0.75)",

    width: "100%",
  },
  textInput: {
    borderWidth: 1,
    width: "77%",
    backgroundColor: "#4a4a4a",
    height: 40,
    padding: 10,
    color: "white",
    borderRadius: 6,
  },

  image: {
    minHeight: 100,
  },
});
