/* Inspired by https://reactnavigation.org/docs/en/auth-flow.html */

import React from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { ActivityIndicator, StatusBar, StyleSheet, View } from "react-native";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userId = await AsyncStorage.getItem("@PGF_userid");

    // This will switch to the Main screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userId ? "Main" : "Welcome");
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default AuthLoadingScreen;
