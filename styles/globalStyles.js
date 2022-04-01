import { StyleSheet } from "react-native";
import colors from "./colors";

export const globalStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkGrey,
    color: colors.white,
  },
  largeText: {
    color: colors.white,
    fontWeight: "900",
  },
  boldText: {
    color: colors.white,
    fontWeight: "900",
  },
  regularText: {
    color: colors.white,
  },
});
