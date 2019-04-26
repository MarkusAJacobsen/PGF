import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import { vars as globalVars } from "@utils/global";
import { BorderlessButton } from "react-native-gesture-handler";
// Icons set
import Icon from 'react-native-vector-icons/FontAwesome';

const NavBarItem = (props) => {  

  let displayLabel;

  if(props.icon){
    displayLabel = <Icon name={props.icon} style={styles.itemIcon} />;
  } else if(props.title) {
    displayLabel =  <Text style={styles.itemText}>{props.title.toUpperCase()}</Text>
  } else {
    displayLabel =  <Text style={styles.itemText}></Text>
  }

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
          {/* Display label element */}
          { displayLabel }
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
    fontFamily: globalVars.normal,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center"
  },
  itemIcon: {
    color: globalVars.black,
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center"
  }
});

export default NavBarItem;
