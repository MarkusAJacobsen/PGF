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
import { searchStringInArray, comparedPlants, fetchUsername } from '@utils/functions';

// TODO: step-by-step
/* 
  1. All garden items
  2. Click on item and do step-by-step 
*/
// @flow 
export default class GuidesHomeScreen extends Component {

  constructor(props) {
    super(props);   
    this.categories = ["vegetables", "herbs", "fruits", "flowers"];
    this.handleResult = this.handleResult.bind(this);  
    
    let { navigation } = props; 
    let paramSearch = navigation.getParam('search', ""); 

    this.state = {
      plants: getAllPlants(),
      search: (paramSearch !== null) ? paramSearch : "", 
    }
  }    

  componentWillUnmount(){ 
    this.state = null;
  }

  handleResult(search){  
    this.setState({
      search: search,
    });   
  }
  
  render() {
    let { search, plants } = this.state; 
    let { navigation } = this.props;   
    
    return (
      <View style={globalStyles.screenContainer}>
        <TitleBar heading="Guides" handleResult={this.handleResult} isVisibleSearch={true} />
        <View style={globalStyles.contentContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this.categories.map(c => (
              <PlantsRow
                navigation={navigation}
                category={c}
                plants={(search.length > 0) ? searchStringInArray(search, plants[c]) : plants[c] }
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
