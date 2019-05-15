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
import { getAllPlants } from "@utils/api"; 
import PlantsRow from "./PlantsRow";
import { Header, TitleBar } from "@components";

// TODO: step-by-step
/* 
  1. All garden items
  2. Click on item and do step-by-step 
*/
// @flow 
export default class GuidesHomeScreen extends Component {

  constructor(props) {
     super(props);
    this.state = {
      plants: {},
      title: ""
    };
    this.categories = ["vegetables", "herbs", "fruits", "flowers"];
  }   

  componentWillMount() {
    const allPlants = getAllPlants();
    
    this.setState({
      plants: allPlants,
      // title: fetchUsername()
    });
  } 
  
  render() {
    const { navigation } = this.props;
    const data = navigation.getParam('data', null);

    if(data != null) console.log(data);

    return (
      <View style={globalStyles.screenContainer}>
        <TitleBar heading="Guides" isVisibleSearch={true} />
        <View style={globalStyles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.categories.map(c => (
              <PlantsRow
                navigation={navigation}
                category={c}
                plants={this.state.plants[c]}
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
