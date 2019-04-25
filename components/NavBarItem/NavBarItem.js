import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { vars as globalVars } from "../../styles/global";
import { BorderlessButton } from "react-native-gesture-handler";

const NavBarItem = (props) => {  
  return (
    <View
      style={[styles.container, props.style]} >
      <TouchableOpacity
        style={styles.button}
        hitSlop={{ 
          left: 20,
          right: 20
        }}
        onPress={props.onPress}
      >
        <View style={styles.textWrapper}>
          <Text style={styles.itemText}>{props.title.toUpperCase()}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
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
