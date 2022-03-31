import { View, Text, Image } from "react-native";

export default function (props) {
  const { title, overview, release_date, poster_path } = props.route.params;
  return (
    <View>
      <Image source={{ width: 300, height: 400, uri: poster_path }} />
      <Text>{title}</Text>
      <Text>{overview}</Text>
      <Text>{release_date}</Text>
    </View>
  );
}
