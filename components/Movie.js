import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";

export default function Movie({ item }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={globalStyles.boldText}>{item.title}</Text>
        <Text style={globalStyles.regularText}>{item.release_date}</Text>
        <Image source={{ width: 400, height: 400, uri: item.poster_path }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "white",
  },
});
