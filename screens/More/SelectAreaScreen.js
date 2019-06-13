import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { LoginManager } from "react-native-fbsdk";
import { vars as globalVars, setUpUserData } from "@utils/global";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { PGCRequestList, PGCRequest } from "@network";

class SelectAreaScreen extends Component {
  constructor(props) {
    super(props);
    this.exampleText = "Meny";

    // Common block that should be included in all constructors
    // to ensure userData is included properly.
    this.state = {
      userData: {
        uid: "",
        name: "",
        origin: "",
        area: ""
      }
    };
    setUpUserData().then(data => {
      this.setState({
        userData: data
      });
      this.props.userData = data;
    });
    // End of common block
  }

  setNewArea = async (data, details = null) => {
    AsyncStorage.setItem("@PGF_area", data.description);
    console.log(data);
    console.log(details);
    Promise.all([
      PGCRequest(PGCRequestList.USER_UPDATE, [
        this.state.userData.uid,
        this.state.userData.name,
        this.state.userData.origin,
        data.description
      ])
    ])
      .then(result => {
        // Once the request goes through, go to main page
        this.props.navigation.navigate("AuthLoading");
      })
      .catch(() => {});
  };

  render() {
    return (
      <GooglePlacesAutocomplete
        placeholder="Enter Location"
        minLength={2}
        autoFocus={false}
        returnKeyType={"default"}
        fetchDetails={true}
        styles={{
          textInputContainer: {
            backgroundColor: "rgba(0,0,0,0)",
            borderTopWidth: 0,
            borderBottomWidth: 0
          },
          textInput: {
            marginLeft: 0,
            marginRight: 0,
            height: 38,
            color: "#5d5d5d",
            fontSize: 16
          },
          predefinedPlacesDescription: {
            color: "#1faadb"
          }
        }}
        currentLocation={false}
        query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: "AIzaSyCfSRtKIrBn2V376NUPXc9IPshkdh8Nq30",
          language: "en", // language of the results
          types: "(cities)" // default: 'geocode'
        }}
        onPress={this.setNewArea}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
export default SelectAreaScreen;
