import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView
} from "react-native";
import {
  styles as globalStyles,
  vars as globalVars
} from "@utils/global";
import { Header, TitleBar, MyPlantsRow } from "@components";
import { getMyPlants } from "@utils/api";
import Tabs from "react-native-tabs";

export default class MyGardenHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPlants: {}
    };
    this.categories = ["vegetables", "herbs", "fruits", "flowers"];
  }

  componentWillMount() {
    const myPlants = getMyPlants();
    this.setState({
      myPlants: myPlants
    });
  } 
  
  render() {
    const plants = getMyPlants();
    const { navigation } = this.props;
    return (
      <View style={globalStyles.screenContainer}>
        <TitleBar heading="My Garden" isVisibleSearch={true} />
        <View style={globalStyles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.categories.map(c => (
              <MyPlantsRow
                navigation={navigation}
                category={c}
                plants={this.state.myPlants[c]}
                key={c}
              />
            ))}
          </ScrollView>
        </View> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 6,
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
