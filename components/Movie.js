import { Image, Text, View } from "react-native";

export default function Movie({ item }) {
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.release_date}</Text>

      <Image source={{ width: 300, height: 400, uri: item.poster_path }} />
    </View>
  );
}
