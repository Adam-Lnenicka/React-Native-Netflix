import { Button, StyleSheet, TextInput, View } from "react-native";

const SearchBanner = ({ handleSearch, searchPhrase }) => {
  return (
    <View style={styles.outerInputContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleSearch}
          value={searchPhrase}
          style={styles.textInput}
        />

        <Button title="search" />
      </View>
    </View>
  );
};

export default SearchBanner;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
    paddingTop: 120,
    height: 300,
    backgroundColor: "rgba(0,0,0,0.7)",

    width: "100%",
  },
  textInput: {
    borderWidth: 1,
    width: "77%",
    backgroundColor: "#4a4a4a",
    height: 40,
    padding: 10,
    color: "white",
    borderRadius: 5,
  },
});
