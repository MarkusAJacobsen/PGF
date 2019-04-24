import React from "react";
import { TabBarBottom } from "react-navigation";
import { View, Text } from "react-native";
// import { LinearGradient } from "expo";
// import { Ionicons  } from '@expo/vector-icons';

const CustomTabBarBottom = props => {
  return (
    <View>
      <View style={styles.actionButton}>
        {/* <Ionicons name={"ios-add"} size={45} color={"#fff"} style={styles.buttonIcon}/> */}
      </View>
      <View style={{ backgroundColor: "#fff" }}>
        <TabBarBottom {...props} />
      </View>
    </View>
  );
};

const styles = {
  actionButton: {
    backgroundColor: "#6200EE",
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    position: "absolute",
    bottom: 40,
    left: 155,
    zIndex: 999
  },
  buttonIcon: {
    textAlign: "center"
  }
};

export default CustomTabBarBottom;
