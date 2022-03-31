import { Button, StyleSheet, TextInput, View } from "react-native";

const SearchBanner = ({ handleSearch, searchPhrase }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleSearch}
        value={searchPhrase}
        style={styles.textInput}
      />

      <Button title="search" />
    </View>
  );
};

export default SearchBanner;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    width: "80%",
  },
});
