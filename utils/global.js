import { StyleSheet } from "react-native";

export const vars = {
  // Colors
  yellow: "#f9f2a2",
  ligthYellow: "#FFF6D5",
  lightGreen: "#A4FC6C",
  green: "#37C478",
  white: "#FFFFFF",
  black: "#000000",
  ligthGrey: "#FCFCFC", // not from the design
  grey: "#E6E6E6",
  header: "#164450",
  searchText: "#164450",
  orange: "#FF6B00",
  // fontFamily Titillium Web font types
  regular: "TitilliumWeb-Regular",
  normal: "TitilliumWeb-Regular",
  bold: "TitilliumWeb-Bold",
  semiBold: "TitilliumWeb-SemiBold"
};

export const styles = StyleSheet.create({
  screenContainer: {
    flex: 1
  },
  contentContainer: {
    flex: 6,
    backgroundColor: vars.ligthYellow
  }
});
