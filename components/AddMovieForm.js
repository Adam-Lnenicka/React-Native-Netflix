import { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function AddMovieForm() {
  const [values, setValues] = useState({
    title: "",
    overview: "",
    release_date: "",
    genres: [],
  });

  const handleTitleChange = (test) => {
    setValues((prevValues) => ({ ...prevValues, title: test }));
    console.log(values);
  };

  const handleOverviewChange = (test) => {
    setValues((prevValues) => ({ ...prevValues, title: test }));
    console.log(values);
  };

  const handleReleaseDateChange = (test) => {
    setValues((prevValues) => ({ ...prevValues, title: test }));
    console.log(values);
  };
  return (
    <View>
      <TextInput
        placeholder="Enter movie title"
        onChangeText={handleTitleChange}
      />

      <TextInput
        placeholder="Enter movie title"
        onChangeText={handleTitleChange}
      />

      <TextInput
        placeholder="Enter movie title"
        onChangeText={handleTitleChange}
      />

      <Button title="Add Movie" />
      <Button title="Reset" />
    </View>
  );
}
