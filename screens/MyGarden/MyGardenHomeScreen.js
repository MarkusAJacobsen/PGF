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
import { searchStringInArray, comparedPlants, fetchUsername } from '@utils/functions';

// @flow
export default class MyGardenHomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myPlants: {},
      title: ""
    };
    this.categories = ["vegetables", "herbs", "fruits", "flowers"];
    this.handleResult = this.handleResult.bind(this); 
  }
   
  componentWillMount() {
    const myPlants = getMyPlants();
    
    this.setState({
      myPlants: myPlants,
      search: "",
    });
  } 

  handleResult(search){ 
    this.setState({
      search: search
    });   
  }
  
  render() {
    const { search, myPlants } = this.state; 
    const { navigation } = this.props; 

    return (
      <View style={globalStyles.screenContainer}>
        <TitleBar heading="My Garden" handleResult={this.handleResult} isVisibleSearch={true} />
        <View style={globalStyles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.categories.map(c => (
              <MyPlantsRow
                navigation={navigation}
                category={c}
                plants={ (search.length > 0) ? searchStringInArray(search, myPlants[c]) : myPlants[c] }
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
