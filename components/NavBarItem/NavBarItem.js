import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { vars as globalVars } from "../../styles/global";
import { BorderlessButton } from "react-native-gesture-handler";

const NavBarItem = ({ onPress, title }) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.button}
      hitSlop={{
        // top: 20,
        // bottom: 20,
        left: 20,
        right: 20
      }}
      onPress={onPress}
    >
      <View style={styles.textWrapper}>
        <Text style={styles.itemText}>{title.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: isActive ? globalVars.lightGreen : globalVars.white,
    height: 87,
    width: 100
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textWrapper: {
    width: 75
  },
  itemText: {
    color: globalVars.black,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center"
  }
});

export default NavBarItem;
