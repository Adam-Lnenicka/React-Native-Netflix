import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import colors from "../styles/colors";

export default function (props) {
  const { title, overview, release_date, poster_path } = props.route.params;
  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        source={{ width: 300, height: 480, uri: poster_path }}
      />
      <View style={styles.textContent}>
        <Text style={styles.movieTitleText}> {title}</Text>
        <Text style={styles.coloredText}>{release_date}</Text>
        <Text style={styles.movieDescriptionText}>{overview}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  image: {
    width: "100%",
  },
  textContent: {
    padding: 20,
  },
  movieTitleText: {
    color: colors.white,
    fontWeight: "800",
    paddingVertical: 10,
  },
  coloredText: { color: colors.red, fontWeight: "700", paddingVertical: 10 },

  movieDescriptionText: { color: colors.white },
});
