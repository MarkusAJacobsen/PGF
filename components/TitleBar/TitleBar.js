import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import { vars as globalVars } from "../../styles/global";

class TitleBar extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.heading}</Text>
      </View>
    );
  }
}

export default TitleBar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: globalVars.green
  },
  text: {
    fontSize: 32,
    textAlign: "center",
    color: globalVars.ligthGrey,
    fontFamily: globalVars.regular,
    marginTop: 15
  }
});
