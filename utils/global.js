import React from "react";
import { StyleSheet } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

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
  },
  topLabel: {
    color: vars.searchText,
    backgroundColor: vars.ligthYellow,
    paddingLeft: 22,
    paddingTop: 8,
    paddingBottom: 8,
    fontSize: 14,
    fontFamily: vars.bold
  }
});

// Function that extracts user data from AsyncStorage and returns a prepared object with the data
export const setUpUserData = async (props, state) => {
  // Set up object and default values
  let userData = {
    uid: "",
    name: "",
    origin: "",
    area: "",
  };

  // Pull data from AsyncStorage
  userData.uid = await AsyncStorage.getItem('@PGF_userid');
  userData.name = await AsyncStorage.getItem('@PGF_name');
  userData.origin = await AsyncStorage.getItem('@PGF_authMethod');
  userData.area = await AsyncStorage.getItem('@PGF_area');
  return userData;
};
