import { useState } from "react";
import { Button, TextInput, View } from "react-native";

export default function AddMovieForm() {
  const [values, setValues] = useState({
    title: "",
    overview: "",
    release_date: "",
    poster_path: "",
  });

  const handleTitleChange = (input) => {
    setValues((prevValues) => ({ ...prevValues, title: input }));
    console.log(values);
  };

  const handleOverviewChange = (input) => {
    setValues((prevValues) => ({ ...prevValues, title: input }));
    console.log(values);
  };

  const handleReleaseDateChange = (input) => {
    setValues((prevValues) => ({ ...prevValues, title: input }));
    console.log(values);
  };

  const handlePosterPathChange = (input) => {
    setValues((prevValues) => ({ ...prevValues, title: input }));
    console.log(values);
  };
  return (
    <View>
      <TextInput
        placeholder="Enter movie title"
        onChangeText={handleTitleChange}
      />

      <TextInput
        placeholder="Enter movie overview"
        onChangeText={handleOverviewChange}
      />

      <TextInput
        placeholder="Enter movie title"
        onChangeText={handleReleaseDateChange}
      />

      <TextInput
        placeholder="Enter movie title"
        onChangeText={handlePosterPathChange}
      />

      <Button title="Add Movie" on />
      <Button title="Reset" />
    </View>
  );
}
